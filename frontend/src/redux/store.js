import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'



const initialState = {}


const store = createStore(
    rootReducers,
    initialState,
    compose(applyMiddleware(thunk))
)

export default store