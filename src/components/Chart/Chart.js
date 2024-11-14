import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {


    return <div className="chart">
        {props.datePoints.map(x => 
        <ChartBar 
        key= {x.label}
        value= {x.value} 
        maxValue= {null}
        label = {x.label}
        />)}
    </div>

};

export default Chart;