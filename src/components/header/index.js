import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { actionCreators } from './store';
import './style.scss';
import 'antd/dist/antd.css';
import { CSSTransition } from 'react-transition-group';
import betaPic from '../../assets/beta.png';

class Header extends Component {
    getListArea() {
        const { focused, list, mouseIn, handleMouseEnter, handleMouseLeave } = this.props;
        const newList = list.toJS();
        const searchList = [];
        if (newList.length) {
            newList.forEach(item => {
                searchList.push(
                    <li className="search-info-li"><i className="iconshijian"></i> <div className="search-info-text">{item}</div><i className="iconcha"></i></li>
                )
            })
        }
        if (newList.length && (focused || mouseIn)) {
            return (
                <div className="search-info"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <ul >
                        {searchList}
                    </ul>
                </div>
            )
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        return (
            <nav className="navbar-fixed-top">
                <div className="header-content">
                    <div className="header-left">
                        <div className="logo"></div>
                        <div className="navbar-nav">
                            <div className='home-text'><i className="iconzhinan"></i>首页</div>
                            <a className="download-text" href='href="/apps?utm_medium=desktop&utm_source=navbar-apps"'><i className="iconshoujixiazai"></i>下载App</a>
                            <div className={'search-content'}>
                                <CSSTransition
                                    in={focused}
                                    timeout={200}
                                    classNames="slide"
                                >
                                    <Input placeholder='搜索' className={focused ? 'search-input focused' : 'search-input normal'} suffix={
                                        <i className="iconsousuo icon-style"></i>
                                    }
                                        onFocus={() => handleInputFocus(list)} onBlur={handleInputBlur}></Input>
                                </CSSTransition>{this.getListArea()}</div>

                        </div>
                    </div>
                    <div className="header-right">
                        <i className="iconAa"></i>
                        <img className="pic-beta" alt="" src={betaPic} />
                        <div className="btn sign_in">登录</div>
                        <div className="btn sign_up">注册</div>
                        <div className="btn write-btn"><i className="iconyumaobi"></i>写文章</div>
                    </div>
                </div>
            </nav>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);