import React from "react";
import LineCharts from "./Chart/LineChart";
import CustomShapeBarChart from "./Chart/CustomShapeBarChart";
import PieChartWithCustomizedLabel from "./Chart/PieChartWithCustomizedLabel";
import ComposedChartWithAxisLabels from "./Chart/ComposedChartWithAxisLabels";
import TwoLevelPieChart from "./Chart/TwoLevelPieChart";

export default function Dashboard() {
  return (
    <div>
    <div>
      <LineCharts />
    </div>
    <div>

      <CustomShapeBarChart />
    </div>
      <PieChartWithCustomizedLabel />
      <ComposedChartWithAxisLabels />
      <TwoLevelPieChart />
    </div>
  );
}
