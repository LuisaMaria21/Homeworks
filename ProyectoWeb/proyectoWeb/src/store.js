import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from './reducer'

const store = configureStore(
    counterReducer,
    applyMiddleware(logger)
)

export default store
