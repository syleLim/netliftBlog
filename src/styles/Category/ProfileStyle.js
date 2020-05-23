import styles from "styled-components"

const ProfileStyle = styles.div`
	text-align			: center;
	margin				: 0 auto;
	margin-top			: 2rem;
	width				: 10rem;
	height				: 10rem;
`;

const User = styles.h1`
	font-size			: 2.5rem;
	margin-block-end	: 0.1em;
	margin-block-start	: 0.1em;
	text-align			: center;
	background			: white;
	border				: 0.2rem solid black;
	border-radius		: 1rem;
`;

const Description = styles.p`
	font-size			: 1rem;
	margin-block-start	: 0em;
	padding				: 1rem;
	background			: black;
	color				: white;
	text-align			: center;
	border-radius		: 0.5rem;
`;

export { ProfileStyle, User, Description };