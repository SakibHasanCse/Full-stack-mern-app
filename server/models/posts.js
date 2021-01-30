import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    creator: {
        type: String
    },
    messages: {
        type: String
    }
    ,
    selectorFIle: {
        type: String
    },
    tags: [String],
    likeCounts: {

        type: Number,
        default: 0,
    }
    ,
    messages: {
        type: String
    }

}, { timestamps: true });

const posts = mongoose.model('Posts', postSchema)

export default posts