import { lazy } from 'react';

const lazyImportByLang = async (moduleName, language) => {
  const chartDescriptionModule = lazy(() => import(`@/chartsRepository/${moduleName}/description${language}`)
    .then(module => ({ default: module.description }))
  );
  const chartMiniDescriptionModule = lazy(() => import(`@/chartsRepository/${moduleName}/description${language}`)
    .then(module => ({ default: module.miniDescription }))
  );
  return {
    chartDescription: chartDescriptionModule,
    chartMiniDescription: chartMiniDescriptionModule,
  }
}

export default lazyImportByLang;
