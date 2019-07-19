import React, {useState, createContext} from 'react'

export const ActionContext = createContext()

export const ActionProvider = props => {
    const [action, setAction] = useState([])
    return (
        <ActionContext.Provider value={[action , setAction]}>
            {props.children}
        </ActionContext.Provider>
    )
}