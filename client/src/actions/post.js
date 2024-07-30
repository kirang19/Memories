import * as api from '../api/index.js';

export const getPosts = () => async (dispacth) => {
    try {
        const { data } = await api.fetchPost();

        dispacth({ type: "FETCH_ALL", payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}
export const crtPost = (post) => async (dispacth) => {
    try {
        const response = await api.createPost(post);
        console.log(response.data);
        dispacth({ type: 'CREATE', payload: response.data });
    }
    catch (error) {
        console.log("creating is not possible", error.message);
    }
}
export const updatePost = (id, post) => async (dispacth) => {
    try {
        const response = await api.updatePost(id, post);
        dispacth({ type: 'UPDATE', payload: response.data })
    } catch (error) {
        console.log("creating is not possible", error.message);
    }
}
export const deletePost = (id) => async (dispacth) => {
    try {
        await api.deletePost(id);
        dispacth({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}
export const likePost = (id) => async (dispacth) => {
    try {
        const { data } = await api.likePost(id);
        console.log(data);
        dispacth({ type: 'LIKE', payload: data });
    } catch (error) {
        console.log(error);
    }
}