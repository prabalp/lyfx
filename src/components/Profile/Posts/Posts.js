import { Box } from "@material-ui/core";
import React from "react";
import Post from "./Post";

function Posts() {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {[...Array(10)].map((x, i) => {
        return <Post m="5px" />;
      })}
    </Box>
  );
}

export default Posts;
