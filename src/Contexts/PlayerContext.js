import React, {useState, createContext} from 'react'

export const PlayerContext = createContext()

export const PlayerProvider = props => {
    const [player, setPlayer] = useState([
        {
            'id': 1,
            'hand': [
                {'title': 'card_1', 'id': '1', 'properties': ['lowly']}, 
                {'title': 'card_2', 'id': '2', 'properties': ['lowly']}, 
                {'title': 'card_3', 'id': '3', 'properties': ['lowly']}
            ],
            'deck': [
                {'title': 'card_1', 'id': '1', 'properties': ['lowly']}, 
                {'title': 'card_2', 'id': '2', 'properties': ['lowly']}, 
                {'title': 'card_3', 'id': '3', 'properties': ['lowly']}
            ],
            'graveyard': [
                {'title': 'card_1', 'id': '1', 'properties': ['lowly']}, 
                {'title': 'card_2', 'id': '2', 'properties': ['lowly']}, 
                {'title': 'card_3', 'id': '3', 'properties': ['lowly']}
            ],
            'turn': 1
        },
        {
            'id': 2,
            'hand': [
                {'title': 'card_1', 'id': '1', 'properties': ['lowly']}, 
                {'title': 'card_2', 'id': '2', 'properties': ['lowly']}, 
                {'title': 'card_3', 'id': '3', 'properties': ['lowly']}
            ],
            'deck': [
                {'title': 'card_1', 'id': '1', 'properties': ['lowly']}, 
                {'title': 'card_2', 'id': '2', 'properties': ['lowly']}, 
                {'title': 'card_3', 'id': '3', 'properties': ['lowly']}
            ],
            'graveyard': [
                {'title': 'card_1', 'id': '1', 'properties': ['lowly']}, 
                {'title': 'card_2', 'id': '2', 'properties': ['lowly']}, 
                {'title': 'card_3', 'id': '3', 'properties': ['lowly']}
            ],
            'turn': 0
        }
    ])
    return (
        <PlayerContext.Provider value={[player , setPlayer]}>
            {props.children}
        </PlayerContext.Provider>
    )
}