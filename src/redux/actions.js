import {CHANGE_THEME, DEC, INC} from './boilerplate';

const increment = () => {
    return {
        type: INC
    }
}
const decrement = () => {
    return {
        type: DEC
    }
}
const asyncIncrement = () => {
    return function (dispatch) {
        setTimeout(()=> {
            dispatch(increment())
        }, 1500)
    }
}
const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}

export {increment, decrement, asyncIncrement, changeTheme}