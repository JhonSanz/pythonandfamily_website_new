import Grid from '@mui/material/Grid';

export default function ModalChart({
 chart
}) {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        item
        xs={12} sm={12} md={8} lg={7}
        textAlign={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        {chart}
      </Grid>
    </Grid>
  );
}