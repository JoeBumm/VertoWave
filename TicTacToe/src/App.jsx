import React from 'react'
import GameGrid from './GameGrid'
import './App.css'
import Message from './Message'

function App() {
  return (
    <div className="root">
      <h1 className='titleHeader'>Tic Tac Toe Game</h1>
      <GameGrid />
      <div className="footer">
        <h3>Youssef Tamer Aug @2025 VertoWave</h3>
      </div>
    </div>
  )
}

export default App