import ShortUrl from "../models/ShortUrlModel.js"
import { nanoid } from 'nanoid'
import config from 'config'
import isUrl from 'is-valid-http-url'
const size = config.get('size')

const getShortUrl = async (req, res) => {
    const { url } = req.body
    try {
        if (isUrl(url)) {
            const shortUrlFromDB = await ShortUrl.findOne({ originalUrl: url })
            const host = req.get('host')

            if (shortUrlFromDB) {
                shortUrlFromDB.shortUrl = `${req.protocol}://${host}/${shortUrlFromDB.shortUrl}`
                res.send(shortUrlFromDB)
            } else {
                const shortId = nanoid(size)
                const shortUrlObj = new ShortUrl({
                    originalUrl: url,
                    shortUrl: shortId
                })
                await shortUrlObj.save()
                shortUrlObj.shortUrl = `${req.protocol}://${host}/${shortUrlObj.shortUrl}`
                res.send(shortUrlObj)
            }
        } else {
            throw new Error('Not a Url')
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export {
    getShortUrl
}