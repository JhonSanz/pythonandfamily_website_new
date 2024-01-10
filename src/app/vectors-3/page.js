"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTile } from "@/chartsRepository/vectors3/props";
import { description, miniDescription } from "@/chartsRepository/vectors3/descriptionEN";

export default function Vectors3() {
  return (
    <>
      <DetailedChart
        moduleName="vectors3"
        chartProps={{ layout, chartTile }}
        data={data}
      >
      </DetailedChart>
    </>
  )
}