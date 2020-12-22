import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from '../redux/middlewares/saga'
import App from '../containers/App'
const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default class Root extends React.Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyDJtenFFHnKBUDHF2m4PaFy-ztL4NhQnpw',
      authDomain: 'authentication-486c9.firebaseapp.com',
      projectId: 'authentication-486c9',
      storageBucket: 'authentication-486c9.appspot.com',
      messagingSenderId: '711978846929',
      appId: '1:711978846929:web:7ecb046e8e0d372573d3f0',
      measurementId: 'G-LF6QX20YX1',
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    // firebase.analytics()
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
