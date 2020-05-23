import React from "react"
import { Record, List } from "immutable"
import ImmutablePropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"

import { CategoryStyle } from "../../styles"
import Profile from "./Profile"
import CategoryList from "./CategoryList"

const CategoryComponent = ({profile, categoryGroups}) => {
	return (
		<CategoryStyle>
			<Profile profile={ profile } />
			<CategoryList categoryGroups={categoryGroups} />
		</CategoryStyle>
	);
};

CategoryComponent.propTypes = {
	profile         : ImmutablePropTypes.recordOf({
		name        : PropTypes.string,
		description : PropTypes.string
	}),
	categoryGroups	: ImmutablePropTypes.listOf(
		ImmutablePropTypes.recordOf({
			groupName   : PropTypes.string,
			categories  : ImmutablePropTypes.listOf(
				PropTypes.string
			)
		})
	)
};

CategoryComponent.defaultProps = {
	profile	: Record({
		name		: "xx",
		description	: "xx"
	})(),
	categoryGroups	: List([
		Record({
			groupName	: "xx",
			categories	: List([
				"xx"
			])
		})()  
	])
};

export default CategoryComponent;