import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "100px",
    height: "100px",
  },
}));

function Left() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" spacing={2} direction="column">
      <Grid container item justifyContent="center">
        <Avatar className={classes.avatar}>P</Avatar>
      </Grid>
      <Grid item direction="column">
        <Typography>Prabal Panda</Typography>
        <Typography>Followers 700</Typography>
        <Typography></Typography>
      </Grid>
      <Grid item direction="column">
        <Typography>Intrests</Typography>
        <Typography>something</Typography>
        <Typography>something</Typography>
        <Typography>something</Typography>
        <Typography>something</Typography>
        <Typography></Typography>
      </Grid>

      {/* recent post */}
      <Grid container item></Grid>
    </Grid>
  );
}

export default Left;
