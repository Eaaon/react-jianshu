import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            console.log(res)
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error')
        })
    }
}