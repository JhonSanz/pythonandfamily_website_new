"use client"
import { useState, useEffect, Suspense } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CenteredProgress from '@/utils/progress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// import Plotly from 'plotly.js-gl3d-dist-min';
import { layout_subchart, config_subchart } from '@/utils/chartProps';

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
  module
}) {
  const { data, layout, chartTile, DataManager } = chartProps;
  const [open, setOpen] = useState(false);
  const [initialData, setIinitialData] = useState([]);
  const [managedData, setmanagedData] = useState(undefined);
  const [count, setCount] = useState(8);
  const [inputValues, setInputValues] = useState({
    xVector: "",
    yVector: "",
    zVector: "",
  });
  const [lineProps, setLineProps] = useState({
    xDirectionVector: "1",
    yDirectionVector: "1",
    zDirectionVector: "0.5",
    xInitialPoint: "0.2",
    yInitialPoint: "1",
    zInitialPoint: "1",
  });

  const defaultParams = {
    "taylorPolynomial": { count, setCount },
    "linearIndependence": { inputValues, setInputValues },
    "linesR3": { lineProps, setLineProps }
  }

  useEffect(() => {
    setLineProps({
      xDirectionVector: "1",
      yDirectionVector: "1",
      zDirectionVector: "0.5",
      xInitialPoint: "0.2",
      yInitialPoint: "1",
      zInitialPoint: "1",
    })
    setInputValues({
      xVector: "",
      yVector: "",
      zVector: "",
    })
    setCount(8)
  }, [module])

  useEffect(() => {
    setIinitialData(data);
    setmanagedData(DataManager !== undefined ? data : undefined);
  }, [data, DataManager])

  useEffect(() => {
    Plotly.react(
      'plot_div',
      managedData || initialData,
      {
        ...layout,
        ...layout_subchart,
        title: {
          text: chartTile,
          ...layout_subchart.title
        }
      },
      config_subchart
    );
  }, [initialData, managedData, layout, chartTile])

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
                {
                  DataManager !== undefined &&
                  DataManager(setmanagedData, defaultParams)
                }
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
          <div id="plot_div" style={{ width: '100%', height: '80%', margin: "20px", marginTop: "0px" }}>
          </div>
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