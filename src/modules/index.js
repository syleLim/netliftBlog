import CategoryAction 		from "./CategoryAction"
import PostAction 			from "./PostAction"
import DataAction 			from "./DataAction"
import PostListAction		from "./PostListAction"
import { combineReducers } 	from "redux"
import { penderReducer }	from "redux-pender"

export default combineReducers({
	CategoryAction,
	PostAction,
	DataAction,
	PostListAction,
	pender : penderReducer
})
