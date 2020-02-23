import React from 'react';
import './App.css';
import BarChart from './BarChart'

const d3 = require('d3');

function App() {
  return (
    <div className="App">
      <h2>D3Viz</h2>
      <div>
        <BarChart data={[10, 6, 8]} size={[500, 500]} />
      </div>
    </div>
  );
}

export default App;
