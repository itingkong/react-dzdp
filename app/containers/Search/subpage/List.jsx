import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import List from '../../../components/List'
import {connect} from 'react-redux'
import LoadMore from '../../../components/LoadMore'
import {getSearchData} from '../../../fetch/search/search'

const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
};

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState;
    }

    render() {
        return (
            <div>
                {this.state.data.length
                    ? <List data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                {this.state.hasMore ?
                    <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/> : ''}
            </div>
        )
    }

    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageData()
    }

    // 获取首页数据
    loadFirstPageData() {
        const cityName = this.props.userinfo.cityName;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getSearchData(0, cityName, category, keyword);
        this.resultHandle(result);
    }

    loadMoreData() {
        // 记录状态
        const cityName = this.props.userinfo.cityName;
        const page = this.state.page;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getSearchData(page, cityName, category, keyword);
        this.resultHandle(result);

        // 更新状态
        this.setState({
            isLoadingMore: false
        });
    }

    // 处理数据
    resultHandle(result) {
        // 增加page数
        const page = this.state.page
        this.setState({
            page: page + 1
        });

        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                hasMore: hasMore,
                // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
                data: this.state.data.concat(data)
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
            }
        })
    }

    // 再次搜索，重新渲染数据
    componentDidUpdate(prevProps, prevState){
        const keyword = this.props.keyword;
        const category = this.props.category;

        // 如果搜索条件相同，跳过
        if(keyword === prevProps.keyword && category === prevProps.category){
            return
        }

        // 重置state
        this.setState(initialState);

        // 重新加载数据
        this.loadFirstPageData()
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)