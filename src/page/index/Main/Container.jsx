import React from 'react';

import Main from './Main.jsx';

import { hot } from 'react-hot-loader';

class Container extends React.Component {
    render() {
        return <Main />
    }
}

export default hot(module)(Container);//所有子元素有改变就会自动触发热更新