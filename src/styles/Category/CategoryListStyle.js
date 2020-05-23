import styles from "styled-components"

const CategoryListStyle = styles.div`
	width		: 100%;
	float		: left;
	margin-top	: 1rem;
`;

const GroupName = styles.h1`
	font-size			: 1.4rem;
	margin-block-start	: 0;
	margin-inline-start	: 1rem;
	margin-block-end	: 0;
`;

export { CategoryListStyle, GroupName };