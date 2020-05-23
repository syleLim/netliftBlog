import CategoryAction 		from "./CategoryAction"
import PostAction 			from "./PostAction"
import DataAction 			from "./DataAction"
import { combineReducers } 	from "redux"
import { penderReducer }	from "redux-pender"

export default combineReducers({
	CategoryAction,
	PostAction,
	DataAction,
	pender : penderReducer
})
