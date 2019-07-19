import React, {useState, useContext} from 'react'
import {ActionContext} from './Contexts/ActionContext'
import Rules from './Rules'

const Tile = props => {
    const [action, setAction] = useContext(ActionContext)

const handleMouseDown = event => {
    let tile = event.currentTarget
    let id = tile.getAttribute('id')
    let conditions = tile.childNodes
    
    let new_action = {
        'x': id[1], 
        'y': id[0], 
        'conditions': Array.from(conditions).map(cond => {
            return cond.innerHTML
        })
    }
    console.log('mouseDown action: ',new_action)
    setAction(prevAction => [...prevAction, new_action])

    event.preventDefault()
}

const handleMouseUp = event => {
    let tile = event.currentTarget
    let id = tile.getAttribute('id')
    let conditions = tile.childNodes
    
    let new_action = {
        'x': id[1], 
        'y': id[0], 
        'conditions': Array.from(conditions).map(cond => {
            return cond.innerHTML
        })
    }
    console.log('mouseUp action: ',new_action)
    setAction(prevAction => [...prevAction, new_action])

    event.preventDefault()

    Rules.tryMove()
}

    return (
        <div id={props.id} className="Tile" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            {props.tile.map(cond => {
                return <p>{cond}</p>
            })}
        </div>
    )
}

export default Tile
