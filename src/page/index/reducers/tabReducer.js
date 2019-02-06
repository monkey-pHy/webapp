//接收action
import {CHANGE_TAB} from '../actions/actionTypes.js';//引入常量文件
import { TABKEY } from '../config.js';

const initState = {
    tabs: [
        {
            name: '首页',
            key: TABKEY.home
        },
        {
            name: '订单',
            key: TABKEY.order           
        },
        { 
            name: '我的',
            key: TABKEY.my
        }
    ],
    activeKey: TABKEY.home
};

/** 定义action的方法
const addTodo = (state, action) => {

    let objNum = action.obj.num;
    let num = state.num;

    // 相当于setSate（)操作
    return {
        num: num + objNum
    };
}
*/

//定义changeTab的reducer接收
const changeTab = ( state, action ) => {
    let activeKey = action.obj.activeKey;

    return { ...state, activeKey: activeKey }; //return的是initstate里的值
}

const tabReducer = (state = initState, action) => {
    //state ==initSate 相当于 if（！state）{state == initState }
    //判断action.type是ADD_TODO的，那就调用方法addTODO
    switch (action.type) {
        case CHANGE_TAB:return changeTab(state, action);
        default: return state;
    }

}
export default tabReducer;