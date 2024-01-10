import { generateConeCoords, generate_LineCoords } from '@/utils/generateVector';
import COLORS from '@/utils/colors';

const lines = [
  { x: [0, 8], y: [0, 8], z: [0, 10], cone: true, color: COLORS.orange, name: 'A', dotted: false },
  { x: [0, 12], y: [0, 12], z: [0, 15], cone: true, color: COLORS.green, name: 'Q', dotted: true },
  { x: [0, 8], y: [0, 8], z: [0, 0], cone: false, color: COLORS.blue, name: '', dotted: true },
  { x: [8, 8], y: [8, 8], z: [0, 10], cone: false, color: COLORS.blue, name: '', dotted: true },
  { x: [8, 8], y: [0, 8], z: [0, 0], cone: false, color: COLORS.blue, name: '', dotted: true },
  { x: [0, 8], y: [8, 8], z: [0, 0], cone: false, color: COLORS.blue, name: '', dotted: true },
];

export const data = [
  ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
  ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
]

export const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': 1, 'y': -1.8, 'z': 0.92 }
    }
  },
}

export const chartTitle = "Vector norm";
