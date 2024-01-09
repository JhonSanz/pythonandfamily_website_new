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

export const dataDefault = [
  getTaylorPolynomial(x, exp, "y = e^x"),
  getTaylorPolynomial(x, taylor_1, "y'"),
  getTaylorPolynomial(x, taylor_2, "y^(2)"),
  getTaylorPolynomial(x, taylor_3, "y^(3)"),
  getTaylorPolynomial(x, taylor_4, "y^(4)"),
  getTaylorPolynomial(x, taylor_5, "y^(5)"),
  getTaylorPolynomial(x, taylor_6, "y^(6)"),
  getTaylorPolynomial(x, taylor_7, "y^(7)"),
];

export const removeTerm = (count) => {
  if (count === 0) return [dataDefault[0]];
  return [dataDefault[0], dataDefault[count]];
}

export const addTerm = (count) => {
  if (count === dataDefault.length) return [dataDefault[0], dataDefault[dataDefault.length - 1]];
  return [dataDefault[0], dataDefault[count]];
}


export const layout = {
  yaxis: { range: [-4, 8] },
  xaxis: { range: [-4, 4] },
  legend: { "orientation": "h", "xanchor": "center", "x": 0.5, "y": 0 },
}
export const chartTile = "Taylor polynomial";

