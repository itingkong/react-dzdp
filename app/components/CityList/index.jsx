import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.handleClick.bind(this, '上海')}>上海</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '吉安')}>吉安</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '南昌')}>南昌</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '上饶')}>上饶</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '景德镇')}>景德镇</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '赣州')}>赣州</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '新余')}>新余</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '九江')}>九江</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '抚州')}>抚州</span>
                    </li>
                </ul>
            </div>
        )
    }

    handleClick(cityName){
        const changeFn = this.props.changeFn
        changeFn(cityName);
    }
}

export default CityList