//管理react redux数据流
import { createStore } from 'redux';

import mainReducer from './reducers/main.js';

const store = createStore(mainReducer);

export default store;