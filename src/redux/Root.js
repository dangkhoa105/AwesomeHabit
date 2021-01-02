import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { userProfile } from '../config'
import auth from '@react-native-firebase/auth'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from '../redux/middlewares/saga'
import App from '../containers/App'
const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default class Root extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
