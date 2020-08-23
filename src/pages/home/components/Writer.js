import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import '../style.scss';

class Writer extends PureComponent {

	render() {
		return (
			<div className="writer-wrapper">
				<div className="writer-title">
					<span>推荐作者</span>
					<a className="page-change" href="dasda"><i className="iconfont iconxunhuan"></i>换一批</a>
				</div>
				{
					this.props.list.map((item) => {
						return <div className="writer-item" key={item.get('id')}>
							<div className="writer-left cursor-pointer">
								<img src={item.get('imgUrl')} alt=""></img>
								<div>
									<div className="writer-author cursor-pointer">{item.get('authorName')}</div>
									<div className="writer-desc cursor-pointer">{item.get('desc')}</div>
								</div>
							</div>
							<div className="writer-right cursor-pointer">+关注</div>
						</div>
					})
				}
				<a className="find-more cursor-pointer" href="/recommendations/users?utm_source=desktop&amp;utm_medium=index-users" target="_blank">查看全部<i className="iconfont iconjiantou"></i></a>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'writeList'])
})

export default connect(mapState, null)(Writer);
