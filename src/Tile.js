import React, {useState, useContext} from 'react'
import {BoardContext} from './BoardContext'
import {Socket} from './Socket'

const Tile = props => {
    // const [game, setGame] = useContext(BoardContext)
    // const [condition, setCondition] = useState('')

    return (
        <div className="Tile">
            {props.tile.map(cond => {
                return <p>{cond}</p>
            })}
        </div>
    )
}

export default Tile
