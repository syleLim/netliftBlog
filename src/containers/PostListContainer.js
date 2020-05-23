import React from "react"
import { connect } from "react-redux"

import { PostListComponent } from "../component"

class PostListContainer extends React.Component {
	getPostList (groupName, categoryName, POSTS) {
		return (
			POSTS.filter(group => group.get("groupName") === groupName)
			.get(0).get("categories")
			.filter(category => category.get("categoryName") === categoryName)
			.get(0).get("posts")
		)
	}

	render () {
		const { groupName, categoryName, blogTitle, blogDescription, POSTS } = this.props;

		return (<PostListComponent
					blogTitle={blogTitle}
					blogDescription={blogDescription}
					postList={this.getPostList(groupName, categoryName, POSTS)} />)
	}
}

const mapStateToProps = (state) => ({
	blogTitle		: state.DataAction.get("blogTitle"),
	blogDescription	: state.DataAction.get("blogDescription"),
	POSTS			: state.DataAction.get("POSTS")
});

const mapDispatchToProps = (dispatch) => ({

});

export default PostListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostListContainer);