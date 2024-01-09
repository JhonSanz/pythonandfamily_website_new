import { lazy } from 'react';

const getDescriptionChart = async (moduleName, language) => {
  const chartDescriptionModule = lazy(() => import(`@/chartsRepository/${moduleName}/description${language}`)
    .then(module => ({ default: module.description }))
  );
  const chartMiniDescriptionModule = lazy(() => import(`@/chartsRepository/${moduleName}/description${language}`)
    .then(module => ({ default: module.miniDescription }))
  );
  const chartPropsModule = await import(`@/chartsRepository/${moduleName}/props`);
  return {
    chartDescription: chartDescriptionModule,
    chartMiniDescription: chartMiniDescriptionModule,
    chartProps: chartPropsModule.default,
  }
}

export default getDescriptionChart;
