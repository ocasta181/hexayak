import React, {useContext, useEffect} from 'react'
import {BoardContext} from './Contexts/BoardContext'
import {ActionContext} from './Contexts/ActionContext'
// import {PlayerContext} from './Contexts/PlayerContext'

const Rules = props => {

    const [action, setAction] = useContext(ActionContext)
    const [board, setBoard] = useContext(BoardContext)

    // Move Character Rule
    useEffect(() => {
        let validMove = false
        if (action.length > 1){
            let character = null
            let move_to = null
            action.some(act => {
                if (character != null) {
                    move_to = [act.x, act.y]
                    validMove = true
                }
                act.conditions.some(cond => {
                    if (cond === 'no_play') {
                        validMove = false
                        return true
                    }
                    if (cond === 'character') {
                        character = [act.x, act.y]
                    }
                })
            })

            if (validMove) {
                setAction([])
                console.log('valid move!')
                let new_board = []
                board.forEach((rows, j) => {
                    new_board.push([])
                    rows.forEach((tile, i) => {
                        let new_tile = tile
                        if(j == character[1] && i == character[0]){
                            new_tile = tile.filter(elem => {return elem !== 'character'})
                        } else if(j == move_to[1] && i == move_to[0]){
                            new_tile.push('character')
                        }
                        new_board[j].push(new_tile)
                    })
                })
                setBoard(new_board)
            } else {
                setAction([])
                console.log('invalid move!')
            }
        }
    }, [action])

    return (
        <div id='Rules'>
            {props.children}
        </div>
    )
}

export default Rules