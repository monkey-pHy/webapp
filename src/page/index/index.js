import React from 'react';
import ReactDom from 'react-dom';

import  store  from './store.js';

import { Provider } from 'react-redux';

import Main from './Main/Main.jsx'


ReactDom.render(
    <Provider store={store}><Main /></Provider>,
    document.getElementById('root')
);