import styles from "styled-components"

const HomeStyle = styles.div`
	width				: calc(100% - 15rem);
	min-height			: 50rem;
	float				: left;
	background-color	: #F7F7F7;

	@media only screen and (max-width: 768px) {
		width			: 100%;
	}
`;

export default HomeStyle;