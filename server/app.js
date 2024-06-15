import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { errorHandler, notFound } from './middlewares/errorMiddleare.js'

const port = process.env.PORT || 7000
const app = express()
dotenv.config()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))



app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`server running om port ${port}`));