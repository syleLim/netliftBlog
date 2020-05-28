import { Map, List, Record, fromJS }			from "immutable"
import { handleActions, createAction }	from "redux-actions"
import { pender }						from "redux-pender"
import DB								from "../../DB"

const getPostAPI = (groupName, categoryName, title) => {
	return new Promise((resolve, reject) => {
		resolve({
			postInfo : DB.information.POSTS
			.filter(group => group.groupName === groupName)[0]
			.categories
			.filter(category => category.categoryName === categoryName)[0]
			.posts
			.filter(post => post.title === title)[0],
			content : DB[groupName.replace(/(\s*)/g, "")]
						[categoryName.replace(/(\s*)/g, "")]
						[title.replace(/(\s*)/g, "")]
		})
	})
}

const GET_POST = "GET_POST";
export const getPost = createAction(GET_POST, getPostAPI);

const initialState = Record({
	postInfo	: Map({
		"groupName"		: "no data",
		"categoryName"	: "no data",
		"title" 		: "no data",
		"author"		: "no data",
		"date"			: "no data",
		"preview"		: "no data"
	}),
	content		: "no data"
})();

export default handleActions({
	...pender({
		type		: GET_POST,
		onSuccess	: (state, action) => {
			const { postInfo, content } = action.payload;
			
			return state.set("postInfo", Map(postInfo))
						.set("content", content);
		}
	})
}, initialState);