"use client";

import DetailedChart from "@/components/detailedChart";
import { data, layout, chartTile } from "@/chartsRepository/planesR3/props";
import { description, miniDescription } from "@/chartsRepository/planesR3/descriptionEN";

export default function PlanesR3() {
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