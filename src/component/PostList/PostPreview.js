import React 		from "react"
import { Map } 		from "immutable"
import { NavLink }	from "react-router-dom";

import { PostPreviewStyle,
			PreviewBoxStyle,
			PreviewTitle,
			PreviewAuther,
			PreviewDate,
			PreviewContent,
			StyleLink,
			Line }	from "../../styles"

const PostPreview = ({postList}) => {
	
	const previewList = postList.map((post, i) => {
	
		const { groupName, categoryName, title, author, date, preview } = post.toJS();
		return (
			<div key={i}>
				<Line />
				<PreviewBoxStyle>
					<PreviewAuther>{author}</PreviewAuther>
					<PreviewDate> / {date}</PreviewDate>
					<PreviewTitle>
						<StyleLink to={`/post/${groupName}/${categoryName}/${title}`}>
							{title}
						</StyleLink>
					</PreviewTitle>
					<PreviewContent>{preview}...</PreviewContent>				
				</PreviewBoxStyle>
			</div>
		)
	})
	
	return (
		<PostPreviewStyle>
			{previewList}
		</PostPreviewStyle>
	)
};


export default PostPreview;
