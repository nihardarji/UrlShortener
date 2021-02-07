import express from 'express'
import { getShortUrl } from '../controllers/shortUrlController.js'

const router = express.Router()

router.route('/').post(getShortUrl)

export default router