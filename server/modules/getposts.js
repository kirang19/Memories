import mongoose from "mongoose";


const PostMessage = mongoose.model('PostMessage', mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedfile: {
        type: String
    },
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}));

export default PostMessage;