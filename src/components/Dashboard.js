import React from "react";
import LineCharts from "./Chart/LineChart";
// import CustomShapeBarChart from "./Chart/CustomShapeBarChart";
import PieChartWithCustomizedLabel from "./Chart/PieChartWithCustomizedLabel";
import ComposedChartWithAxisLabels from "./Chart/ComposedChartWithAxisLabels";
import TwoLevelPieChart from "./Chart/TwoLevelPieChart";
import {Row, Col} from 'reactstrap'
export default function Dashboard() {
  return (
    <div>
    <h4 className="display-4 text-center my-3">Dashboard Graph</h4>
      <Row className="m-0 p-0">
        <Col md={6}>
          <LineCharts />
        </Col> <Col md={6}>
          <ComposedChartWithAxisLabels />
        </Col>
        {/* <Col md={6}>
          <CustomShapeBarChart />
        </Col> */}
        <Col md={6}>
          <PieChartWithCustomizedLabel />
        </Col>
       
        <Col md={6}>
          <TwoLevelPieChart />
        </Col>
      </Row>
    </div>
  );
}
