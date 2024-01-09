import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const x = [];
const exp = [];
const taylor_1 = [];
const taylor_2 = [];
const taylor_3 = [];
const taylor_4 = [];
const taylor_5 = [];
const taylor_6 = [];
const taylor_7 = [];

const getTaylorPolynomial = (x, y, name) => {
  return {
    type: 'scatter',
    mode: 'lines',
    x: x,
    y: y,
    name
  }
}

let i = -5
while (i <= 5) {
  x.push(i);
  exp.push(Math.exp(i));
  taylor_1.push(1 + i);
  taylor_2.push(1 + i + (1 / 2 * Math.pow(i, 2)));
  taylor_3.push(1 + i + (1 / 2 * Math.pow(i, 2)) + (1 / 6 * Math.pow(i, 3)));
  taylor_4.push(
    1 + i + (1 / 2 * Math.pow(i, 2)) + (1 / 6 * Math.pow(i, 3))
    + (1 / 24 * Math.pow(i, 4))
  );
  taylor_5.push(
    1 + i + (1 / 2 * Math.pow(i, 2)) + (1 / 6 * Math.pow(i, 3))
    + (1 / 24 * Math.pow(i, 4))
    + (1 / 120 * Math.pow(i, 5))
  );
  taylor_6.push(
    1 + i + (1 / 2 * Math.pow(i, 2)) + (1 / 6 * Math.pow(i, 3))
    + (1 / 24 * Math.pow(i, 4))
    + (1 / 120 * Math.pow(i, 5))
    + (1 / 720 * Math.pow(i, 6))
  );
  taylor_7.push(
    1 + i + (1 / 2 * Math.pow(i, 2)) + (1 / 6 * Math.pow(i, 3))
    + (1 / 24 * Math.pow(i, 4))
    + (1 / 120 * Math.pow(i, 5))
    + (1 / 720 * Math.pow(i, 6))
    + (1 / 5040 * Math.pow(i, 7))
  );

  i += 1 / 10;
}

const data = [
  getTaylorPolynomial(x, exp, "y = e^x"),
  getTaylorPolynomial(x, taylor_1, "y'"),
  getTaylorPolynomial(x, taylor_2, "y^(2)"),
  getTaylorPolynomial(x, taylor_3, "y^(3)"),
  getTaylorPolynomial(x, taylor_4, "y^(4)"),
  getTaylorPolynomial(x, taylor_5, "y^(5)"),
  getTaylorPolynomial(x, taylor_6, "y^(6)"),
  getTaylorPolynomial(x, taylor_7, "y^(7)"),
];

const removeTerm = (count) => {
  if (count === 0) return [data[0]];
  return [data[0], data[count]];
}

const addTerm = (count) => {
  if (count === data.length) return [data[0], data[data.length - 1]];
  return [data[0], data[count]];
}

const DataManager = (setmanagedData, managerParams) => {
  const { count, setCount } = managerParams["taylorPolynomial"];

  return (
    <div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button
          size="small"
          onClick={() => {
            if (count > 0) {
              setmanagedData(removeTerm(count - 1))
              setCount(count - 1);
            }
          }}
        >
          -
        </Button>
        <Button
          color="secondary"
          size="small"
          onClick={() => {
            setmanagedData([data[0]]);
            setCount(0);
          }}
        >
          reset
        </Button>
        <Button
          color="success"
          size="small"
          onClick={() => {
            setmanagedData(data);
            setCount(data.length);
          }}
        >
          all
        </Button>
        <Button
          size="small"
          onClick={() => {
            if (count < (data.length - 1)) {
              setmanagedData(addTerm(count + 1))
              setCount(count + 1);
            }
          }}
        >
          +
        </Button>
      </ButtonGroup>
    </div >
  )
}

const layout = {
  yaxis: { range: [-4, 8] },
  xaxis: { range: [-4, 4] },
  legend: { "orientation": "h", "xanchor": "center", "x": 0.5, "y": 0 },
}
const chartTile = "Taylor polynomial";

const chartProps = { data, layout, chartTile, DataManager }
export default chartProps;
