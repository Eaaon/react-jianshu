import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content, authorInfo) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content,
	authorInfo
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data;
			console.log(result)
			dispatch(changeDetail(result.title, result.content, result.authorInfo));
		}).catch(() => {

		})
	}
};