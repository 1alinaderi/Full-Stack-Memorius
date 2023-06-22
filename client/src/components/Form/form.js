import React, { useState } from "react";
import useStyles from "./styles.js";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPosts } from "../../actions/posts.js";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postsData, setPostsData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPosts(postsData));
  };
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        noValidate
        autoComplete="off"
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postsData.creator}
          onChange={(e) => {
            setPostsData({ ...postsData, creator: e.target.value });
          }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postsData.title}
          onChange={(e) => {
            setPostsData({ ...postsData, title: e.target.value });
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postsData.message}
          onChange={(e) => {
            setPostsData({ ...postsData, message: e.target.value });
          }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postsData.tags}
          onChange={(e) => {
            setPostsData({ ...postsData, tags: e.target.value });
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) => {
              setPostsData({ ...postsData, selectedFile: base64.base64 });
            }}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
