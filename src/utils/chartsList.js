'use client';
import { MATH, STATS, EN } from '@/utils/const';

export function chartsList(lang) {
  const repo = {}

  const chartsList = [
    { listName: lang === EN ? "Parallelogram law" : "Ley del paralelogramo", module: "vectors1", route: "vectors-1", defaultComponent: true },
    { listName: lang === EN ? "Cauchy-Schwarz inequalty" : "Desigualdad de Cauchy-Schwarz", module: "vectors2", route: "vectors-2", defaultComponent: true },
    { listName: lang === EN ? "Projections and angles" : "Proyecciones y ángulos", module: "vectors3", route: "vectors-3", defaultComponent: true },
    { listName: lang === EN ? "Linear independence" : "Independencia lineal", module: "linearIndependence", route: "linear-independence", defaultComponent: true },
    { listName: lang === EN ? "Lines in R³" : "Rectas en R³", module: "linesR3", route: "lines-r3", defaultComponent: true },
    { listName: lang === EN ? "Planes in R³" : "Planos en R³", module: "planesR3", route: "planes-r3", defaultComponent: true },
    { listName: lang === EN ? "Vector functions" : "Funciones vectoriales", module: "vectorFunctions", route: "vector-functions", defaultComponent: true },
    { listName: lang === EN ? "Taylor polynomial" : "Poliniomos de Taylor", module: "taylorPolynomial", route: "taylor-polynomial", defaultComponent: true },
  ];


  const chartsListStatistics = [
  ];

  repo[MATH] = chartsList;
  repo[STATS] = chartsListStatistics;
  return repo;
}


