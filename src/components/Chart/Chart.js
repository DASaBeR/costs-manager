import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {

    const dataPointsVlaues = props.dataPoints.map(x => x.value);
    const maxDataVlaue = Math.max(...dataPointsVlaues);

    return <div className="chart">
        {props.dataPoints.map(x => 
        <ChartBar 
        key= {x.label}
        value= {x.value} 
        maxValue= {maxDataVlaue}
        label = {x.label}
        />)}
    </div>

};

export default Chart;