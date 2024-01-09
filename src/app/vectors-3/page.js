"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTile } from "@/chartsRepository/vectors3/props";
import { description, miniDescription } from "@/chartsRepository/vectors3/descriptionEN";

export default function Vectors3() {
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