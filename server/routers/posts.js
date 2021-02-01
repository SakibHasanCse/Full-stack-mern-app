import express from 'express'
import { createPost, getPosts, updatePost, deletePost } from '../controller/posts'

const router = express.Router()

router.post('/posts', createPost)
router.get('/posts', getPosts)
router.patch('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)

export default router