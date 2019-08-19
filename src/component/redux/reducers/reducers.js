import { constants as C } from '../constants/constant'
//Each function is focused on a specific part of our state tree

// colorReducer will recieve state as color{id, title, rating, ...} object only
export const color = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
                console.log("Inside color reducer")
            const { id, title, color, timestamp } = action
            return {
                id,
                title,
                color,
                timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id === action.id) ? {
                ...state,
                rating: action.rating
            } : state
        default:
            return state
    }
}

// colorsReducer will recieve state as colors aray
export const colors = (state = [], action) => {
    console.log("Inside colorS reducer")
    switch (action.type) {
        case C.ADD_COLOR:
            return [...state, color({}, action)]
        case C.REMOVE_COLOR:
            return state.filter(c => c.id !== action.id)
        case C.RATE_COLOR:
            return state.map(c => color(c, action))
        default:
            return state
    }
}

// sortReducer will recive a string as state
export const sort = (state = "SORTED_BY_DATE", action) => {
    console.log("Inside sort reducer")
    switch (action.type) {
        case C.SORT_COLORS:
            return action.sortBy
        default:
            return state
    }
}