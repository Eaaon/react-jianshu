import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { list, getMoreList, page } = this.props;
		console.log(list)
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={index} to={'/detail/' + item.get('id')}>
								<div className="list-item" >
									<div className="list-info">
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
										<div className="list-footer">
											<i className="iconzuanshi"></i>
											<p className="comment-num">{item.get('diamondNum')}</p>
											<p className="author"> {item.get('author')}</p>
											<i className="iconpinglun"></i>
											<p className="comment-num">{item.get('comment')}</p>
											<i className="iconaixin"></i>
											<p className="comment-num">{item.get('like')}</p>
										</div>
									</div>
									<div className={item.get('imgUrl') ? 'show' : 'hide'}>
										<img alt='' className='pic' src={item.get('imgUrl')} />
									</div>
								</div>
							</Link>
						);
					})
				}
				<div className="load-more cursor-pointer" onClick={() => getMoreList(page)}>更多文字</div>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState, mapDispatch)(List);