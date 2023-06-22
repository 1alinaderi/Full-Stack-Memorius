import React from "react";
import Post from "./Post/post";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state);
  const classes = useStyles();
  console.log(posts)

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {/* {posts.map((post, i) => (
        <Grid item key={i} xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))} */}
    </Grid>
  );
};

export default Posts;
