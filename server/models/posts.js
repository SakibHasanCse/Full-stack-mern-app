import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    creator: {
        type: String
    },
    message: {
        type: String
    }
    ,
    selectedFile: {
        type: String
    },
    tags: [String],
    likeCounts: {

        type: Number,
        default: 0,
    }
    
    

}, { timestamps: true });

const posts = mongoose.model('Posts', postSchema)

export default posts