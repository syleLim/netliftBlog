import { Map, List, Record }			from "immutable"
import { handleActions, createAction }	from "redux-actions"
import { pender }						from "redux-pender"
import axios							from "axios"

const GET_POST = "GET_POST";

export const getPost = createAction(GET_POST);

const initialState = Record({
	content			: "no data"
})();

export default handleActions({
	
	[GET_POST] : (state, action) => {
		const content = action.payload;
		
		return state.set("content", content);
	}
}, initialState);