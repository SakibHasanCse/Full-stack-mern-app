import express from 'express'
import { createPost, getPosts } from '../controller/posts'

const router = express.Router()

router.post('/posts', createPost)
router.get('/posts', getPosts)

export default router