import {applyMiddleware, createStore} from 'redux'
import './styles.css'
import {rootReducer} from './redux/rootReducer'
import {decrement, increment, asyncIncrement, changeTheme} from './redux/actions';
import thunk from 'redux-thunk';

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

let store = createStore(rootReducer, applyMiddleware(thunk))


addBtn.addEventListener('click', ()=> {
    store.dispatch(increment())
})
subBtn.addEventListener('click', ()=> {
    store.dispatch(decrement())
})
asyncBtn.addEventListener('click', ()=> {
    store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', ()=> {
    const theme = document.body.classList.contains('light')
        ? 'dark'
        : 'light'
    store.dispatch(changeTheme(theme))
})

store.subscribe(()=> {
    const state = store.getState()

    counter.textContent = state.counter
    document.body.className = state.theme.value
})

store.dispatch({type: 'INIT'})