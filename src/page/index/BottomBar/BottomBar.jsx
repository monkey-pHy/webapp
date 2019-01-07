import React from 'react';

import { connect } from 'react-redux';//讲react组件和redux结合的方法

/** 
 * @constructor <BottomBar>
 * @description 首页底部tab栏
*/

class BottomBar extends React.Component {
    constructor(props) {
        super(props)
    }
    renderItems() {
        let tabs = ['首页', "订单", "我的"];

        return tabs.map((item, index)=>{
            return (
                // 如果组件采取循环方式渲染，每个item就得加入一个key
                <div key={index} className="btn-item">
                <div className="tab-icon"></div>
                <div className="btm-name">{item}</div>
                </div>
            )
        })
    }
    render() {
        return(
            <div className="bottom-bar">
                {this.renderItems()}
            </div>
        )
    }
}

export default connect(
    state =>({

    })
)(BottomBar);