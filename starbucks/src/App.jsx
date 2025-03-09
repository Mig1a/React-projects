import { useState } from 'react'
import './App.css'
import BaristaForm from './components/baristaform'

function App() {
  

  return (
    <>
      <div className='form-container'>
        <h1>On My Grind</h1>
        <p>So you think you can barista? lets put that to the test..</p>
        <h3>Hi, I'd like to order a:</h3>
      </div>
      <BaristaForm/>
    </>
  )
}

export default App
