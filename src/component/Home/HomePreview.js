import React 	from "react"
import { NavLink } from "react-router-dom";
import { List }	from "immutable"
import { PreviewMarkDown } from "../../lib"

import { Line, 
			HomePreviewStyle } 	from "../../styles"
import { PreviewBoxStyle,
			PreviewAuther,
			PreviewContent,
			PreviewDate,
			PreviewTitle,
			StyleLink }	from "../../styles"

const HomePreview = ({lastPosts}) => {
	const previewList = lastPosts.map((post, i) => {
		const { groupName,
				categoryName,
				title, 
				author,
				date,
				preview } = post.toJS();

		return (
			<div key={i}>
				<Line/>
				<PreviewBoxStyle>
					<PreviewAuther>{author}</PreviewAuther>
					<PreviewDate>/ {date}</PreviewDate>
					<PreviewTitle>
						<StyleLink to={`/post/${groupName}/${categoryName}/${title}`}>
							{title.slice(0, -3)}
						</StyleLink>
					</PreviewTitle>
					<PreviewContent>
						<PreviewMarkDown content={preview} />
					</PreviewContent>
				</PreviewBoxStyle>
			</div>
		)
	})

	return (
		<HomePreviewStyle>
			{previewList}	
		</HomePreviewStyle>
	)
}

export default HomePreview