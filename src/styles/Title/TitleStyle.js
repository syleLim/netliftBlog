import styles from "styled-components"

const TitleStyle = styles.div`
	float				: left;
	width				: calc(100% - 2em);
	height				: 10rem;
	background-color	: #F7F7F7;
	margin-block-start	: 1rem;
	margin-inline-start	: 1rem;
	margin-inline-end	: 1rem;
	border-radius		: 1rem;
	text-align			: center;
`

const BlogTitle = styles.h1`
	margin-block-start		: 1rem;
	margin-block-end		: 0.3rem;
	font-size				: 3rem;
`
const BlogDescription = styles.p`
	
`;


export { TitleStyle, BlogTitle, BlogDescription };