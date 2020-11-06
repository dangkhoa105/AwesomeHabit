import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers/index';
import rootSaga from '../redux/middlewares/saga/index';
import App from "../containers/App";
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const RootStack = createStackNavigator(
    {
        App: {
            screen: App,
        },

    },
    {
        initialRouteName: "App",
        mode: 'modal',
        headerMode: 'none',
    }
);


const AppContainer = createAppContainer(RootStack);

export default class Root extends React.Component {
    render() {
        return <Provider store={store}>
            <AppContainer />
        </Provider>;

    }
}

sagaMiddleware.run(rootSaga);
