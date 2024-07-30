import { crtPost, updatePost } from "../../actions/post.js";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import useStyles from "./style.js";
import { Typography, Button, TextField, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';


const Form = ({ currentId, setcurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispacth = useDispatch();
    const classes = useStyles();

    const [postData, setpostData] = useState({
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);
    useEffect(() => {
        if (post) setpostData(post);
    }, [post]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispacth(updatePost(currentId, postData));
        } else {
            console.log(user?.result._id);
            dispacth(crtPost({ ...postData, name: user?.result.name }));
        }
        clear();
    }
    const clear = () => {
        setcurrentId(null);
        setpostData({ title: '', message: '', tags: '', selectedFile: '' });
    };
    return <>
        <Paper className="{classes.paper}">
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Memory</Typography>
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title}
                    onChange={(e) => setpostData({ ...postData, title: e.target.value })}></TextField>
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message}
                    onChange={(e) => setpostData({ ...postData, message: e.target.value })}></TextField>
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags}
                    onChange={(e) => setpostData({ ...postData, tags: (e.target.value).split(",") })}></TextField>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    </>
};
export default Form;