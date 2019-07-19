import React, {useContext} from 'react'
import './App.css'
import {BoardProvider} from './Contexts/BoardContext'
import {PlayerContext} from './Contexts/PlayerContext'
import {ActionProvider} from './Contexts/ActionContext'
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
        <ActionProvider>
          <BoardProvider>
            <Board />
          </BoardProvider>
        </ActionProvider>
    </div>
  )
}

export default App
