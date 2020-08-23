import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { Button, Avatar } from 'antd';
import './style.scss';

class Detail extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
        // console.log(this.props)
    }
    render() {
        console.log(this.props)
        return (
            <div className="dtail-wrapper">
                <div className="header">{this.props.title}</div>
                <div className="author-info">
                    <Avatar size={48} src={this.props.authorInfo.avatar} />
                    <div className="author-right">
                        <div className="author-top-desc">
                            <span className="name">{this.props.authorInfo.authorName}</span>
                            <Button danger size="small">关注</Button>
                        </div>
                        <div className="author-bottom-desc">
                            <span><i className="iconfont iconzuanshi"></i>换一批</span>
                            <span>{this.props.authorInfo.createTime}</span>
                            <span>字数{this.props.authorInfo.wordCount}</span>
                            <span>阅读{this.props.authorInfo.readCount}</span>
                        </div>
                    </div>
                </div>
                <div className="content"
                    dangerouslySetInnerHTML={{ __html: this.props.content }}
                ></div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    authorInfo: state.getIn(['detail', 'authorInfo'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
