import { useState, useMemo } from 'react'
import { lifts, trails, lodges } from './data/parkCityData'

// New function to plan the day using connection metadata
function planMyDay(userPrefs, startBase, endBase, timeAvailable, lifts, runs) {
  let route = [];
  // 1. Start at startBase - find lifts serving that base
  let availableLifts = lifts.filter(lift => lift.base === startBase);
  if (!availableLifts.length) return route;
  // 2. Take one of those lifts UP (choose the first for simplicity)
  let currentLift = availableLifts[0];
  route.push({ lift: currentLift.id });
  let elapsedTime = 0;

  while (elapsedTime < timeAvailable && currentLift) {
    // 3. Filter runs to only those served by that lift: only use runs where run.lift is in the current lift's connectsTo
    let validRuns = runs.filter(run => currentLift.connectsTo.includes(run.lift));
    // Further filter runs by user preferences (difficulty & terrain)
    validRuns = validRuns.filter(run => run.difficulty === userPrefs.difficulty && run.terrain === userPrefs.terrain);
    if (!validRuns.length) break;

    // 4. Pick a run matching user preferences (choose first for simplicity)
    let chosenRun = validRuns[0];
    route.push({ run: chosenRun.id });
    // simulate run duration; assume each run has a 'duration' field, defaulting to 5 if missing
    elapsedTime += chosenRun.duration || 5;

    // 5. After skiing the run, look at its connectsToLifts array
    let nextLiftIds = chosenRun.connectsToLifts;
    if (!nextLiftIds || !nextLiftIds.length) break;

    // 6. Pick the next lift from that array - only use lifts from the previous run's connectsToLifts
    let nextLifts = lifts.filter(lift => nextLiftIds.includes(lift.id));
    if (!nextLifts.length) break;
    currentLift = nextLifts[0];
    route.push({ lift: currentLift.id });
    // simulate lift duration; assume each lift has a 'duration' field, defaulting to 2 if missing
    elapsedTime += currentLift.duration || 2;

    // 8. End at endBase if reached
    if (currentLift.base === endBase) {
      break;
    }

    // Loop continues until time runs out
  }

  return route;
}
) {
  // Start at startBase
  let currentLocation = 'startBase';
  let itinerary = [];
  const timeLimit = Date.now() + getAvailableTime(); // hypothetical function returning available time in ms

  // Helper to pick a random element from an array
  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Loop chaining lifts and runs until time is up
  while (Date.now() < timeLimit) {
    let validLifts = [];
    // Determine valid lifts from current location
    if (currentLocation === 'startBase') {
      // For startBase, assume lifts have an 'origin' field set to 'startBase'
      validLifts = lifts.filter(lift => lift.origin === 'startBase');
    } else {
      // Otherwise, find the lift whose id matches currentLocation or is connected from it
      // First, get the lift corresponding to currentLocation if it exists
      const currentLift = lifts.find(lift => lift.id === currentLocation);
      if (currentLift) {
        // Use connection metadata: lifts that are connected from the current lift
        validLifts = lifts.filter(lift => currentLift.connectsTo && currentLift.connectsTo.includes(lift.id));
      } else {
        // If currentLocation is not a lift id, try to see if any lift has a connection from currentLocation
        validLifts = lifts.filter(lift => lift.id === currentLocation);
      }
    }

    if (validLifts.length === 0) {
      break; // no valid lifts to continue
    }

    // Choose a lift and add to itinerary
    const chosenLift = pickRandom(validLifts);
    itinerary.push({ type: 'lift', id: chosenLift.id });

    // Now, from lifts, find a run that connects to this lift using run's metadata
    const validRuns = runs.filter(run => run.connectsToLifts && run.connectsToLifts.includes(chosenLift.id));
    if (validRuns.length === 0) {
      break; // no run available for this lift
    }

    const chosenRun = pickRandom(validRuns);
    itinerary.push({ type: 'run', id: chosenRun.id });

    // Set the next location from the run's connections, if any
    if (chosenRun.connectsToLifts && chosenRun.connectsToLifts.length > 0) {
      currentLocation = pickRandom(chosenRun.connectsToLifts);
    } else {
      break; // no further connections available
    }
  }

  // Ensure we end at 'endBase'
  if (itinerary.length === 0 || itinerary[itinerary.length - 1].id !== 'endBase') {
    itinerary.push({ type: 'base', id: 'endBase' });
  }

  return itinerary;
}


