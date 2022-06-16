import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        case 'CHANGE_MODE':
            return { ...state, darkMode: !state.darkMode }
        default:
            return state
    }
}

export function ThemeProvider({ children }) {

    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        darkMode: false
    })

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    const changeMode = () => {
        dispatch({ type: 'CHANGE_MODE' })
    }

    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}