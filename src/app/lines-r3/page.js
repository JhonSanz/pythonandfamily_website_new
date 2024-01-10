"use client";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react";
import DetailedChart from "@/components/detailedChart";
import { dataDefault, layout, chartTile, applyNewData } from "@/chartsRepository/linesR3/props";
import { description, miniDescription } from "@/chartsRepository/linesR3/descriptionEN";
var Latex = require('react-latex');


const DataManager = ({ setData }) => {
  const [lineProps, setLineProps] = useState({
    xDirectionVector: "1",
    yDirectionVector: "1",
    zDirectionVector: "0.5",
    xInitialPoint: "0.2",
    yInitialPoint: "1",
    zInitialPoint: "1",
  });

  const setVectorValue = (e) => {
    const tempValues = { ...lineProps };
    tempValues[e.target.name] = e.target.value
    setLineProps(tempValues);
  }

  return (
    <div style={{ textAlign: 'start' }}>
      <div>
        <Latex>{"$A = ($"}</Latex>
        <input
          name='xDirectionVector'
          className='constants'
          type="number"
          step={0.1}
          value={lineProps.xDirectionVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$,$"}</Latex>
        <input
          name='yDirectionVector'
          className='constants'
          type="number"
          step={0.1}
          value={lineProps.yDirectionVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$,$"}</Latex>
        <input
          name='zDirectionVector'
          className='constants'
          type="number"
          step={0.1}
          value={lineProps.zDirectionVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$)$"}</Latex>
      </div>
      <div>
        <Latex>{"$P = ($"}</Latex>
        <input
          name='xInitialPoint'
          className='constants'
          type="number"
          step={0.1}
          value={lineProps.xInitialPoint || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$,$"}</Latex>
        <input
          name='yInitialPoint'
          className='constants'
          type="number"
          step={0.1}
          value={lineProps.yInitialPoint || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$,$"}</Latex>
        <input
          name='zInitialPoint'
          className='constants'
          type="number"
          step={0.1}
          value={lineProps.zInitialPoint || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$)$"}</Latex>
      </div>
      <br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            setData(dataDefault);
            setLineProps({
              xDirectionVector: "1",
              yDirectionVector: "1",
              zDirectionVector: "0.5",
              xInitialPoint: "0.2",
              yInitialPoint: "1",
              zInitialPoint: "1",
            })
          }}
        >
          Reset
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setData(applyNewData(lineProps))
          }}
          disabled={
            lineProps.xDirectionVector === "" ||
            lineProps.yDirectionVector === "" ||
            lineProps.zDirectionVector === "" ||
            lineProps.xInitialPoint === "" ||
            lineProps.yInitialPoint === "" ||
            lineProps.zInitialPoint === ""
          }
        >
          apply
        </Button>
      </ButtonGroup>
    </div >
  )
}

export default function LinesR3() {
  const [data, setData] = useState(dataDefault);

  return (
    <>
      <DetailedChart
        miniDescription={miniDescription}
        description={description}
        chartProps={{ layout, chartTile }}
        data={data}
      >
        <DataManager
          data={data}
          setData={setData}
        />
      </DetailedChart>
    </>
  )
}