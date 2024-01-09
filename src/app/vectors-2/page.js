"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTile } from "@/chartsRepository/vectors2/props";
import { description, miniDescription } from "@/chartsRepository/vectors2/descriptionEN";

export default function Vectors2() {
  return (
    <>
      <DetailedChart
        miniDescription={miniDescription}
        description={description}
        chartProps={{ layout, chartTile }}
        data={data}
      >
      </DetailedChart>
    </>
  )
}