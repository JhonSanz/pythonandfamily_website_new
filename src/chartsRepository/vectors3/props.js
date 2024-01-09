import { generate2dVectors } from '@/utils/generateVector';

export const layout = {
  grid: { rows: 2, columns: 1, pattern: 'independent', ygap: 0.09 },
  verticalSpacing: 0.05,
  showlegend: false
};

export const data = [
  generate2dVectors([0, 1, 2], [0, 0.75, 1.5], "1", false, ['', '||A+B||', '']),
  generate2dVectors([0, 0.75, 1.5], [0, 0.25, 0.5], "1", false, ['', '||A||', '']),
  generate2dVectors([1.5, 1.75, 2], [0.5, 1, 1.5], "1", false, ['', '||B||', '']),

  generate2dVectors([0, 1, 2], [0, 1, 2], "2", false, ['', '', 'A = tB + C']),
  generate2dVectors([0, 3], [0, 0], "2", false, ['', 'B']),
  generate2dVectors([2, 2], [0, 2], "2", true, ['tB', '',]),
  generate2dVectors([0, 0], [0, 2], "2", true, ['', 'C',]),
];


export const chartTile = "Triangular inequality and Projections";
