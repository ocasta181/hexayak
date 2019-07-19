import React, {useState, createContext} from 'react'

export const BoardContext = createContext()

export const BoardProvider = props => {
    const [board, setBoard] = useState([
        [[],[],['capturable','player_1_flag'],[],['no_play'],['no_play'],['no_play']],
        [['capturable','player_1_flag'],[],[],[],['capturable'],['no_play'],['no_play']],
        [[],[],[],['capturable'],[],[],['no_play']],
        [[],['capturable'],[],[],[],['capturable'],[]],
        [['no_play'],[],[],['capturable'],[],[],[]],
        [['no_play'],['no_play'],['capturable'],[],[],[],['capturable','player_2_flag']],
        [['no_play'],['no_play'],['no_play'],[],['capturable','player_2_flag'],[],[]]
    ])
    return (
        <BoardContext.Provider value={[board , setBoard]}>
            {props.children}
        </BoardContext.Provider>
    )
}