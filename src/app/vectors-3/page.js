"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTitle } from "@/chartsRepository/vectors3/props";
import { description, miniDescription } from "@/chartsRepository/vectors3/descriptionEN";

export default function Vectors3() {
  return (
    <>
      <DetailedChart
        moduleName="vectors3"
        chartProps={{ layout, chartTitle }}
        data={data}
      >
      </DetailedChart>
    </>
  )
}