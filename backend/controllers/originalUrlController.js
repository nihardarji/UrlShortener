import ShortUrl from "../models/ShortUrlModel.js"

const getOriginalUrlFromShortUrl = async (req, res) => {
    try {
        const urlObjFromDB = await ShortUrl.findOne({ shortUrl: req.params.shortUrl})
        if(urlObjFromDB){
            res.redirect(urlObjFromDB.originalUrl)
        } else {
            res.status(404).send('URL not found')
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

export {
    getOriginalUrlFromShortUrl
}