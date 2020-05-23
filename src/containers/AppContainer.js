import React					from "react"
import { connect }				from "react-redux"
import { List, Map, fromJS }			from "immutable"
import { bindActionCreators }	from "redux"

import { AppComponent } 	from "../component"
import * as DataAction		from "../modules/DataAction"
import * as CategoryAction	from "../modules/CategoryAction"

class AppContainer extends React.Component {
	
	loadData () {
		const { DataAction, CategoryAction } = this.props;
		
		DataAction.getData().then(res => {
			CategoryAction.getCategory(fromJS(res.data.POSTS))
		});
		
	}

	componentDidMount() {
		console.log("app mount")
		this.loadData();	
	}

	render () {
		return (
			<AppComponent />
		)
	}
}

const mapStateToProps = (state) => ({
	user			: state.DataAction.get("user"),
	userDescription	: state.DataAction.get("userDescription"),
	blogTitle		: state.DataAction.get("blogTitle"),
	blogDescription	: state.DataAction.get("blogDescription"),
	lastPosts		: state.DataAction.get("lastPosts"),
	POSTS			: state.DataAction.get("POSTS"),
})

const mapDispatchToProps = (dispatch) => ({
	DataAction		: bindActionCreators(DataAction, dispatch),
	CategoryAction 	: bindActionCreators(CategoryAction, dispatch)
})

export default AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);