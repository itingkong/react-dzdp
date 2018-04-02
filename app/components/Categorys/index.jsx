import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        const opt = {
            auto: 3000,
            callback: function (index) {
                this.setState({
                    index: index
                })
            }.bind(this)
        }
        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="fl jingdian">景点</li>
                            <li className="fl ktv">KTV</li>
                            <li className="fl gouwu">购物</li>
                            <li className="fl shenghuofuwu">生活服务</li>
                            <li className="fl jianshenyundong">健身运动</li>
                            <li className="fl meifa">美发</li>
                            <li className="fl qinzi">亲子</li>
                            <li className="fl xiaochikuaican">小吃快餐</li>
                            <li className="fl zizhucan">自助餐</li>
                            <li className="fl jiuba">酒吧</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="fl meishi">美食</li>
                            <li className="fl dianying">电影</li>
                            <li className="fl jiudian">酒店</li>
                            <li className="fl xuixianyule">休闲娱乐</li>
                            <li className="fl waimai">外卖</li>
                            <li className="fl huoguo">火锅</li>
                            <li className="fl liren">丽人</li>
                            <li className="fl dujiachuxing">度假出行</li>
                            <li className="fl zuliaoanmo">足疗按摩</li>
                            <li className="fl zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="fl ribencai">日本菜</li>
                            <li className="fl SPA">SPA</li>
                            <li className="fl jiehun">结婚</li>
                            <li className="fl xuexipeixun">学习培训</li>
                            <li className="fl xican">西餐</li>
                            <li className="fl huochejipiao">火车机票</li>
                            <li className="fl shaokao">烧烤</li>
                            <li className="fl jiazhuang">家装</li>
                            <li className="fl chongwu">宠物</li>
                            <li className="fl quanbufenlei">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
export default Category