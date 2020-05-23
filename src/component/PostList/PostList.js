import React 				from "react"
import ImmutablePropTypes 	from "react-immutable-proptypes"
import { Record, List } 	from "immutable"
import PropTypes			from "prop-types"

import { PostListStyle }	from "../../styles"
import PostPreview			from "./PostPreview"
import Title				from "../Title/Title"

const PostListComponent = ({blogTitle, blogDescription, postList}) => {
	
	return (
		<PostListStyle>
			<Title
				blogTitle={blogTitle}
				blogDescription={blogDescription}/>
			<PostPreview 
				postList={postList} />
		</PostListStyle>
	)
}

PostListComponent.propTypes = {
	blogTitle		: PropTypes.string,
	blogDescription	: PropTypes.string,
	postList	: ImmutablePropTypes.listOf(
		ImmutablePropTypes.recordOf({
			categoryId	: PropTypes.number,
			postId		: PropTypes.number,
			title		: PropTypes.string,
			author		: PropTypes.string,
			date		: PropTypes.string,
			content		: PropTypes.string
		})
	)
};

PostListComponent.defaultProps = {
	blogTitle		: "dont connect",
	blogDescription	: "dont connect",
	postList 	: List([
		Record({
			categoryId	: 0,
			categoryId	: 1,
			title		: "post1",
			date		: "date1",
			content		: "preview1",
			author		: "auther1"
		})(),
		Record({
			categoryId	: 0,
			categoryId	: 2,
			title		: "post2",
			date		: "date2",
			content		: "preview2",
			author		: "auther2"
		})(),
		Record({
			categoryId	: 0,
			categoryId	: 3,
			title		: "post3",
			date		: "date3",
			content		: "preview3",
			author		: "auther3"
		})()
	])
};

export default PostListComponent;