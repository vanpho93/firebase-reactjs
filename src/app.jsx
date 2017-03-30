import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import List from './component/List';
import store from './redux/store';
import './api/foundationSetup';
import './firebase';

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById('root')
);
