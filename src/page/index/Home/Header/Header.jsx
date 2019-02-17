
import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';


/**
 * @constructor <Header />
 * @description 顶部banner代码
 */

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
            <SearchBar />
            <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" />
            </div>
        );
    }

}

export default Header;
