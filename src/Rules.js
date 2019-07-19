import React, {useContext, useState} from 'react'
import {BoardContext} from './Contexts/BoardContext'
import {ActionContext} from './Contexts/ActionContext'
import {PlayerContext} from './Contexts/PlayerContext'

const Rules = () => {
    const [board, setBoard] = useContext(BoardContext)
    const [action, setAction] = useContext(ActionContext)
    const [player, setPlayer] = useContext(PlayerContext)

    const [state, setState] = useState('')

    // [card, location1: {conditions}, location2: {conditions}]

    const tryMove = () => {
        let validMove = 
        
        action.some(act => {
            act.conditions.some(cond => {
                if (cond == 'no_play') {
                    validMove = false
                    return true
                }
            })
        })

        if (validMove) {
            setAction([])
            console.log('valid move!')
        } else {
            setAction([])
            console.log('invalid move!')
        }
    }
}

export default Rules