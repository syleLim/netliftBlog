import { List, Map, fromJS }			from "immutable"
import { handleActions, createAction }	from "redux-actions"

const GET_DATA = "GET_DATA"
export const getData = createAction(GET_DATA);

const initialState = Map({
	user			: "no data",
	userDescription	: "no data",
	blogTitle		: "no data",
	blogDescription	: "no data",
	lastPosts		: List([
		List(["no data", "no data", "no data"])
	]),
	POSTS			: List([
		Map({
			groupName	: "no data",
			categories	: List([
				Map({
					categoryName	: "no data",
					posts			: List([
						Map({
							groupName 		: "no data",
							categoryName	: "no data",
							title			: "no data",
							author			: "no data",
							date 			: "no data",
							preview			: "no date"
						})
					])
				})
			])
		})
	])	
})

export default handleActions({	
	
	[GET_DATA] : (state, action) => {
		const { user,
				userDescription,
				blogTitle,
				blogDescription,
				lastPosts,
				POSTS } = action.payload;
		return state.set("user", user)
					.set("userDescription", userDescription)
					.set("blogTitle", blogTitle)
					.set("blogDescription", blogDescription)
					.set("lastPosts", fromJS(lastPosts))
					.set("POSTS", fromJS(POSTS));
	},
}, initialState);

/*
	initial state of Post structure
	Record {
		blogTitle
		blogDescription
	}
*/