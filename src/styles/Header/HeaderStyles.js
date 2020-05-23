import styles from "styled-components"

const HeaderStyle = styles.div`
	width			: 100%;
	background		: black;
	padding-top		: 0.5rem;
	padding-bottom	: 0.5rem;
	box-shadow		: 0px 0 6px black;
`;

const HeaderContent = styles.p`
	color				: white;
	margin-left			: 2rem;
	margin-block-start	: 0rem;
	margin-block-end	: 0rem;
`;

export { HeaderStyle, HeaderContent };