import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { PostComponent } from "../component"
import * as PostAction from "../modules/PostAction"
import DB from "../../DB"

class PostContainer extends React.Component {
	loadData () {
		const { PostAction,
				groupName,
				categoryName,
				postName } = this.props;
		PostAction.getPost(DB[groupName.replace(/(\s*)/g, "")]
							[categoryName.replace(/(\s*)/g, "")]
							[postName.replace(/(\s*)/g, "")]);
	}

	componentDidMount () {
		this.loadData();
	}

	getInfo () {
		const { groupName,
				categoryName,
				postName,
				POSTS } = this.props;
		
		return POSTS.filter(group => group.get("groupName") === groupName)
				.get(0).get("categories")
				.filter(category => category.get("categoryName") === categoryName)
				.get(0).get("posts")
				.filter(post => post.get("title") === postName)
				.get(0)
	}

	render () {
		const { content } = this.props;
		
		return (<PostComponent
					info={this.getInfo()}
					content={content}
				/>)
	}
}

const mapStateToProps = (state) => ({
	POSTS	: state.DataAction.get("POSTS"),
	content	: state.PostAction.get("content")
});

const mapDispatchToProps = (dispatch) => ({
	PostAction	: bindActionCreators(PostAction, dispatch)
});

export default PostContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostContainer);