import React from "react"

const inlineCodeBlock = (props) => {
	return (
		<span style={{background : "#f0f0f0"}}>
			{props.value}
		</span>
	)
}

const codeBlock = (props) => {
	return (
		<pre style={{
					background		: "#101010",
					color			: "white",
					padding			: 10,
					margin			: 10,
					overflowX		: "auto"
				}}>
			{props.value}
		</pre>
	);
}

const previewInlineCodeBlock = (props) => {
	return (
		<span style={{background 	: "#e0e0e0",
						color 		: "gray",
						fontSize	: "0.8rem"}}>
			{props.value}
		</span>
	)
}

const imgBlock = (props) => {
	console.log(props)
	return (
		<img style={{
			width	: "100%",
			height	: "auto",
		}}
		src={props.src}/>
	);
}

const previewCodeBlock = (props) => {
	return (
		<pre style={{
					color			: "gray",
					background		: "#e0e0e0",
					borderRadius	: 3,
					padding			: "0.1rem",
					paddingLeft		: "1rem",
					paddingRight	: "1rem",
					fontSize		: "0.8rem",
					margin			: 0,
				}}>
			{props.value}
		</pre>
	);
}

const previewHeader = (props) => {
	return (
		<p style={{
			fontSize	: "0.8rem",
			margin		: "0.1rem",
			padding		: 0,
			color		: "gray"
		}} >
			{props.children[0].props.value}
		</p>
	)
}

export { inlineCodeBlock, codeBlock, imgBlock, previewCodeBlock, previewInlineCodeBlock, previewHeader};