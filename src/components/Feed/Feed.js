import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import React from "react";
import Posts from "./Posts/Posts";
import Right from "./Right/Right";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px",
    // marginRight: "10px",
  },
}));

function Feed() {
  const classes = useStyles();
  return (
    <div className="feed">
      <Grid container justify="center" className={classes.root} spacing={2}>
        <Grid item justify="center" xs={3}>
          <Posts />
        </Grid>
        <Grid item justify="center" xs={6}>
          <Posts />
        </Grid>
        <Grid item justify="center" xs={3}>
          <Right />
        </Grid>
      </Grid>
    </div>
  );
}

export default Feed;
