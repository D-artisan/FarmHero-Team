import React from "react";
import './styles.css'

const GreenButton = ({ customLabel, customStyle }) => {
	return <div className='green-button-container' style={customStyle}>{customLabel}</div>;
};

export default GreenButton