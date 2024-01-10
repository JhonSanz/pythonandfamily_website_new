import { generateConeCoords, generate_LineCoords } from '@/utils/generateVector';
import COLORS from '@/utils/colors';
import './linearIndependence.css';

const lines = [
  { x: [0, 1], y: [0, 0], z: [0, 0], cone: true, color: COLORS.orange, name: 'i', dotted: false },
  { x: [0, 0], y: [0, 1], z: [0, 0], cone: true, color: COLORS.orange, name: 'j', dotted: false },
  { x: [0, 0], y: [0, 0], z: [0, 1], cone: true, color: COLORS.orange, name: 'k', dotted: false },
];

export const dataDefault = [
  ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
  ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
]

export const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': 1, 'y': -2.5, 'z': 0.92 }
    }
  },
}

export const addVector = (vectorCoords) => {
  const { xVector, yVector, zVector } = vectorCoords;

  const newVector = {
    x: [0, parseFloat(xVector)], y: [0, parseFloat(yVector)], z: [0, parseFloat(zVector)],
    cone: true, color: COLORS.orange, name: '', dotted: false
  }
  return [
    ...dataDefault,
    generateConeCoords(newVector),
    generate_LineCoords(newVector),
  ]
}


export const chartTile = "Spanning set of R³";
