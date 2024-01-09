"use client";

import { useState } from "react";
import DefaultChartComponent from "@/components/baseLayout"

export default function Vectors1() {
  const [lineProps, setLineProps] = useState({
    xDirectionVector: "1",
    yDirectionVector: "1",
    zDirectionVector: "0.5",
    xInitialPoint: "0.2",
    yInitialPoint: "1",
    zInitialPoint: "1",
  });

  return (
    <>
      <DefaultChartComponent
        module="linesR3"
        defaultParam={lineProps}
        setDefaultParam={setLineProps}
      />
    </>
  )
}