import { Grid } from "@material-ui/core";
import React from "react";
import AutoComplete from "./AutoComplete";
import ComboBox from "./ComboBox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },

  mar: {
    margin: theme.spacing(3),
  },
}));

function SearchProfiles() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ComboBox />
      <AutoComplete />
    </div>
  );
}

export default SearchProfiles;
