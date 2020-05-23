import { Map, List, Record }			from "immutable"
import { handleActions, createAction }	from "redux-actions"
import { pender }						from "redux-pender"
import axios							from "axios"

const getPostAPI = (groupName, categoryName, postName) => {
	return axios.get(`../../../DB/POSTS/${groupName}/${categoryName}/${postName}`)
}

const GET_POST = "GET_POST";

export const getPost = createAction(GET_POST, getPostAPI);

const initialState = Record({
	content			: "no data"
})();

export default handleActions({
	...pender({
		type	: GET_POST,

		onSuccess : (state, action) => {
			const content = action.payload.data;

			return state.set("content", content);
		},

		onFailure : (state, action) => {
			console.log(action)
			return state;
		}
	})
}, initialState);