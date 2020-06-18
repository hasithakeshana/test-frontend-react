import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from './sagas/saga';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
//sagaMiddleware.run()
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhansers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootWatcher);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

registerServiceWorker();