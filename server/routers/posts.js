import express from 'express'
import { createPost, getPosts } from '../controller/posts'

const router = express.Router()

router.post('/createPost', createPost)
router.get('/getPosts', getPosts)

export default router