import React, {useContext, useState} from 'react'
// import {BoardContext} from './Contexts/BoardContext'
import {ActionContext} from './Contexts/ActionContext'
// import {PlayerContext} from './Contexts/PlayerContext'

export const useTryMove = () => {
    let validMove = true

    const [action, setAction] = useContext(ActionContext)
    
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

    return validMove
}