import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { generateConeCoords, generate_LineCoords } from '@/utils/generateVector';
import COLORS from '@/utils/colors';
import './linearIndependence.css';
var Latex = require('react-latex');

const lines = [
  { x: [0, 1], y: [0, 0], z: [0, 0], cone: true, color: COLORS.orange, name: 'i', dotted: false },
  { x: [0, 0], y: [0, 1], z: [0, 0], cone: true, color: COLORS.orange, name: 'j', dotted: false },
  { x: [0, 0], y: [0, 0], z: [0, 1], cone: true, color: COLORS.orange, name: 'k', dotted: false },
];

const data = [
  ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
  ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
]

const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': 1, 'y': -2.5, 'z': 0.92 }
    }
  },
}

const addVector = (vectorCoords) => {
  const { xVector, yVector, zVector } = vectorCoords;

  const newVector = {
    x: [0, parseFloat(xVector)], y: [0, parseFloat(yVector)], z: [0, parseFloat(zVector)],
    cone: true, color: COLORS.orange, name: '', dotted: false
  }
  return [
    ...data,
    generateConeCoords(newVector),
    generate_LineCoords(newVector),
  ]
}

const DataManager = (setmanagedData, managerParams) => {

  const { inputValues, setInputValues } = managerParams["linearIndependence"];

  const setVectorValue = (e) => {
    const tempValues = { ...inputValues };
    tempValues[e.target.name] = e.target.value
    setInputValues(tempValues);
  }

  return (
    <div style={{ textAlign: 'start' }}>
      <div>
        <input
          name='xVector'
          className='constants'
          type="number"
          step={0.1}
          value={inputValues.xVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$\\begin{matrix} 1 \\\\ 0 \\\\ 0 \\end{matrix} +$"}</Latex>
        <input
          name='yVector'
          className='constants'
          type="number"
          step={0.1}
          value={inputValues.yVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$\\begin{matrix} 0 \\\\ 1 \\\\ 0 \\end{matrix} +$"}</Latex>
        <input
          name='zVector'
          className='constants'
          type="number"
          step={0.1}
          value={inputValues.zVector || ""}
          onChange={(e) => setVectorValue(e)}
        />
        <Latex>{"$\\begin{matrix} 0 \\\\ 0 \\\\ 1 \\end{matrix}$"}</Latex>
        <Latex>{`$ \\ = ${inputValues.xVector || "0"}\\hat{i} + ${inputValues.yVector || "0"}\\hat{j} + ${inputValues.zVector || "0"}\\hat{k}$`}</Latex>
      </div>
      <br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            setmanagedData(data);
            setInputValues({
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
            setmanagedData(addVector(inputValues))
          }}
          disabled={
            inputValues.xVector === "" ||
            inputValues.yVector === "" ||
            inputValues.zVector === ""
          }
        >
          Add
        </Button>
      </ButtonGroup>
    </div >
  )
}

const chartTile = "Spanning set of R³";

const chartProps = { data, layout, chartTile, DataManager }
export default chartProps;
