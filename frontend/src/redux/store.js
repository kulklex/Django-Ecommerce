import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'react-redux'
import rootReducers from './reducers'



const initialState = {}

const middleware = [thunk]

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store