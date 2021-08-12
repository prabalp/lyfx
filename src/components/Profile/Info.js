import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "500px",
    // height: "150px",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
}));

function Info() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div>
        <div>Full Name</div>
        <div>Place</div>
        <div>Bits birth date</div>
        <div>Followers 69</div>
        <div>Important Tags</div>
      </div>
    </div>
  );
}

export default Info;
