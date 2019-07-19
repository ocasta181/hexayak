import React, {useContext} from 'react'
import './App.css'
import {BoardProvider} from './BoardContext'
import {PlayerContext} from './PlayerContext'
import Board from './Board'
import socket from './Socket'

const App = () => {

  const [player, setPlayer] = useContext(PlayerContext)
  
  socket.on('connection', (new_player) => {
    setPlayer( prevPlayer => [prevPlayer, new_player])
    console.log('new player: ',new_player)
  })
  
  return (
    <div id="App">
        <BoardProvider>
          <Board />
        </BoardProvider>
    </div>
  )
}

export default App
