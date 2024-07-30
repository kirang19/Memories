import mongoose from "mongoose";
import PostMessage from "../modules/getposts.js";
import multer from "multer";
const upload = multer({ dest: './images/' });

export const getposts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    }
    catch {
        res.status(404).send("message:");
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
    try {
        console.log(newPostMessage.selectedFile);
        await newPostMessage.save();
        res.status(200).json(newPostMessage);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}
export const upadatePost = async (req, res) => {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("no post by that id");
    try {
        const post = await PostMessage.findByIdAndUpdate(_id, req.body, { new: true });
        console.log(post);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}
export const deletePost = async (req, res) => {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("no post by that id");
    try {
        await PostMessage.findByIdAndDelete(_id);
        res.json({ message: "the post is deleted" });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
export const likePost = async (req, res) => {
    const id = req.params.id;
    if (!req.userId) res.status(404).json({ message: "user is not authenticated" });
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("no post by that id");
    try {
        const p = await PostMessage.findById(id);
        const index = p.likes.findIndex((id) => id === String(req.userId));
        if (index == -1) {
            p.likes.push(req.userId);
        } else {
            p.likes = p.likes.filter((id) => id !== String(req.userId));
        }
        const updatedPost = await PostMessage.findByIdAndUpdate(id, p, { new: true });
        console.log(updatedPost);
        res.status(200).json(updatedPost);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
}