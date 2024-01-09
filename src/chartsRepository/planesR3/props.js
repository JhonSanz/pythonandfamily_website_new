import {
  generateConeCoords,
  generate_LineCoords,
  generateMarker,
  generatePlane
} from '@/utils/generateVector';
import COLORS from '@/utils/colors';

const nullVector = { x: 0, y: 0, z: 0 }
const P = { x: 1, y: 2, z: 2 }
const A = { x: 1, y: 0, z: 1 }
const B = { x: 1, y: 1, z: 0 }

const V1 = { x: 1, y: 2.5, z: 1.5 }
const V2 = { x: -0.5, y: 1, z: 1.5 }
const V3 = { x: 1.5, y: 1, z: 3.5 }

const generateLine = (P, vec, t, props) => {
  const { cone, color, name, dotted } = props;
  return {
    x: [0, P.x + (t * vec.x)],
    y: [0, P.y + (t * vec.y)],
    z: [0, P.z + (t * vec.z)],
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

const fillPlaneCoords = (P, A, B, coord) => {
  var value = [];
  const planeValues = [[-2, -2], [1, -3], [2, 0], [-1, 2]]
  planeValues.forEach(item => {
    value.push(P[coord] + (item[0] * A[coord]) + (item[1] * B[coord]));
  })
  return value;
}

const generatePlaneData = (P, A, B, props) => {
  const { color, name } = props;
  return {
    x: fillPlaneCoords(P, A, B, "x"),
    y: fillPlaneCoords(P, A, B, "y"),
    z: fillPlaneCoords(P, A, B, "z"),
    color, name
  }
}

const generateData = (points, lines, planes) => {
  return [
    ...points.map((markerCoords) => generateMarker(markerCoords)),
    ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
    ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
    ...planes.map((planesData) => generatePlane(planesData)),
  ]
}

const generateLinesSet = (P, A, B, V1, V2, V3, nullVector) => {
  return [
    generateLine(nullVector, A, 1, { cone: false, color: COLORS.red, name: 'A', dotted: false }),
    generateLine(nullVector, B, 1, { cone: false, color: COLORS.red, name: 'B', dotted: false }),
    generateLine(P, P, 0, { cone: false, color: COLORS.green, name: '', dotted: true }),
    generateLine(V1, P, 0, { cone: false, color: COLORS.green, name: '', dotted: true }),
    generateLine(V2, P, 0, { cone: false, color: COLORS.green, name: '', dotted: true }),
    generateLine(V3, P, 0, { cone: false, color: COLORS.green, name: '', dotted: true }),
    generateLine(V3, P, 0, { cone: false, color: COLORS.green, name: '', dotted: true }),
    generateLine(
      {'x': -2, 'y': 2, 'z': 2}, P, 0,
      { cone: true, color: COLORS.orange, name: '2N', dotted: false }
    ),
    generateLine(
      {'x': 1, 'y': 0, 'z': 1}, P, 1,
      { cone: false, color: COLORS.green, name: 'A+P', dotted: true }
    ),
    generateLine(
      {'x': 1, 'y': 1, 'z': 0}, P, 1,
      { cone: false, color: COLORS.green, name: 'B+P', dotted: true }
    ),
    generateLine(
      {'x': 0, 'y': -1, 'z': 1}, P, 0,
      { cone: false, color: COLORS.red, name: 'A-B', dotted: false }
    ),
  ];
}

const generatePointsSet = (P, A, V1, V2, V3) => {
  return [
    generatePoint(P, A, 0, { color: COLORS.blue, name: 'P' }),
    generatePoint(V1, A, 0, { color: COLORS.blue, name: '' }),
    generatePoint(V2, A, 0, { color: COLORS.blue, name: '' }),
    generatePoint(V3, A, 0, { color: COLORS.blue, name: '' }),
    generatePoint({'x': 2, 'y': 2, 'z': 3}, A, 0, { color: COLORS.blue, name: '' }),
    generatePoint({'x': 2, 'y': 3, 'z': 2}, A, 0, { color: COLORS.blue, name: '' }),
  ]
}

const generatePlaneSet = (P, A, B, nullVector) => {
  return [
    generatePlaneData(P, A, B, { color: COLORS.blue, name: "" }),
    generatePlaneData({ x: 1, y: 1, z: 0 }, A, B, { color: COLORS.blue, name: "" })
  ]
}

const lines = generateLinesSet(P, A, B, V1, V2, V3, nullVector);
const points = generatePointsSet(P, A, V1, V2, V3);
const planes = generatePlaneSet(P, A, B, nullVector);
export const data = generateData(points, lines, planes);
export const chartTile = "Planes in R³";

export const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': -0.3, 'y': -1.2, 'z': -0.1 }
    }
  },
}
