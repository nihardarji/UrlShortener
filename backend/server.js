import express from 'express'
import connectDB from './config/db.js'
import shortUrlRoutes from './routes/shortUrlRoutes.js'
import getOriginalUrlRoutes from './routes/originalUrlRoutes.js'

connectDB()

const app = express()

app.use(express.json())

app.use('/api/shorturl', shortUrlRoutes)
app.use('/', getOriginalUrlRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))