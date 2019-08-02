import React, {useContext} from 'react'
import './App.css'
import {BoardProvider} from './Contexts/BoardContext'
import {PlayerContext} from './Contexts/PlayerContext'
import {ActionProvider} from './Contexts/ActionContext'
import Board from './Board'
import Domain from './Domain'
import Rules from './Rules'
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
            <Rules>
              <Board />
              <Domain />
            </Rules>
          </BoardProvider>
        </ActionProvider>
    </div>
  )
}

export default App