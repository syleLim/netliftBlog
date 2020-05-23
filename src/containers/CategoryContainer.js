import React					from "react"
import { connect }				from "react-redux"
import { Record }				from "immutable"
import { bindActionCreators }	from "redux"

import { CategoryComponent }	from "../component"
import * as CategoryAction		from "../modules/CategoryAction"

class CategoryContainter extends React.Component {

	render () {
		const { user, userDescription, categoryGroups } = this.props
		
		return (<CategoryComponent 
					profile={Record({user : user, userDescription : userDescription})()}
					categoryGroups={categoryGroups}
				/>)
	}
}

const mapStateToProps = (state) => ({
	user			: state.DataAction.get("user"),
	userDescription	: state.DataAction.get("userDescription"),
	POSTS			: state.DataAction.get("POSTS"),
	categoryGroups	: state.CategoryAction
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default CategoryContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryContainter);