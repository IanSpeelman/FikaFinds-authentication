import express from "express"
import userRoutes from './routes/userRoutes'
import bodyParser from "body-parser";
import cors from 'cors'

const port = 3001;

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/authentication', userRoutes)

app.listen(port, () => console.log(`Server is listening on port ${port}`))

