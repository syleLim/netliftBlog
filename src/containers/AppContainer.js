import React					from "react"
import { connect }				from "react-redux"
import { List, Map, fromJS }			from "immutable"
import { bindActionCreators }	from "redux"
import { AppComponent } 	from "../component"

import DB					from "../../DB"
import * as DataAction		from "../modules/DataAction"
import * as CategoryAction	from "../modules/CategoryAction"

class AppContainer extends React.Component {
	loadData () {
		const { DataAction } = this.props;
		
		DataAction.getData();
	}

	componentDidMount() {
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
})

export default AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);