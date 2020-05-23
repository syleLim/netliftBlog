import styles from "styled-components"
import { NavLink } from "react-router-dom"

const CategoryGroupStyle = styles.div`
			
`;

const Item = styles.div`
	margin-block-start		: 0.1rem;
	margin-inline-start		: 2rem;	
`;

const CategroyLink = styles(NavLink)`
	text-decoration		: none;
	&:focus, &:hover, &:visited, &:link, &:active {
		text-decoration	: none;
		color			: black;
	}
`;

export { CategoryGroupStyle, Item, CategroyLink };