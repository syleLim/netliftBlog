import React from "react"
import { List, Record } from "immutable"

import { CategoryListStyle,
			CategoryGroupStyle,
			Item,
			GroupName,
			CategroyLink } from "../../styles"
//import { NavLink } from "react-router-dom" 

const Category = ({groupName, categories}) => {
	
	return(
	<CategoryGroupStyle>
		{categories.map((categoryName, i) => (
			<Item key={i}>
				<CategroyLink exact to={`/postlist/${groupName}/${categoryName}`}>
					{categoryName}
				</CategroyLink>
			</Item>
		))}
	</CategoryGroupStyle>
)}

const CategoryList = ({categoryGroups}) => (
	categoryGroups.map(({ groupName, categories }, i) => {
	
		return(
			<CategoryListStyle key={i}>
				<GroupName>{groupName}</GroupName>
				<Category groupName={groupName}
						 categories={categories}/>
			</CategoryListStyle>
		)}
	)
)

export default CategoryList;