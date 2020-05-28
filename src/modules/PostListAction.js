import { handleActions, createAction } from "redux-actions"
import { List, Map, Record, fromJS } from "immutable"
import DB					from "../../DB"
import { pender }			from "redux-pender"

const getPostListAPI = (groupName, categoryName) => {
	return new Promise((resolve, reject) => {
		resolve({
			blogTitle : DB.information.blogTitle,
			blogDescription : DB.information.blogDescription,
			posts : DB.information.POSTS
				.filter(group => group.groupName === groupName)[0]
				.categories
				.filter(category => category.categoryName === categoryName)[0]
				.posts
			})
	})
}

const GET_POST_LIST = "GET_POST_LIST";
export const getPostList = createAction(GET_POST_LIST, getPostListAPI);

const initialState = Record({
	blogTitle : "no data",
	blogDescription : "no data",
	posts : List([
		Map({
			groupName		: "no data",
			categoryName	: "no data",
			title 			: "no data",
			author			: "no data",
			date			: "no data",
			preview			: "no data"

		})
	])
})()

export default handleActions({
	...pender({
		type		: GET_POST_LIST,
		onSuccess	: (state, action) => {
			const { blogTitle, blogDescription, posts } = action.payload;
			console.log(action.payload)
			return state.set("blogTitle", blogTitle)
						.set("blogDescription", blogDescription)
						.set("posts", fromJS(posts))
		}
	})
}, initialState)