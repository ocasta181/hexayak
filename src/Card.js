import React, {useContext} from 'react'
import {ActionContext} from './Contexts/ActionContext'

const Card = props => {
    const [action, setAction] = useContext(ActionContext)

    const addAction = event => {
        let card = event.currentTarget
        let id = card.getAttribute('id')
        let conditions = card.childNodes
        
        let new_action = {
            'type': 'card',
            'card_id': id, 
            'conditions': Array.from(conditions).map(cond => {
                return cond.innerHTML
            })
        }
        setAction(prevAction => [...prevAction, new_action])

        event.preventDefault()
    }

    return (
        <div id={props.id} className="Card" onClick={addAction}>
            {props.card.properties.map(property => {
                return <p>{property}</p>
            })}
        </div>
    )
}

export default Card