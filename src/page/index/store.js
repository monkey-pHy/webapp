//管理react redux数据流
import { createStore } from 'redux';

import mainReducer from './reducers/main.js';

const store = createStore(mainReducer);

//reducer的热更新
if(module.hot){
    module.hot.accept('./reducers/main',()=>{
        const nextRootReducer = require('./reducers/main.js').default;
        store.replaceReducer(nextRootReducer)
    });
}

export default store;