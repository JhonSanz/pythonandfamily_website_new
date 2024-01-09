import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { generateConeCoords, generate_LineCoords, generateMarker } from 'utils/generateVector';
import './linesr3.css';
import COLORS from 'utils/colors';
var Latex = require('react-latex');

const P = { x: 0.2, y: 1, z: 1 }
const A = { x: 1, y: 1, z: 0.5 }

const generateLine = (P, A, t, props) => {
  const { cone, color, name, dotted } = props;
  return {
    x: [0, P.x + (t * A.x)],
    y: [0, P.y + (t * A.y)],
    z: [0, P.z + (t * A.z)],
    cone, color, name, dotted
  }
}

const generatePoint = (P, A, t, props) => {
  const { color, name } = props;
  return {
    x: [P.x + (t * A.x)],
    y: [P.y + (t * A.y)],
    z: [P.z + (t * A.z)],
    color, name
  }
}

const generateLinesSet = (P, A) => {
  const generated = [
    generateLine(A, A, 0, { cone: true, color: COLORS.orange, name: 'A', dotted: false }),
    generateLine(P, A, 0, { cone: false, color: COLORS.blue, name: '', dotted: true }),
    generateLine(P, A, 0.5, { cone: false, color: COLORS.blue, name: '', dotted: true }),
    generateLine(P, A, 1, { cone: false, color: COLORS.blue, name: '', dotted: true }),
    generateLine(P, A, -0.5, { cone: false, color: COLORS.blue, name: '', dotted: true }),
  ]
  const finalLineStart = {
    x: generated[generated.length - 2].x[1],
    y: generated[generated.length - 2].y[1],
    z: generated[generated.length - 2].z[1],
  }
  const finalLineEnd = {
    x: generated[generated.length - 1].x[1],
    y: generated[generated.length - 1].y[1],
    z: generated[generated.length - 1].z[1],
  }
  return [
    ...generated,
    {
      x: [finalLineStart.x, finalLineEnd.x],
      y: [finalLineStart.y, finalLineEnd.y],
      z: [finalLineStart.z, finalLineEnd.z],
      cone: false, color: COLORS.green, name: '', dotted: false }
  ]
}

const generatePointsSet = (P, A) => {
  return [
    generatePoint(P, A, 0, { color: COLORS.red, name: 'P' }),
    generatePoint(P, A, 0.5, { color: COLORS.blue, name: 'P + 0.5A' }),
    generatePoint(P, A, 1, { color: COLORS.blue, name: 'P + A' }),
    generatePoint(P, A, -0.5, { color: COLORS.blue, name: 'P - 0.5A' }),
  ]
}

const generateData = (points, lines) => {
  return [
    ...points.map((markerCoords) => generateMarker(markerCoords)),
    ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
    ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
  ]
}

const lines = generateLinesSet(P, A);
const points = generatePointsSet(P, A);
const data = generateData(points, lines);

const applyNewData = (linePropsData) => {
  const P = {
    x: parseFloat(linePropsData.xInitialPoint),
    y: parseFloat(linePropsData.yInitialPoint),
    z: parseFloat(linePropsData.zInitialPoint),
  };
  const A = {
    x: parseFloat(linePropsData.xDirectionVector),
    y: parseFloat(linePropsData.yDirectionVector),
    z: parseFloat(linePropsData.zDirectionVector),
  };
  const points = generatePointsSet(P, A);
  const lines = generateLinesSet(P, A);
  return generateData(points, lines)
}

const DataManager = (setmanagedData, managerParams) => {

  const { lineProps, setLineProps } = managerParams["linesR3"];

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
            setmanagedData(data);
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
            setmanagedData(applyNewData(lineProps))
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

const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': 1, 'y': -1.8, 'z': 0.92 }
    }
  },
}
const chartTile = "Lines R³";

const chartProps = { data, layout, chartTile, DataManager }
export default chartProps;
