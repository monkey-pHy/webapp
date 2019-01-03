//接收action
import { ADD_TODO } from '../actions/actionTypes.js';//引入常量文件

const initState = {
    num: 0
};
//定义action
const addTodo = (state, action) => {

    let objNum = action.obj.num;
    let num = state.num;

    // 相当于setSate（)操作
    return {
        num: num + objNum
    };
}

const tabReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:return addTodo(state, action);
        default: return state;
    }

}
export default tabReducer;