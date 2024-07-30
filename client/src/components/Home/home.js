import React, { useState, useEffect } from 'react';
import useStyles from "./style.js";
import Form from '../Forms/form';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from '../Posts/posts.js';
import { getPosts } from '../../actions/post.js';



const Home = () => {
    const [currentId, setcurrentId] = useState(null);
    const dispacth = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        dispacth(getPosts());
    }, [dispacth]);
    return (
        <Grow in>
            <Container >
                <Grid container className={classes.contfl} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setcurrentId={setcurrentId}></Posts>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setcurrentId={setcurrentId}></Form>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;
