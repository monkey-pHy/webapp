//UI
import React from 'react';

import { connect } from 'react-redux';//讲react组件和redux结合的方法

import BottomBar from '../BottomBar/BottomBar.jsx'

import Home from '../Home/Home';


class Main extends React.Component {
    constructor(props){//constructor就是公用的方法，没什么用处
        super(props);

        this.props.num;
    }

    // click() {
    //     this.props.dispatch(addTodo({
    //         num: 10
    //     }))
    // }
    render(){
        // let num = this.props.num;
        return (
            <div>
                <Home />
                <BottomBar />
            </div>
        );

    }

}
export default connect(
    
)(Main);