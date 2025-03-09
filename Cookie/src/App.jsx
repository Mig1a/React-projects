import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cookieImage from './assets/purepng.com-cookiecookieamericandelicioussnacksweetyummybiscuit-215258865264pxyk.png';

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setmultiplier] = useState(1)
  const [message, setMessage] = useState('Multiplier is 1');
  const updatecount = () => {
    setCount(count + multiplier)
  }
  const double = () =>{
    if (count >= 10 && multiplier !== 2) {
      setmultiplier(2)
      setCount(count - 10)
      setMessage("Multiplier set to 2!");
    }else if (multiplier == 2){
      setMessage("Multiplier is already set to 2!");
    }
  }
  const party = () =>{
    if (count >= 100 && multiplier !== 5){
      setmultiplier(5)
      setCount(count - 100)
      setMessage("Multiplier set to 5!");
    }else if (multiplier == 5){
      setMessage("Multiplier is already set to 5!");
    }
  }
  const full = () =>{
    if (count >= 1000 && multiplier !== 5){
      setmultiplier(10)
      setCount(count - 1000)
      setMessage("Multiplier set to 10!");
    }else if (multiplier == 10){
      setMessage("Multiplier is already set to 10!");
    }
  }
  return (
    <>
      <div className='App'>
        <div className='header'>
          <h1>Cookie Selector</h1>
          <h2>Count: {count}</h2>
          <button type="button" onClick={updatecount}>
            <img src={cookieImage} alt="cookie" />
          </button>
          <p>{message}</p>
          
        </div>
        
      </div>

      <div className='container'>
        <div className='upgrade'>
          <h4>Double Stuffed</h4>
          <h6>2x per click</h6>
          <button type="button" onClick={double}>2 cookies</button>
        </div>
        <div className='upgrade'>
          <h4>Party Pack</h4>
          <h6>5x per click</h6>
          <button type="button" onClick={party}>100 cookies</button>
        </div>
        <div className='upgrade'>
          <h4>Party Pack</h4>
          <h6>10x per click</h6>
          <button type="button" onClick={full}>1000 cookies</button>
        </div>
      </div>
    </>
  );
}

export default App
