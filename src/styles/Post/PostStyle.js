import styles from "styled-components"

const PostStyle = styles.div`
	float		: left;
	width		: calc(100% - 17rem);
	height		: 100%;
	padding		: 1rem;
	background	: #FAFAFA;

	@media only screen and (max-width: 768px) {
		width			: 100%;
	}
`;

const PostTitle = styles.h1`
	float				: left;
	width				: 100%;
	margin-block-start	: 5rem;
	margin-block-end	: 0.5rem;
	
	font-size			: 5rem;
	text-align			: center;
`

const PostAuthor = styles.p`
	float				: left;
	width				: 100%;
	margin-block-end	: 2rem;
	margin-block-start	: 0rem;
	font-size			: 1rem;
	text-align			: center;
	color				: #BD706d;
`;

const PostDate = styles.p`
	float				: left;
	width				: calc(100% - 2rem);
	margin-block-end	: 0.5rem;
	
	font-size			: 1rem;
	color				: #5f5f5f;
	text-align			: right;
	
`;

const PostContent = styles.div`
	float			: left;
	width			: calc(100% - 3.1rem);
	padding-left	: 1.5rem;
	padding-right	: 1.5rem;
	border			: 0.05rem solid #E6E6E6;
	height			: calc(100% - 10rem);
`;

export { PostStyle, PostTitle, PostDate, PostAuthor, PostContent };