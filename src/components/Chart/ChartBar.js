import React from "react";

import "./ChartBar.css";


const ChartBar = (props) => {

    let barFillHeight = "0%";
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
        console.log(barFillHeight);
    }

    var dynamicStyles= {
        height: barFillHeight,
        backgroundColor: "#4826b9"
    };

    return <div className="char-bar">
        <div className="chart-bar__inner">
            <div className="char-bar__fill" style={dynamicStyles}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;