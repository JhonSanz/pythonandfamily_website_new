"use client"
import { useState, useEffect, Suspense } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CenteredProgress from '@/utils/progress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { layout_subchart, config_subchart } from '@/utils/chartProps';


import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  maxHeight: "70%",
  overflowY: "scroll",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DetailedChart({
  miniDescription,
  description,
  chartProps,
  children,
  data
}) {
  const { layout, chartTile } = chartProps;
  const [open, setOpen] = useState(false);

  const [dataChart, setDataChart] = useState(undefined);
  const [layoutProps, setLayoutProps] = useState(undefined);
  const [configSubchart, setConfigSubchart] = useState(undefined);


  useEffect(() => {
    setDataChart(data)
  }, [data])

  useEffect(() => {
    setConfigSubchart(config_subchart);
    setLayoutProps({
      ...layout,
      ...layout_subchart,
      title: {
        text: chartTile,
        ...layout_subchart.title
      }
    });
  }, [])

  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={5}
      >
        <Card
          sx={{ margin: 2 }}
          elevation={3}
        >
          <CardContent>
            <div>
              <div>
                <Suspense fallback={<CenteredProgress />}>
                  {miniDescription}
                </Suspense>
              </div>
              <div>
                {children}
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    variant="outlined"
                    size='small'
                    onClick={() => setOpen(true)}
                  >
                    Continue reading
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12} sm={12} md={8} lg={7}
        textAlign={"center"}
        height={"100%"}
        width={"100%"}
        alignItems={"center"}
        display={"flex"}
      >
        <Suspense fallback={<CenteredProgress />}>
          <Plot
            data={dataChart}
            layout={layoutProps}
            config={configSubchart}
            style={{ height: '80%', width: "100%" }}
          />
        </Suspense>
      </Grid>
      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <Suspense fallback={<CenteredProgress />}>
                {description}
              </Suspense>
            </div>
          </Box>
        </Modal>
      </div>
    </Grid>
  );
}