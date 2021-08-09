import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },
  mid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pic: {
    width: "150px",
    height: "150px",
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.mid}>
      {/* top part */}
      <div className={classes.mid}>
        {/* avatar profile pic */}
        <div className={classes.mid}>
          <Avatar alt="Profilepic" src="/pic.jpeg" className={classes.pic} />
        </div>

        {/* bio */}
        <div className={classes.mid}></div>
      </div>

      {/* bottom part */}
      <div className={classes.mid}></div>
    </div>
  );
}

export default Profile;
