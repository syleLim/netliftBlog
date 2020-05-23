import React from "react"
import PropTypes from "prop-types"

const PostMarkDown = ({content}) => {
	return (
		<div dangerouslySetInnerHTML={{__html : content}} />
	)
}

PostMarkDown.propTypes = {
	content	: PropTypes.string
}

export default PostMarkDown;