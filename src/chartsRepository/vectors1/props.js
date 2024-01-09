import { generateConeCoords, generate_LineCoords, generateMarker } from 'utils/generateVector';
import COLORS from 'utils/colors';

const lines = [
  { x: [3, 8], y: [3, 8], z: [3, 10], cone: false, color: COLORS.green, name: 'E=A+B', dotted: false },
  { x: [3, 4], y: [3, 4], z: [3, 8], cone: true, color: COLORS.blue, name: 'A', dotted: false },
  { x: [3, 7], y: [3, 7], z: [3, 5], cone: true, color: COLORS.orange, name: 'B', dotted: false },
  { x: [4, 8], y: [4, 8], z: [8, 10], cone: false, color: COLORS.orange, name: '', dotted: true },
  { x: [7, 8], y: [7, 8], z: [5, 10], cone: false, color: COLORS.blue, name: '', dotted: true },
  { x: [7, 4], y: [7, 4], z: [5, 8], cone: false, color: COLORS.green, name: '', dotted: true },
];

const data = [
  generateMarker({ 'x': [3], 'y': [3], 'z': [3], color: COLORS.blue, name: "Q" }),
  ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
  ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
]

const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': 1, 'y': -1.8, 'z': 0.92 }
    }
  },
}

const chartTile = "Parallelogram law";

const chartProps = { data, layout, chartTile }
export default chartProps;
