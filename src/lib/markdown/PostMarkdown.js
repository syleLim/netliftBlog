import React from "react"
import PropTypes from "prop-types"

class PostMarkDown extends React.Component  {
	
	render () {
		return (	
			<div dangerouslySetInnerHTML={{__html : this.props.content}} />
		)
	}
}

PostMarkDown.propTypes = {
	content	: PropTypes.string
}

export default PostMarkDown;