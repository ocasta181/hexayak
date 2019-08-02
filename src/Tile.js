import React, {useState, useContext, useRef, useEffect} from 'react'
import {ActionContext} from './Contexts/ActionContext'

const Tile = props => {
    const [action, setAction] = useContext(ActionContext)

    const addAction = event => {
        let tile = event.currentTarget
        let id = tile.getAttribute('id')
        let conditions = tile.childNodes
        
        let new_action = {
            'type': 'tile',
            'x': id[1], 
            'y': id[0], 
            'conditions': Array.from(conditions).map(cond => {
                return cond.innerHTML
            })
        }
        setAction(prevAction => [...prevAction, new_action])

        event.preventDefault()
    }

    return (
        <div id={props.id} className="Tile" onMouseDown={addAction} onMouseUp={addAction}>
            {props.tile.map(cond => {
                return <p>{cond}</p>
            })}
        </div>
    )
}

export default Tile