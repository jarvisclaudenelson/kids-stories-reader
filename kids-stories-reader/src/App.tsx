import { useState, useEffect } from 'react'
import './App.css'

interface Chapter {
  name: string
  path: string
  content: string
}

// Illustration mapping - chapter index -> exact page -> image
const CHAPTER_IMAGES: Record<number, Record<number, { img: string; alt: string }>> = {
  0: { // Chapter 1
    0: { img: '/images/chapter1/page1-crash.png', alt: 'The crash' },
    1: { img: '/images/chapter1/page2-forest.png', alt: 'Alien forest' },
    2: { img: '/images/chapter1/page3-rockslide.png', alt: 'The rockslide' },
    3: { img: '/images/chapter1/page4-spire.png', alt: 'Crystal spire' },
  },
  1: { // Chapter 2
    0: { img: '/images/chapter2/page1-spire.png', alt: 'Crystal tower' },
    1: { img: '/images/chapter2/page2-colony.png', alt: 'The colony' },
    2: { img: '/images/chapter2/page3-light.png', alt: 'Light beam' },
  }
}

function getIllustration(chapterIndex: number, pageIndex: number) {
  const chapterImgs = CHAPTER_IMAGES[chapterIndex]
  if (!chapterImgs) return null
  return chapterImgs[pageIndex] || null
}

const STORAGE_KEY = 'story-reader-progress'

function getStoredProgress(): { chapter: number; page: number } | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

function saveProgress(chapter: number, page: number) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ chapter, page }))
  } catch {
    // ignore
  }
}

function App() {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const stored = getStoredProgress()
  const [currentChapter, setCurrentChapter] = useState(stored?.chapter ?? 0)
  const [currentPage, setCurrentPage] = useState(stored?.page ?? 0)
  const [fontSize, setFontSize] = useState(18)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [chapterPageCounts, setChapterPageCounts] = useState<Record<number, number>>({})

  // Save progress when chapter or page changes
  useEffect(() => {
    saveProgress(currentChapter, currentPage)
  }, [currentChapter, currentPage])

  // Prevent screen from dimming
  useEffect(() => {
    let wakeLock: WakeLockSentinel | null = null
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock = await navigator.wakeLock.request('screen')
        }
      } catch (err) {
        // Wake lock not supported or denied
      }
    }
    requestWakeLock()
    return () => {
      if (wakeLock) wakeLock.release()
    }
  }, [])

  const getPages = (content: string): string[] => {
    const paragraphs = content.split('\n\n').filter(p => p.trim())
    const pages: string[] = []
    let currentPage = ''
    
    paragraphs.forEach(para => {
      if (currentPage.length + para.length > 800) {
        if (currentPage) pages.push(currentPage)
        currentPage = para
      } else {
        currentPage += (currentPage ? '\n\n' : '') + para
      }
    })
    if (currentPage) pages.push(currentPage)
    return pages.length ? pages : [content]
  }

  const [pages, setPages] = useState<string[]>([])

  useEffect(() => {
    fetch('https://api.github.com/repos/jarvisclaudenelson/kids-stories/contents/stories')
      .then(res => res.json())
      .then(data => {
        const chapterFiles = data
          .filter((f: any) => f.name.endsWith('.md'))
          .sort((a: any, b: any) => a.name.localeCompare(b.name))
        
        return Promise.all(
          chapterFiles.map((f: any) => 
            fetch(f.download_url).then(res => res.text())
          )
        ).then(contents => {
          const loadedChapters = chapterFiles.map((f: any, i: number) => ({
            name: f.name.replace('.md', '').replace('chapter-', 'Chapter '),
            path: f.path,
            content: contents[i]
          }))
          setChapters(loadedChapters)
          
          // Pre-compute page counts for all chapters
          const counts: Record<number, number> = {}
          loadedChapters.forEach((ch: Chapter, i: number) => {
            const cleaned = ch.content
              .replace(/^# .*$/gm, '')
              .replace(/\*\*(.*?)\*\*/g, '$1')
              .replace(/\*(.*?)\*/g, '$1')
              .replace(/---/g, '')
              .replace(/\*(.*?)$/gm, '')
              .replace(/\((.*?)\)/g, '')
              .trim()
            counts[i] = getPages(cleaned).length
          })
          setChapterPageCounts(counts)
          
          setLoading(false)
        })
      })
      .catch((_err) => {
        setError('Failed to load stories.')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (chapters[currentChapter]) {
      const content = chapters[currentChapter].content
        .replace(/^# .*$/gm, '')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/---/g, '')
        .replace(/\*(.*?)$/gm, '')
        .replace(/\((.*?)\)/g, '')
        .trim()
      const newPages = getPages(content)
      setPages(newPages)
      // Don't auto-reset page - navigation functions handle that
      // Just ensure page is valid for this chapter
      if (currentPage >= newPages.length) {
        setCurrentPage(Math.max(0, newPages.length - 1))
      }
    }
  }, [currentChapter, chapters])

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    } else if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1)
      setCurrentPage(0)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    } else if (currentChapter > 0) {
      // Go to previous chapter, last page
      const prevChapter = currentChapter - 1
      const prevChapterPageCount = chapterPageCounts[prevChapter] || 1
      setCurrentChapter(prevChapter)
      setCurrentPage(prevChapterPageCount - 1)
    }
  }

  const goToChapter = (index: number) => {
    setCurrentChapter(index)
    setCurrentPage(0)
  }

  if (loading) {
    return (
      <div className="app loading">
        <div className="loader">📖 Loading stories...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app error">
        <div className="error-message">{error}</div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>📚 The Nelson Boys' Adventures</h1>
        <div className="font-controls">
          <button onClick={() => setFontSize(Math.max(14, fontSize - 2))}>A-</button>
          <button onClick={() => setFontSize(Math.min(28, fontSize + 2))}>A+</button>
        </div>
      </header>

      <div className="chapter-nav">
        <select 
          value={currentChapter} 
          onChange={(e) => goToChapter(Number(e.target.value))}
        >
          {chapters.map((ch, i) => (
            <option key={i} value={i}>{ch.name}</option>
          ))}
        </select>
      </div>

      <div className="book" onClick={(e) => {
        const x = e.clientX
        const width = window.innerWidth
        x < width / 2 ? prevPage() : nextPage()
      }}>
        {getIllustration(currentChapter, currentPage) && (
          <div className="illustration">
            <img src={getIllustration(currentChapter, currentPage)?.img} alt={getIllustration(currentChapter, currentPage)?.alt} />
          </div>
        )}
        <div className="page" style={{ fontSize: `${fontSize}px` }}>
          {pages[currentPage] || 'Loading...'}
        </div>
      </div>

      <footer className="footer">
        <button onClick={prevPage} disabled={currentPage === 0 && currentChapter === 0}>
          ◀ Prev
        </button>
        <span className="progress">
          {currentChapter + 1}/{chapters.length} · Page {currentPage + 1}/{pages.length}
        </span>
        <button onClick={nextPage}>
          Next ▶
        </button>
      </footer>
    </div>
  )
}

export default App