function App() {
  const [difficulty, setDifficulty] = useState('all')
  const [terrainType, setTerrainType] = useState('all')
  const [showOpenOnly, setShowOpenOnly] = useState(false)
  const [selectedArea, setSelectedArea] = useState('all')
  const [endOfDayLodge, setEndOfDayLodge] = useState('')
  const [activeTab, setActiveTab] = useState('recommend')

  const [liftStatus, setLiftStatus] = useState(() => {
    const status = {}
    lifts.forEach(lift => { status[lift.id] = 'open' })
    return status
  })

  const recommendedTrails = useMemo(() => {
    return trails.filter(trail => {
      if (difficulty !== 'all' && trail.difficulty !== difficulty) return false
      if (terrainType !== 'all' && trail.type !== terrainType) return false
      if (selectedArea !== 'all' && trail.area !== selectedArea) return false
      if (showOpenOnly) {
        const lift = lifts.find(l => l.name === trail.lift)
        if (lift && liftStatus[lift.id] !== 'open') return false
      }
      return true
    })
  }, [difficulty, terrainType, selectedArea, showOpenOnly, liftStatus])

  const mountainTour = [
    { time: 'Morning', recommendation: 'Start at Canyons - take Quicksilver Gondola for great runs', lifts: ['Quicksilver Gondola'], trails: ['Red Pine', 'Day Break'] },
    { time: 'Mid-Day', recommendation: 'Hit the expert bowls at Tombstone and Peak 5', lifts: ['TomBSTONE Express', 'Peak 5'], trails: ['Tombstone', 'Peak 5', '999'] },
    { time: 'Afternoon', recommendation: 'Finish at Park City - cruise Payday back to village', lifts: ['Payday Express', 'Town Lift'], trails: ['Payday', 'Lower Payday'] }
  ]

  const endOfDayRoute = useMemo(() => {
    if (!endOfDayLodge) return null
    const routes = {
      'Canyons Village': { from: 'Peak 5 area', recommendation: 'Take Peak 5 → Red Pine Gondola → Village', lifts: ['Peak 5', 'Red Pine Gondola'], time: '~15 min' },
      'Park City Mountain Village': { from: 'Anywhere on mountain', recommendation: 'Take Town Lift or Payday Express directly to base', lifts: ['Town Lift', 'Payday Express'], time: '~20 min' },
      'Silver Star Lodge': { from: 'Upper mountain', recommendation: 'Take Silver Star lift down', lifts: ['Silver Star'], time: '~10 min' }
    }
    return routes[endOfDayLodge]
  }, [endOfDayLodge])

  const toggleLiftStatus = (liftId) => {
    setLiftStatus(prev => ({ ...prev, [liftId]: prev[liftId] === 'open' ? 'closed' : 'open' }))
  }

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'green': return 'bg-green-500'
      case 'blue': return 'bg-blue-500'
      case 'black': return 'bg-gray-800'
      case 'double-black': return 'bg-purple-900'
      default: return 'bg-gray-400'
    }
  }

  const getDifficultyLabel = (diff) => {
    switch (diff) {
      case 'green': return '🟢 Easy'
      case 'blue': return '🔵 Intermediate'
      case 'black': return '⚫ Advanced'
      case 'double-black': return '⚫⚫ Expert'
      default: return diff
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 md:p-4">
        <h1 className="text-2xl font-bold">🏔️ Park City Ski Planner</h1>
        <p className="text-sm opacity-90">Plan your perfect day on the mountain</p>
      </header>

      <div className="flex border-b border-slate-700">
        {[{ id: 'recommend', label: 'Find Runs' }, { id: 'tour', label: 'Mountain Tour' }, { id: 'eod', label: 'End of Day' }].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex-1 p-3 font-medium ${activeTab === tab.id ? 'bg-slate-800 border-b-2 border-blue-500' : 'bg-slate-900 text-slate-400'}`}>
            {tab.label}
          </button>
        ))}
      </div>

      <main className="p-4">
        <details className="bg-slate-800 rounded-lg p-2 mb-4 md:p-4 md:mb-6">
          <summary className="cursor-pointer text-lg font-semibold text-white">Filters</summary>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Difficulty</label>
              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full bg-slate-700 rounded p-2">
                <option value="all">All Levels</option>
                <option value="green">🟢 Easy</option>
                <option value="blue">🔵 Intermediate</option>
                <option value="black">⚫ Advanced</option>
                <option value="double-black">⚫⚫ Expert</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Terrain Type</label>
              <select value={terrainType} onChange={(e) => setTerrainType(e.target.value)} className="w-full bg-slate-700 rounded p-2">
                <option value="all">All Terrain</option>
                <option value="groomed">Groomed</option>
                <option value="moguls">Moguls</option>
                <option value="trees">Trees</option>
                <option value="bowl">Bowls</option>
                <option value="terrain-park">Terrain Park</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Area</label>
              <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} className="w-full bg-slate-700 rounded p-2">
                <option value="all">Whole Mountain</option>
                <option value="Canyons">Canyons</option>
                <option value="Park City">Park City</option>
              </select>
            </div>
            <div className="flex items-center pt-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={showOpenOnly} onChange={(e) => setShowOpenOnly(e.target.checked)} className="w-4 h-4" />
                <span className="text-sm">Show open only</span>
              </label>
            </div>
          </div>
        </div>

        {activeTab === 'recommend' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Recommended Runs ({recommendedTrails.length})</h2>
            {recommendedTrails.length === 0 ? (
              <p className="text-slate-400">No trails match your criteria</p>
            ) : (
              <div className="space-y-3">
                {recommendedTrails.map(trail => {
                  const lift = lifts.find(l => l.name === trail.lift)
                  const isLiftOpen = lift && liftStatus[lift.id] === 'open'
                  return (
                    <div key={trail.id} className={`bg-slate-800 rounded-lg p-4 ${!isLiftOpen ? 'opacity-50' : ''}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{trail.name}</h3>
                          <p className="text-sm text-slate-400">{trail.area}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(trail.difficulty)}`}>
                          {getDifficultyLabel(trail.difficulty)}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-slate-700 px-2 py-1 rounded">{trail.type}</span>
                        <span className="text-xs bg-slate-700 px-2 py-1 rounded">🎡 {trail.lift}</span>
                        {lift && (
                          <button onClick={() => toggleLiftStatus(lift.id)}
                            className={`text-xs px-2 py-1 rounded cursor-pointer ${isLiftOpen ? 'bg-green-600' : 'bg-red-600'}`}>
                            {isLiftOpen ? '✓ Lift Open' : '✗ Lift Closed'}
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === 'tour' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Mountain Tour</h2>
            <p className="text-slate-400 mb-4">Suggested progression to see the best of the mountain</p>
            <div className="space-y-4">
              {mountainTour.map((stop, i) => (
                <div key={i} className="bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600 px-2 py-1 rounded text-sm font-medium">{stop.time}</span>
                  </div>
                  <p className="font-medium">{stop.recommendation}</p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {stop.lifts.map(lift => (
                      <span key={lift} className="text-xs bg-slate-700 px-2 py-1 rounded">🎡 {lift}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'eod' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">End of Day Planning</h2>
            <div className="mb-4">
              <label className="block text-sm text-slate-400 mb-1">Where are you ending?</label>
              <select value={endOfDayLodge} onChange={(e) => setEndOfDayLodge(e.target.value)} className="w-full bg-slate-700 rounded p-2">
                <option value="">Select your exit...</option>
                {lodges.map(lodge => (<option key={lodge.id} value={lodge.name}>{lodge.name}</option>))}
              </select>
            </div>
            {endOfDayRoute && (
              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Route to {endOfDayLodge}</h3>
                <p className="text-slate-300 mb-3">{endOfDayRoute.recommendation}</p>
                <div className="flex gap-2 flex-wrap mb-2">
                  {endOfDayRoute.lifts.map(lift => (<span key={lift} className="text-xs bg-slate-700 px-2 py-1 rounded">🎡 {lift}</span>))}
                </div>
                <p className="text-sm text-slate-400">Est. time: {endOfDayRoute.time}</p>
              </div>
            )}
          </div>
        )}
      </main>

      <details className="fixed bottom-0 left-0 right-0 bg-slate-800 p-4">
        <summary className="cursor-pointer text-slate-400 text-sm">🛠️ Debug: Lift Status</summary>
        <div className="grid grid-cols-4 gap-2 mt-2 max-h-40 overflow-y-auto">
          {lifts.slice(0, 20).map(lift => (
            <button key={lift.id} onClick={() => toggleLiftStatus(lift.id)}
              className={`text-xs p-1 rounded ${liftStatus[lift.id] === 'open' ? 'bg-green-700' : 'bg-red-700'}`}>
              {lift.name.slice(0, 12)}: {liftStatus[lift.id] === 'open' ? '✓' : '✗'}
            </button>
          ))}
        </div>
      </details>
    </div>
  )
}

export default App
