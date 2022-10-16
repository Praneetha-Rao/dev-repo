import React from "react";

const Light  = (props) => {
    const lit= props.trafficColor;
    const color= props.color;
    return(
        <div>
            <div className="light" style={{backgroundColor: lit===color? color : 'white'}}></div>
        </div>
    )
}

export default Light;