import styles from "styled-components"
import { NavLink } from "react-router-dom";

const PreviewBoxStyle = styles.div`
	width				: calc(100% - 3rem);
	min-height			: 15rem;
	margin				: 1rem;
	padding-left		: 1rem;
	float				: left;
	background-color	: #F7F7F7;
`

const PreviewTitle = styles.h1`
	width		: 100%;
	float		: left;
	margin		: 0rem;
	margin-top	: 0.5rem;

	font-size	: 4rem;
`;

const PreviewAuther = styles.p`
	float				: left;
	padding-right		: 1rem;
	margin-block-start	: 0rem;
	margin-block-end	: 0rem;

	font-size			: 1.2rem;
	color				: #DBA901;
`

const PreviewDate = styles.p`
	float				: left;
	margin-block-start	: 0rem;
	margin-block-end	: 0rem;
	padding-right		: 1rem;

	font-size			: 1.2rem;
	color				: black;
`;

const PreviewContent = styles.div`
	float				: left;
	margin-block-start	: 0.5rem;
	padding-left		: 1rem;
`;

const StyleLink = styles(NavLink)`
	text-decoration		: none;
	&:focus, &:hover, &:visited, &:link, &:active {
		text-decoration: none;
		color			: black;
    }
`

export { PreviewBoxStyle, PreviewTitle, PreviewAuther, PreviewDate, PreviewContent, StyleLink };