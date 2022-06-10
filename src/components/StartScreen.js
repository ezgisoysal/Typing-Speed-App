import React from 'react';
import { useSelector } from 'react-redux';

function StartScreen() {
  const wpm = useSelector((state) => state.word.wpm);
  const cpm = useSelector((state) => state.word.cpm);
  const mistakes = useSelector((state) => state.word.mistakes);  

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="try-again-container">
      <h1>Test Results</h1>
      <button className="start-again-btn" onClick={refreshPage}>
        Start Again
      </button>
      <div className="result-container">
        <p><b>CPM:</b> {cpm}</p>
        <p><b>Mistakes:</b> {mistakes}</p>
        <p><b>WPM:</b> {wpm}</p>
      </div>
    </div>
  )
}

export default StartScreen;