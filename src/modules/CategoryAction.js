import { List, Record }			from "immutable"
import { handleActions, createAction }	from "redux-actions"
import { pender } 						from "redux-pender"

const GET_CATEGORY = "GET_CATEGORY";

export const getCategory = createAction(GET_CATEGORY);

const initialState = List([
	Record({
		groupName	: "no data",
		categories	: List([
			"no data"
		])
	})()
])

export default handleActions({
	GET_CATEGORY : (state, action) => {
		const POSTS = action.payload;

		return List(POSTS.map(group => Record({
			groupName	: group.get("groupName"),
			categories	: List(group.get("categories")
								.map(e => e.get("categoryName")))
		})()))
	}
}, initialState);

/*
	initial State of Catergory structure
	List([
		Record({
			GroupName
			Categories : List([ categoriNames... ])
		})
	])
*/