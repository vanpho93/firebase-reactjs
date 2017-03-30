import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
jQuery(document).ready(() => $(document).foundation());


ReactDOM.render(
    <Provider store={store}>
        <p>Khoa Pham Training</p>
    </Provider>,
    document.getElementById('root')
);
