"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTile } from "@/chartsRepository/vectors1/props";
import { description, miniDescription } from "@/chartsRepository/vectors1/descriptionEN";

export default function Vectors1() {
  return (
    <>
      <DetailedChart
        moduleName="vectors1"
        chartProps={{ layout, chartTile }}
        data={data}
      >
      </DetailedChart>
    </>
  )
}