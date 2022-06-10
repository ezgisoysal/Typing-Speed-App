import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StartScreen from './StartScreen';
import { incrementTotal, incrementCpm, incrementMistakes } from '../redux/wordSlice';

function TextArea() {
  const randomWords = useSelector((state) => state.word.randomWords);
  const numberWords = useSelector((state) => state.word.numberWords);

  const [words, setWords] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [currWordIndex, setCurrWordIndex] = useState(0);

  const timeSecond = useSelector((state) => state.word.timeSecond);
  const [seconds, setSeconds ] =  useState(timeSecond);
  const [isActive, setIsActive] = useState(false);
  const wpm = useSelector((state) => state.word.wpm);

  const dispatch = useDispatch();

  useEffect(() => {
    setWords(generateWords())
  }, []);

  useEffect(() => {
    if(userInput[userInput.length - 1] === " ") {
      checkMatch();
      setCurrWordIndex(currWordIndex + 1);
      setUserInput("");
    }
  }, [userInput]);

  const generateWords = () => {
    const onlyWords = new Array(numberWords).fill(null).map(() => randomWords());
    let wordsObjectArray = [];
    onlyWords.forEach(word => wordsObjectArray.push({
      value: word,
      color: ""
    }));
    return wordsObjectArray;
  };

  const checkMatch = () => {
    const wordToCompare = words[currWordIndex].value;
    const doesItMatch = wordToCompare === userInput.trim();
    if(doesItMatch) {
      dispatch(incrementCpm());
      words[currWordIndex].color = "green";
    } else {
      dispatch(incrementMistakes());
      words[currWordIndex].color = "red";
    };
  };
  
  const handleChange = (e) => {
    setUserInput(e.target.value);
    dispatch(incrementTotal());
    if (wpm > 0) {
      setIsActive(true)};
  };

  useEffect(() => {
    let interval = null;
    if (seconds === 0) {
        setIsActive(false);
    }
    if (isActive) {
        interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        }, 1000);
    } else if (!isActive && seconds === 0) {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
    }, [isActive, seconds]);

  
  return (
    <>
      <div className="timer-container">
        <p className="timer">{seconds > 0 && seconds}</p>
        <p className="timer-info">{seconds > 0 && 'Start typing to start the test!'}</p>
      </div>
      {seconds > 0 ?
        <div className="textarea-container">
          <div className="textarea-left">
            <div className="textarea">
              {
                words.map((word,i) => (
                  <span key={i}>
                    <span className={word.color}>
                      {word.value}
                    </span>
                    <span> </span>
                  </span>
                ))}
            </div>
          </div>
          <div className="textarea-right">
            <textarea className="textarea"
              name="textarea"
              placeholder="Start Typing here to start the test!"
              value={userInput}
              onChange={handleChange}
              disabled={( seconds == 0) ? true:false }
            ></textarea>
          </div>
        </div>
        : <StartScreen />
      }
    </>
  )
}

export default TextArea;