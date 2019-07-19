import React, {useContext} from 'react'
import {BoardContext} from './Contexts/BoardContext'
import Tile from './Tile'

const Board = () => {
    const [board, setBoard] = useContext(BoardContext)

    return (
        <div id="Board">
            {board.map((rows, j) => (
                <div className="Row">
                    {rows.map((tile, i) => {
                        return <Tile id={j.toString()+i.toString()} tile={tile}/>
                    })}
                </div>
            ))}
        </div>
    )
}

export default Board
