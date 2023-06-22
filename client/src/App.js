import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "./components/Form/form";
import Posts from "./components/Posts/posts";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} align="center" variant="h2">
          Memorious
        </Typography>
        <img className={classes.image} src="/logo.png" alt="logo" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs="12" sm="7">
              <Posts />
            </Grid>
            <Grid item xs="12" sm="4">
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
