import Post from '../models/posts'
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

        await Post.find((err, post) => {
            if (err) {
                return res.status(400).json({
                    message: err.message,
                    success: false
                })

            } else {
                return res.status(200).json({
                    message: 'All Posts',
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