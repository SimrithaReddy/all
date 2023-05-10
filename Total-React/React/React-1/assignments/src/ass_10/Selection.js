import React, { useState } from "react";
import '../styles/Child_ASS10.css';

const Selection = (props)=>{

    // const {applyColor} = props;
    const [sel, setSel] = useState({background:''})
    return(
        <div className="fix-box" onClick={()=>{props.applyColor(setSel)}} style={sel}>
            <h2 className="subheading">Selection</h2>
        </div>
    )
};
export default Selection;