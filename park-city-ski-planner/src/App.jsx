import React, { useState } from 'react';
import { runs } from './data';

function App() {
  const [difficulty, setDifficulty] = useState('all');
  const [terrain, setTerrain] = useState('all');
  const [area, setArea] = useState('all');

  const filteredRuns = runs.filter(run => 
    (difficulty === 'all' || run.difficulty === difficulty) &&
    (terrain === 'all' || run.terrain === terrain) &&
    (area === 'all' || run.area === area)
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Park City Ski Planner</h1>
      
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          className="p-2 border rounded"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="all">All Difficulties</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="double-black">Double Black</option>
        </select>
        
        <select
          className="p-2 border rounded"
          value={terrain}
          onChange={(e) => setTerrain(e.target.value)}
        >
          <option value="all">All Terrain</option>
          <option value="groomed">Groomed</option>
          <option value="bowl">Bowl</option>
          <option value="powder">Powder</option>
          <option value="trees">Trees</option>
        </select>
        
        <select
          className="p-2 border rounded"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="all">All Areas</option>
          <option value="Payday">Payday</option>
          <option value="Crown">Crown</option>
          <option value="Thaynes">Thaynes</option>
          <option value="Mountain Village">Mountain Village</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {filteredRuns.map(run => (
          <div key={run.id} className="p-4 border rounded shadow bg-white">
            <h2 className="text-2xl font-semibold">{run.name}</h2>
            <p>Difficulty: <span className="font-medium capitalize">{run.difficulty}</span></p>
            <p>Terrain: <span className="font-medium capitalize">{run.terrain}</span></p>
            <p>Area: <span className="font-medium">{run.area}</span></p>
            <p className="mt-2 text-gray-700">{run.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Mountain Tour Suggestions</h2>
        <p className="mb-4">Plan your day with our curated mountain tours. Explore the best runs based on your chosen criteria.</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Tour Suggestions</button>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">End-of-Day Routing</h2>
        <p className="mb-4">Let our planner suggest the optimal route for your end-of-day descent.</p>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Plan End-of-Day Route</button>
      </div>
    </div>
  );
}

export default App;
