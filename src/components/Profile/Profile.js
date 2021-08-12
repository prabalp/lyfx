import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import Info from "./Info";
import Posts from "./Posts/Posts";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },
  midP: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  mid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  pic: {
    width: "200px",
    height: "200px",
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.midP}>
      {/* top part */}
      <div className={classes.mid}>
        {/* avatar profile pic */}
        <div className={classes.mid}>
          <Avatar alt="Profilepic" src="/pic.jpeg" className={classes.pic} />
        </div>

        {/* bio */}
        <div className={classes.mid}>
          <Info />
        </div>
      </div>

      {/* bottom part */}
      <div className={classes.mid}>
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
