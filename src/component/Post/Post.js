import React					from "react"
import PropTypes				from "prop-types"
import ImmutablePropTyps		from "react-immutable-proptypes"
import { List, Record, Map }	from "immutable"

import { PostStyle,
			PostTitle, 
			PostDate, 
			PostContent,
			PostAuthor,
			Line }		from "../../styles"
import { Md, PostMarkDown }	from "../../lib"

const PostCompoenet = ({info, content}) => {
	const { title, author, date } = info.toJS();
	return (
		<PostStyle>
			<PostTitle>{title.slice(0, -3)}</PostTitle>
			<PostAuthor>{author}</PostAuthor>
			<PostDate>{date}</PostDate>
			<PostContent>
				<PostMarkDown content={content} />
			</PostContent>
		</PostStyle>
	)
}

PostCompoenet.propTypes = {
	post	: ImmutablePropTyps.recordOf({
				categoryId	: PropTypes.number,
				postId		: PropTypes.number,
				title		: PropTypes.string,
				author		: PropTypes.string,
				date		: PropTypes.string,
				content		: PropTypes.string
			})
};

PostCompoenet.defaultProps = {
	post 	: Record({
				categoryId	: 0,
				postId		: 0,
				title		: "postId 0",
				author		: "auther3",
				date		: "post 0 date",
				content		: `no data`
			})()
};

export default PostCompoenet;