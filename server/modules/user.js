import mongoose from "mongoose";

const User = mongoose.model('User', mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
}));

export default User;