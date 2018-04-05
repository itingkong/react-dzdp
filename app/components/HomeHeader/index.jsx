import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link, hashHistory} from 'react-router'
import SearchInput from '../SearchInput'
import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    };

    render() {
        return (

            <div id="home-header" className="clear-fix">
                <div className="home-header-left fl">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right fr">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <i className="icon-search"></i>
                    <SearchInput
                        value=''
                        handleEnter={this.handleEnter.bind(this)}/>
                </div>
            </div>
        )
    }

    handleEnter(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader