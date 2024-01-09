"use client";

import { useState, useEffect } from "react";
import DetailedChart from "@/components/detailedChart";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { dataDefault, layout, chartTile, removeTerm, addTerm } from "@/chartsRepository/taylorPolynomial/props";
import { description, miniDescription } from "@/chartsRepository/taylorPolynomial/descriptionEN";

const DataManager = ({ setData }) => {
  const [defaultParam, setDefaultParam] = useState(8);

  return (
    <div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button
          size="small"
          onClick={() => {
            if (defaultParam > 0) {
              setData(removeTerm(defaultParam - 1));
              setDefaultParam(defaultParam - 1);
            }
          }}
        >
          -
        </Button>
        <Button
          color="secondary"
          size="small"
          onClick={() => {
            setData([dataDefault[0]]);
            setDefaultParam(0);
          }}
        >
          reset
        </Button>
        <Button
          color="success"
          size="small"
          onClick={() => {
            setData(dataDefault);
            setDefaultParam(dataDefault.length);
          }}
        >
          all
        </Button>
        <Button
          size="small"
          onClick={() => {
            if (defaultParam < (dataDefault.length - 1)) {
              setData(addTerm(defaultParam + 1))
              setDefaultParam(defaultParam + 1);
            }
          }}
        >
          +
        </Button>
      </ButtonGroup>
    </div >
  )
}

export default function Vectors1() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataDefault);
  }, []);

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