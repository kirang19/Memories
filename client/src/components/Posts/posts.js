import React from "react";
import Post from "./Post/post";
import useStyles from "./style.js";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core';
const Posts = ({ setcurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? (
      <div>Add a Post</div>
    ) : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setcurrentId={setcurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};


export default Posts;
