import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detail'
import {getCommentData} from '../../../fetch/detail/detail'
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.info?
                    <div>yes!!!</div>:
                    ''
                }
            </div>
        )
    }

    componentDidMount(){
        this.getInfo();
    }

    getInfo(){
        const id = this.props.id;
        const result = getInfoData(id);
        console.log(result);
        result.then((res) => {
            console.log(res)
            return res
        }).then(res => {
            this.setState({
                info: res
            })
        });
    }
}

export default Info