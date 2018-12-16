import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Lists from './reducer';

const store = createStore(Lists);

axios.defaults.baseURL = 'https://developers.zomato.com/api/v2.1';

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
