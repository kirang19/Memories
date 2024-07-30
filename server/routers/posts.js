import express from "express";
import { getposts, createPost, upadatePost, deletePost, likePost } from "../controllers/posts.js";
const app = express.Router();
import auth from "../middleware/auth.js";

app.get("/", getposts);
app.post("/", auth, createPost);
app.patch("/:id", auth, upadatePost);
app.delete("/:id", auth, deletePost);
app.patch("/:id/likePost", auth, likePost);

export default app;