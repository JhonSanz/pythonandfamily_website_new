"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTitle } from "@/chartsRepository/vectors2/props";
import { description, miniDescription } from "@/chartsRepository/vectors2/descriptionEN";

export default function Vectors2() {
  return (
    <>
      <DetailedChart
        moduleName="vectors2"
        chartProps={{ layout, chartTitle }}
        data={data}
      >
      </DetailedChart>
    </>
  )
}