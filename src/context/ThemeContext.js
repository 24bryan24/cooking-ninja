import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const fontsArr = ['Kdam Thmor Pro', 'Noto Serif', 'League Gothic', 'Dancing Script', 'Lobster', 'Staatliches', 'Abril Fatface', 'Alfa Slab One', 'Caveat', 'Fascinate Inline', 'Indie Flower', 'Permanent Marker', 'Secular One']

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        case 'CHANGE_MODE':
            return { ...state, darkMode: !state.darkMode }
        case 'CHANGE_FONT':
            return { ...state, font: fontsArr[Math.floor(Math.random() * fontsArr.length)]}
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

    const changeFont = () => {
      dispatch({ type: 'CHANGE_FONT' })
    }

    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode, changeFont}}>
            {children}
        </ThemeContext.Provider>
    )
}