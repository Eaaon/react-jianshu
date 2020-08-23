import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import '../style.scss';
import { Popover } from 'antd';
const content = (
	<div>
		<img className="popover-qrcode" src="//cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-5569b135d8256ab92761d87705c525d2.png" alt=""></img>
	</div>
);
class Recommend extends PureComponent {
	render() {
		return (
			<div className="recommend-wrapper">
				<div className="recommend-board">
					{
						this.props.list.map((item) => {
							return <div className="recommend-item cursor-pointer" key={item.get('id')}> <img src={item.get('imgUrl')} alt=""></img></div>
						})
					}
				</div>
				<Popover content={content} title="">
					<div className="recommend-download cursor-pointer">
						<img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt=''></img>
						<div className="info">
							<div>下载简书手机App<i className="iconfont iconjiantou"></i></div>
							<div>随时随地发现和创作内容</div>
						</div>
					</div>
				</Popover>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);