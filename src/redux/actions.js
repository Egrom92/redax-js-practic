import {CHANGE_THEME, DEC, INC, ASYNC} from './boilerplate';

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
        dispatch(async())
        setTimeout(()=> {
            dispatch(increment())
            dispatch(async())
        }, 1500)
    }
}
const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}

const async = () => {
    return {
        type: ASYNC
    }
}

export {increment, decrement, asyncIncrement, changeTheme, async}