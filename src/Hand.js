import React, {useContext} from 'react'
import {PlayerContext} from './Contexts/PlayerContext'
import Card from './Card'

const Hand = () => {
    const [player, setPlayer] = useContext(PlayerContext)
    
    return (
        <div id='Hand'>
            {player[0].hand.map(card => {
                return <Card id={card.id} card={card}/>
            })}
        </div>
    )
}

export default Hand


