import React from "react";
import './styles.css'
import { generalIcons } from "../../../themes";
const WhiteButton = ({customLabel}) => {
     return(
           <div className="white-button-container">
                  <img src={generalIcons.Asset_Arrow} alt="back" />
                  {customLabel}
           </div>
     )
}

export default WhiteButton