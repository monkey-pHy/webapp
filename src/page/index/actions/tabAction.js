import { ADD_TODO, CHANGE_TAB } from './actionTypes.js';

export const addTodo = (obj) => {
    return {
        type: ADD_TODO,
        obj: obj
    }
}

//changeTab的action
export const changeTab =(obj)=>{
    return {
        type: CHANGE_TAB,
        obj: obj
    }
}