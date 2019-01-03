import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';

ReactDom.render(
    <Provider store={store}><Main /></Provider>,
    document.getElementById('root')
);