import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchPost = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (currentId, post) => API.patch(`${'/posts'}/${currentId}`, post);
export const deletePost = (id) => API.delete(`${'/posts'}/${id}`);
export const likePost = (id) => API.patch(`${'/posts'}/${id}/likePost`);
export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);
