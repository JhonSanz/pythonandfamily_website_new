"use client"
import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import DetailedChart from '@/components/detailedChart';
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import getDescriptionChart from '@/utils/importDescriptionChart';
import { ThemeProvider } from '@/utils/providers';


export default function DefaultChartComponent({ module }) {
  const { language } = useContext(ThemeProvider);

  const [chartMiniDescription, setChartMiniDescription] = useState(undefined);
  const [chartDescription, setChartDescription] = useState(undefined);
  const [chartProps, setChartProps] = useState(undefined);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const importChartModule = async () => {
      const { chartDescription, chartProps, chartMiniDescription } = await getDescriptionChart(module, language);
      setChartMiniDescription(chartMiniDescription);
      setChartDescription(chartDescription);
      setChartProps(chartProps);
      setReady(true);
    }
    importChartModule();
  }, [language]);

  return (
    <Grid>
      {
        !ready && (
          <Grid justifyContent="center" display={"flex"} alignItems="center" height={"100vh"}>
            <CircularProgress />
          </Grid>
        )
      }
      {
        ready && chartDescription && chartProps && <DetailedChart
          miniDescription={chartMiniDescription}
          description={chartDescription}
          chartProps={chartProps}
          module={module}
        />
      }
    </Grid>
  )
}
