import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <input className="Search-input"
                   type="text"
                   placeholder="请输入商品名称"
                   value={this.state.value}
                   onChange={this.handleChange.bind(this)}
                   onKeyUp={this.handleKeyUp.bind(this)}
            />
        )
    }

    componentDidMount(){
        this.setState({
            value: this.props.value || ''
        })
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }

    handleKeyUp(e){
        if(e.keyCode !== 13){
            return
        }

        this.props.handleEnter(this.state.value);
     }
}

export default SearchInput