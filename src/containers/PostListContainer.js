import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import { PostListComponent } from "../component"
import * as PostListAction from "../modules/PostListAction"


class PostListContainer extends React.Component {
	
	loadData() {
		const { groupName, categoryName, PostListAction } = this.props;

		PostListAction.getPostList(groupName, categoryName)
	}

	componentDidMount() {
		this.loadData();
	}

	componentDidUpdate(prevState, prevProps) {
		if (prevState.groupName !== this.props.groupName ||
			prevState.categoryName !== this.props.categoryName)
			this.loadData();
	}

	render () {
		const { blogTitle, blogDescription, posts } = this.props;
		
		return (<PostListComponent
					blogTitle={blogTitle}
					blogDescription={blogDescription}
					postList={posts} />)
	}
}

const mapStateToProps = (state) => ({
	blogTitle		: state.PostListAction.get("blogTitle"),
	blogDescription	: state.PostListAction.get("blogDescription"),
	posts			: state.PostListAction.get("posts")
});

const mapDispatchToProps = (dispatch) => ({
	PostListAction : bindActionCreators(PostListAction, dispatch)
});

export default PostListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostListContainer);