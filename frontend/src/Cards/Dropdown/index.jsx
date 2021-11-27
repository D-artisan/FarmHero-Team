import React from "react";
import './styles.css'

const Dropdown = ({customStyle, customData, customHeader}) => {
return(
      <div className="dropdown-container" style={customStyle}>
            <div className="dropdown-arrow-top"></div>
            <h3>{customHeader}</h3>
           {customData.map(el => <p key={el}>{el}</p>)}
      </div>
)
}

export default Dropdown