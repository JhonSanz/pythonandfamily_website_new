const pointCount = 1000;
let i = 0;
let r = 0;

const x = [];
const y = [];
const z = [];
const c = [];

// we generate values for x,y but those are not continuous values
// and they will look too separated in the chart. If we divide them by a constant
// are going to be closer, simulating like to be continuous.

for (i = 1; i < pointCount; i++) {
  r = i;
  x.push(r * Math.cos(i / 30));
  y.push(r * Math.sin(i / 30));
  z.push(i);
  c.push(i)
}

const generateIntegralTerm = (x, y, color) => {
  return {
    'type': 'scatter', 'mode': 'markers', 'text': "",
    'textposition': 'middle left', 'showlegend': false,
    'marker': {
      color
    },
    x, y,
    // 'y': [0],
  }
}

const generateIntegralVector = (init) => {
  const x = [];
  const y = [];
  for (let i = init; i <= 2.05;) {
    x.push((i + (1 / 2 * i * i)) - (init + (1 / 2 * init * init)))
    y.push((2 * i + (1 / 2 * i * i)) - (2 * init + (1 / 2 * init * init)))
    i += 0.05;
  }
  return generateIntegralTerm(x, y, "black")
}

const generateIntegralVectorV2 = (init) => {
  const x = [];
  const y = [];
  for (let i = init; i <= 2.05;) {
    x.push((i * i)/2 - (init * init)/2)
    y.push(((i * i)/2 + i) - ((init * init)/2 + init))
    i += 0.05;
  }
  return generateIntegralTerm(x, y, "red")
}

const chartProps = {
  data: [
    {
      'type': 'scatter', 'mode': 'lines+text',
      'textposition': 'middle left', 'showlegend': false,
      'text': ["", ""],
      x: [-2, 0, 5],
      // y: [0, 0, 0],
      y: [-1, 1, 6],
      'line': {
        'width': 6,
        'dash': 'solid',
      },
    },
    {
      'type': 'scatter', 'mode': 'lines+text',
      'textposition': 'middle left', 'showlegend': false,
      'text': ["", ""],
      x: [-2, 0, 5],
      // y: [0, 0, 0],
      y: [0, 2, 7],
      'line': {
        'width': 6,
        'dash': 'solid',
      },
    },
    {
      'type': 'scatter', 'mode': 'lines+text',
      'textposition': 'middle left', 'showlegend': false,
      'text': ["", ""],
      x: [-2, 0, 5],
      // y: [0, 0, 0],
      y: [-2, 0, 5],
      'line': {
        'width': 6,
        'dash': 'solid',
      },
    },
    // generateIntegralVector(-2),
    generateIntegralVectorV2(-1)
  ],
  layout: {}
}

export default chartProps;
