import * as api from '../api/index.js';


export const signin = (formData, router) => async (dispacth) => {
    try {
        const { data } = await api.signIn(formData);
        console.log(data);
        dispacth({ type: 'AUTH', data });
        router('/');
    } catch (error) {
        console.log(error);
    }
}
export const signup = (formData, router) => async (dispacth) => {
    try {
        const { data } = await api.signUp(formData);
        console.log(data);
        dispacth({ type: 'AUTH', data });
        router('/');
    } catch (error) {
        console.log(error);
    }
}