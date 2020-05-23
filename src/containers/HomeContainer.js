import React from "react"
import { connect } from "react-redux"
import { List, Record, Map } from "immutable"
import { bindActionCreators } from "redux"

import { HomeComponent } from "../component"

class HomeContainter extends React.Component {

	getPreviewItem (postList, itemId) {
		
	}

	render () {
		const {blogTitle, blogDescription, lastPosts } = this.props;

		return (<HomeComponent 
					blogTitle={blogTitle}
					blogDescription={blogDescription}
					lastPosts={lastPosts}
				/>)
	}
}

const getLastPost = (lastPosts) => {
	lastPosts.toJs()
}

const mapStateToProps = (state) => ({
	blogTitle		: state.DataAction.get("blogTitle"),
	blogDescription	: state.DataAction.get("blogDescription"),
	lastPosts		: state.DataAction.get("lastPosts").map(path => (state.DataAction.get("POSTS")
						.filter(group => group.get("groupName") === path.get(0))
						.get(0).get("categories")
						.filter(category => category.get("categoryName") === path.get(1))
						.get(0).get("posts")
						.filter(post => post.get("title") === path.get(2)).get(0)
					))
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default HomeContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainter);