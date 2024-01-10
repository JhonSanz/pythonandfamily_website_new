"use client";

import { useState } from "react";
import DetailedChart from "@/components/detailedChart";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { dataDefault, layout, chartTile, addVector } from "@/chartsRepository/linearIndependence/props";
import { description, miniDescription } from "@/chartsRepository/linearIndependence/descriptionEN";
import Latex from 'react-latex-next'


const DataManager = ({ setData }) => {
  const [newValues, setNewValues] = useState({
    xVector: "",
    yVector: "",
    zVector: "",
  });

  const setVectorValue = (e) => {
    const tempValues = { ...newValues };
    tempValues[e.target.name] = e.target.value
    setNewValues(tempValues);
  }

  return (
    <div style={{ textAlign: 'start' }}>
      <div>
        <input
          name='xVector'
          className='constants'
          type="number"
          step={0.1}
          value={newValues.xVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$\\begin{matrix} 1 \\\\ 0 \\\\ 0 \\end{matrix} +$"}</Latex>
        <input
          name='yVector'
          className='constants'
          type="number"
          step={0.1}
          value={newValues.yVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$\\begin{matrix} 0 \\\\ 1 \\\\ 0 \\end{matrix} +$"}</Latex>
        <input
          name='zVector'
          className='constants'
          type="number"
          step={0.1}
          value={newValues.zVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$\\begin{matrix} 0 \\\\ 0 \\\\ 1 \\end{matrix}$"}</Latex>
        <Latex>{`$ \\ = ${newValues.xVector || "0"}\\hat{i} + ${newValues.yVector || "0"}\\hat{j} + ${newValues.zVector || "0"}\\hat{k}$`}</Latex>
      </div>
      <br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            setData(dataDefault);
            setNewValues({
              xVector: "",
              yVector: "",
              zVector: "",
            })
          }}
        >
          Reset
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setData(addVector(newValues))
          }}
          disabled={
            newValues.xVector === "" ||
            newValues.yVector === "" ||
            newValues.zVector === ""
          }
        >
          Add
        </Button>
      </ButtonGroup>
    </div >
  )
}



export default function Vectors1() {
  const [data, setData] = useState(dataDefault);

  return (
    <>
      <DetailedChart
        moduleName="linearIndependence"
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