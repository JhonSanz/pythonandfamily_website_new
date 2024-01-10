"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTitle } from "@/chartsRepository/planesR3/props";
import { description, miniDescription } from "@/chartsRepository/planesR3/descriptionEN";

export default function PlanesR3() {
  return (
    <>
      <DetailedChart
        moduleName="planesR3"
        chartProps={{ layout, chartTitle }}
        data={data}
      >
      </DetailedChart>
    </>
  )
}