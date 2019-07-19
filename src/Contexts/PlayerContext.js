import React, {useState, createContext} from 'react'

export const PlayerContext = createContext()

export const PlayerProvider = props => {
    const [player, setPlayer] = useState([])
    return (
        <PlayerContext.Provider value={[player , setPlayer]}>
            {props.children}
        </PlayerContext.Provider>
    )
}


// 'turn': 0,
// 'cards': [{'id': 1, 'name': 'swordsman', 'move': 1}],
