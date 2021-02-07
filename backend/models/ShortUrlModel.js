import mongoose from 'mongoose'

const shortUrlSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema)

export default ShortUrl