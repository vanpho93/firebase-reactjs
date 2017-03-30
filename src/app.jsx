import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import List from './component/List';
import store from './redux/store';

require('./api/foundationSetup');

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById('root')
);
