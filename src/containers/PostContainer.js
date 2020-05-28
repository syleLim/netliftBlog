import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { List, Map, Record } from "immutable"

import { PostComponent } from "../component"
import * as PostAction from "../modules/PostAction"

class PostContainer extends React.Component {
	loadData () {
		const { groupName, categoryName, postName, PostAction } = this.props;

		PostAction.getPost(groupName, categoryName, postName);
	}

	componentDidMount () {
		this.loadData();
	}

	render () {
		const { postInfo, content } = this.props;
		
		return (<PostComponent
					info={postInfo}
					content={content}
				/>)
	}
}

const mapStateToProps = (state) => ({
	postInfo	: state.PostAction.get("postInfo"),
	content		: state.PostAction.get("content")
});

const mapDispatchToProps = (dispatch) => ({
	PostAction	: bindActionCreators(PostAction, dispatch)
});

export default PostContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostContainer);