"use client";

import { useState } from "react";
import DefaultChartComponent from "@/components/baseLayout"

export default function Vectors1() {
  const [inputValues, setInputValues] = useState({
    xVector: "",
    yVector: "",
    zVector: "",
  });

  return (
    <>
      <DefaultChartComponent
        module={"linearIndependence"}
        defaultParam={inputValues}
        setDefaultParam={setInputValues}
      />
    </>
  )
}