import React from "react"
import { TitleStyle, BlogTitle, BlogDescription } from "../../styles"

const Title = ({blogTitle, blogDescription}) => (
	<TitleStyle>
		<BlogTitle>{blogTitle}</BlogTitle>
		<BlogDescription>{blogDescription}</BlogDescription>
	</TitleStyle>
)

export default Title;