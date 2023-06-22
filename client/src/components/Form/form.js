import React, { useEffect, useState } from "react";
import useStyles from "./styles.js";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPosts, updatePosts } from "../../actions/posts.js";
import { useSelector } from "react-redux";

const Form = ({ setCurrentId, currentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id == currentId) : null
  );
  const [postsData, setPostsData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  useEffect(() => {
    if (post) {
      setPostsData(post);
    }
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePosts(currentId, postsData));
    } else {
      dispatch(createPosts(postsData));
    }
    clear();
  };
  const clear = () => {
    setPostsData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(null);
  };
  return (
    <Paper className={classes.paper}>
      <form
        noValidate
        autoComplete="off"
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
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
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
