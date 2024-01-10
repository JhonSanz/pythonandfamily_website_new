"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTitle } from "@/chartsRepository/vectorFunctions/props";

export default function VectorFunctions() {
  return (
    <>
      <DetailedChart
        moduleName="vectorFunctions"
        chartProps={{ layout, chartTitle }}
        data={data}
      >
      </DetailedChart>
    </>
  )
}