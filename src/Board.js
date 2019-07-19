import React, {useContext} from 'react'
import {BoardContext} from './BoardContext'
import Tile from './Tile'

const Board = () => {
    const [board, setBoard] = useContext(BoardContext)

    return (
        <div id="Board">
            {board.map(rows => (
                <div className="Row">
                    {rows.map(tile => {
                        return <Tile tile={tile}/>
                    })}
                </div>
            ))}
        </div>
    )
}

export default Board
