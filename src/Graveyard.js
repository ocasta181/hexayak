import React, {useContext} from 'react'
import {ActionContext} from './Contexts/ActionContext'
import {PlayerContext} from './Contexts/PlayerContext'

const Graveyard = () => {
    const [player, setPlayer] = useContext(PlayerContext)
    const [action, setAction] = useContext(ActionContext)

    return (
        <div id='Graveyard'>
        </div>
    )
}

export default Graveyard
