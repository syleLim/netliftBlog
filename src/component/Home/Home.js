import React 					from "react"
import PropTypes				from "prop-types"
import ImmutablePropTypes		from "react-immutable-proptypes"
import { List, Record, Map }	from "immutable"

import { HomeStyle }			from "../../styles"
import Title 					from "../Title/Title"
import HomePreview				from "./HomePreview"


const HomeComponent = ({blogTitle, blogDescription, lastPosts}) => {
	return (
		<HomeStyle>
			<Title
				blogTitle={blogTitle}
				blogDescription={blogDescription}
				/>
			<HomePreview 
				lastPosts={lastPosts}
				/>
		</HomeStyle>
	)
}

HomeComponent.propTypes = {
	blogTitle		: PropTypes.string,
	blogDescription	: PropTypes.string,
	lastPosts		: ImmutablePropTypes.listOf(
		ImmutablePropTypes.mapOf({
			groupName		: PropTypes.string,
			categoryName	: PropTypes.string,
			title			: PropTypes.string,
			author			: PropTypes.string,
			date			: PropTypes.string,
			preview			: PropTypes.string
		})
	)
};

HomeComponent.defaultProps = {
	blogTitle		: "xx",
	blogDescription	: "xx",
	previewItems	: List([
		Map({
			groupName		: "xxx",
			categoryName	: "xxx",
			titile			: "xxx",
			author			: "xxx",
			date			: "xxx",
			preview			: "xxx"
		})
	])
};

export default HomeComponent;