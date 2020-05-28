import { List, Record }			from "immutable"
import { handleActions, createAction }	from "redux-actions"
import DB								from "../../DB"
import { pender } 						from "redux-pender"

const getCategoryAPI = () => {
	return new Promise((resolve, reject) => {
		resolve(DB.information.POSTS)
	})
}

const GET_CATEGORY = "GET_CATEGORY";
export const getCategory = createAction(GET_CATEGORY, getCategoryAPI);

const initialState = List([
	Record({
		groupName	: "no data",
		categories	: List([
			"no data"
		])
	})()
])

export default handleActions({
	...pender({
		type		: GET_CATEGORY,
		onSuccess	: (state, action) => {
			const POSTS = action.payload;
	
			return List(POSTS.map(group => Record({
				groupName	: group.groupName,
				categories	: List(group.categories
									.map(e => e.categoryName))
			})()))
		} 
	})
}, initialState);
