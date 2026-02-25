import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [chapters, setChapters] = useState([])
  const [currentChapter, setCurrentChapter] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [fontSize, setFontSize] = useState(18)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getPages = (content) => {
    const paragraphs = content.split('\n\n').filter(p => p.trim())
    const pages = []
    let currentPageContent = ''
    
    paragraphs.forEach(para => {
      if (currentPageContent.length + para.length > 800) {
        if (currentPageContent) pages.push(currentPageContent)
        currentPageContent = para
      } else {
        currentPageContent += (currentPageContent ? '\n\n' : '') + para
      }
    })
    if (currentPageContent) pages.push(currentPageContent)
    return pages.length ? pages : [content]
  }

  const [pages, setPages] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/jarvisclaudenelson/kids-stories/contents/stories')
      .then(res => res.json())
      .then(data => {
        const chapterFiles = data
          .filter(f => f.name.endsWith('.md'))
          .sort((a, b) => a.name.localeCompare(b.name))
        
        return Promise.all(
          chapterFiles.map(f => 
            fetch(f.download_url).then(res => res.text())
          )
        ).then(contents => {
          setChapters(chapterFiles.map((f, i) => ({
            name: f.name.replace('.md', '').replace('chapter-', 'Chapter '),
            path: f.path,
            content: contents[i]
          })))
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
      setPages(getPages(content))
      setCurrentPage(0)
    }
  }, [currentChapter, chapters])

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    } else if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    } else if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1)
    }
  }

  const goToChapter = (index) => {
    setCurrentChapter(index)
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
