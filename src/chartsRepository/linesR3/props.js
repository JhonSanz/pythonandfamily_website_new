import { generateConeCoords, generate_LineCoords, generateMarker } from '@/utils/generateVector';
import './linesr3.css';
import COLORS from '@/utils/colors';
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
export const dataDefault = generateData(points, lines);

export const applyNewData = (linePropsData) => {
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


export const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': 1, 'y': -1.8, 'z': 0.92 }
    }
  },
}
export const chartTile = "Lines R³";
