import styles from "styled-components";

const FooterStyle = styles.div`
	float			: none;	
	padding-top		: 0.8rem;
	padding-bottom	: 0.8rem;
	background		: black;
	width			: 100%;
	border-top		: 0.2rem white;
	box-shadow		: 0 0 6px grey
`;

const FooterContent = styles.p`
	color				: white;
	padding-left		: 2rem;
	margin-block-start	: 0rem;
	margin-block-end	: 0rem;
`;

export { FooterStyle, FooterContent };