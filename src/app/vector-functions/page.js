"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTile } from "@/chartsRepository/vectorFunctions/props";
import { description, miniDescription } from "@/chartsRepository/vectorFunctions/descriptionEN";

export default function VectorFunctions() {
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