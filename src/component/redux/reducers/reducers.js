// import C from '../constants/constant'
//Each function is focused on a specific part of our state tree

const C = 
// colorReducer will recieve state as color{id, title, rating, ...} object only
export const colorReducer = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
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
export const colorsReducer = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return [...state, colorReducer({}, action)]
        case C.REMOVE_COLOR:
            return state.filter(color => color.id !== action.id)
        case C.RATE_COLOR:
            // return [...state, colorReducer(state.find(color => color.id === action.id), action)]
            return state.map(color => colorReducer(color, action))
        default:
            return state
    }
}

export const sortReducer = (state = "SORTED_BY_DATE", action) => {
    return ""
}

const action = {
    type: "ADD_COLOR",
    id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
    color: "#0000FF",
    title: "Big Blue",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }
colorReducer({}, action)