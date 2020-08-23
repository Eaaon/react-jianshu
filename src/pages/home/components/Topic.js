import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  '../style.scss';

class Topic extends PureComponent {
	render() {
        const { list } = this.props;
		return (
			<div className="topic-wrapper">
				{
					list.map((item) => (
						<div className="topic-item" key={item.get('id')}>
							<img
								className='topic-pic'
								src={item.get('imgUrl')}
								alt=''
							/>
							{item.get('title')}
						</div>
					))
				}
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);