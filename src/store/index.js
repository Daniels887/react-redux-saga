import { combineReducers, createStore, applyMiddleware } from 'redux'
import { userReducer, userSaga } from './user'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(userSaga)

export default store
