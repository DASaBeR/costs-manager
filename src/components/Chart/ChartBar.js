import React from "react";

import "./ChartBar.css";


const ChartBar = (props) => {

    let barFillHeight = "0%";
    if(props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    var dynamicStyles= {
        height: barFillHeight,
        //backgroundColor: "red"
    };

    return <div className="char-bar">
        <div className="chart-bar__inner">
            <div className="char-bar__fill" style={dynamicStyles}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;