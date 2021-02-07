import express from 'express'
import { getOriginalUrlFromShortUrl } from '../controllers/originalUrlController.js'

const router = express.Router()

router.get('/:shortUrl', getOriginalUrlFromShortUrl)

export default router
