import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [difficulty, setDifficulty] = useState('');
  const [terrain, setTerrain] = useState('');
  const [area, setArea] = useState('');

  const filterRuns = () => {
    return data.runs.filter(run => {
      const matchDifficulty = difficulty ? run.difficulty === difficulty : true;
      const matchTerrain = terrain ? run.terrain === terrain : true;
      const matchArea = area ? run.area === area : true;
      return matchDifficulty && matchTerrain && matchArea;
    });
  };

  const filteredRuns = filterRuns();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Park City Ski Planner</h1>
      <div className="mb-4 space-x-2">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Difficulties</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>

        <select
          value={terrain}
          onChange={(e) => setTerrain(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Terrains</option>
          <option value="groomed">Groomed</option>
          <option value="mogul">Mogul</option>
          <option value="glades">Glades</option>
        </select>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Areas</option>
          <option value="north">North</option>
          <option value="south">South</option>
          <option value="center">Center</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRuns.map((run, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{run.name}</h2>
            <p>Difficulty: {run.difficulty}</p>
            <p>Terrain: {run.terrain}</p>
            <p>Area: {run.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
