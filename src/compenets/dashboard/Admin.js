import React from "react";
import Pie from "../Chart/Pie";
import ScatterChartComponent from "../Chart/Scatter";
import BarChartComponent from "../Chart/Barchart";
function Admin() {
  return (
    // Options to configure the chart and vertical legend
    <div className="flex max-w-[1040px] gap-3 mx-auto justify-center items-center mt-28">
      <Pie />
      <BarChartComponent />
    </div>
  );
}

export default Admin;
