import React from 'react';
import DetailsCard from './components/DetailsCard';
import TextArea from './components/TextArea';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>TYPING SPEED APP</h1>
      <div className="App-container">
        <DetailsCard />
        <TextArea />
      </div> 
    </div>
  );
}

export default App;
