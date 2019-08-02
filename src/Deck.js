import React, {useContext} from 'react'
import {ActionContext} from './Contexts/ActionContext'
import {PlayerContext} from './Contexts/PlayerContext'

const Deck = () => {
    const [player, setPlayer] = useContext(PlayerContext)
    const [action, setAction] = useContext(ActionContext)

    return (
        <div id='Deck'>
        </div>
    )
}

export default Deck