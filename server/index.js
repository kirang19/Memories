import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postroute from "./routers/posts.js";
import authroute from "./routers/auth.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/auth",authroute);
app.use("/posts",postroute);


const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/memories")
    .then(app.listen(PORT, () => {
        console.log(`listing to the port ${PORT}`)
    }))
    .catch((error) => console.log(error.message));