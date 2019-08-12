import React, {useContext} from 'react'
import {ActionContext} from './Contexts/ActionContext'
import {PlayerContext} from './Contexts/PlayerContext'

// abstract away the wetness in Graveyard, Deck, and Hand.
// Add what differentiates them. 
// Not sure this makes sense to do, 
// given boilerplate complexity

const Graveyard = () => {
    const [player, setPlayer] = useContext(PlayerContext)
    const [action, setAction] = useContext(ActionContext)

    return (
        <div id='Graveyard'>
        </div>
    )
}

export default Graveyard