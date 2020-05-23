import React from "react"
import PropTypes from "prop-types"

const PreviewMarkDown = ({content}) => {
	return (
		<div dangerouslySetInnerHTML={{__html : content}} />
	)
}

PreviewMarkDown.propTypes = {
	content	: PropTypes.string
}

export default PreviewMarkDown;