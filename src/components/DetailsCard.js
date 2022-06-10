import React from 'react';
import { useSelector } from 'react-redux';

function DetailsCard() {
  const wpm = useSelector((state) => state.word.wpm);
  const cpm = useSelector((state) => state.word.cpm);
  const mistakes = useSelector((state) => state.word.mistakes);
  
  return (
    <div className="details-card-container">
      <div className="Card left">
        <p className="card-name">CPM</p>
        <p className="card-value">{cpm}</p>
      </div>
      <div className="Card center">
        <p className="card-name">MISTAKES</p>
        <p className="card-value">{mistakes}</p>
      </div>
      <div className="Card right">
        <p className="card-name">WPM</p>
        <p className="card-value">{wpm}</p>
      </div>
    </div>
  )
}
  
export default DetailsCard;