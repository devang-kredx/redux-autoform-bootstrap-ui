import React, { Component, PropTypes } from 'react';

const HorizontalComponent = ({children, size}) => (
	<div className={`col-md-${size}`}>
		{children}
	</div>
);

HorizontalComponent.propTypes = {
	children: PropTypes.object.isRequired,
	size: PropTypes.number
};

export default HorizontalComponent;