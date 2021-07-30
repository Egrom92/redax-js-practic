import {combineReducers} from 'redux'
import {INC, DEC, CHANGE_THEME, ASYNC} from './boilerplate'

function counterReducer(state = 0, action) {
    switch (action.type) {
        case INC :
            return state + 1;

        case DEC :
            return state - 1

        default: return state
    }
}
const initialThemeState = {
    value: 'light'
}
function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME :
            return {...state, value: action.payload};

        default: return state
    }
}

function asyncReducer(state = false, action) {
    switch (action.type) {
        case ASYNC:
         return state = !state;

        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    async: asyncReducer
})