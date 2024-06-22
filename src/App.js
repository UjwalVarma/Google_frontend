// src/App.js
import React from 'react';
import './App.css'; // Import the App.css file for styling
import Form1 from './components/Form1'; // Import the MultiStepForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multi-Step Form Example</h1>
        {/* Remove the default React content */}
      </header>
      <main className="App-content">
        <Form1 />
      </main>
    </div>
  );
}

export default App;
