import Post from '../models/posts'
import mongoose from 'mongoose';
export const createPost = async (req, res, next) => {

    try {
        const newpost = new Post(req.body)
        await newpost.save((err, post) => {
            if (err) {
                return res.status(400).json({
                    message: err.message,
                    success: false
                })

            } else {
                return res.status(201).json({
                    message: 'Post Created Successfull',
                    success: true,
                    post: post
                })
            }

        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const getPosts = async (req, res, next) => {

    try {

        await Post.find()
            .then((post) => {
                post = post.reverse()
                return res.status(200).json({
                    message: 'All Posts',
                    success: true,
                    post: post
                })


            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const updatePost = async (req, res, next) => {
    try {
        const _id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ message: 'Id is not a valid', success: false })
        const body = req.body
        await Post.findById(_id).then((post) => {
            console.log(post)
            if (post) {
                Post.findByIdAndUpdate(_id, { ...body, _id }, (err, data) => {
                    console.log(err)
                    if (err || !data) {
                        return res.status(404).json({
                            message: 'Post Not Updated ,Try agin',
                            success: false
                        })
                    } else {
                        console.log(data)
                        return res.status(200).json({
                            data
                        })

                    }
                })


            } else {
                return res.status(404).json({
                    message: 'Post Not Found',
                    success: false
                })
            }

        }).catch(err => {
            console.log(err)
        })
    } catch (error) {
        console.log(error)


    }




}

export const deletePost = async (req, res, next) => {
    try {
        const _id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ message: 'Id is not a valid', success: false })
        await Post.findById(_id).then((post) => {
            console.log(post)
            if (post) {
                Post.findByIdAndRemove(_id, (err) => {
                    console.log(err)
                    if (err) {
                        return res.status(404).json({
                            message: 'Post Not Deleted ,Try agin',
                            success: false
                        })
                    } else {

                        return res.status(200).json({ message: 'Post Deleted Success', success: true })

                    }
                })


            } else {
                return res.status(404).json({
                    message: 'Post Not Found',
                    success: false
                })
            }

        }).catch(err => {
            console.log(err)
        })
    } catch (error) {
        console.log(error)


    }

}