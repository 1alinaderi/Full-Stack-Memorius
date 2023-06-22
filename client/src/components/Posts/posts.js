import React from "react";
import Post from "./Post/post";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const { posts } = useSelector((state) => state);
  const classes = useStyles();

  return posts.length === 0 ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts?.map((post) => {
        return (
          <Grid item key={post._id} xs={12} sm={6}>
            <Post setCurrentId={setCurrentId} post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
