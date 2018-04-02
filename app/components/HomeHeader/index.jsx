import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class HomeHeader extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    };

    render(){
        return(

            <div id="home-header" className="clear-fix">
                <div className="home-header-left fl">
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right fr">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <i className="icon-search"></i>
                    <input placeholder="请输入商品名称" />
                </div>
            </div>
        )
    }
}

export default HomeHeader