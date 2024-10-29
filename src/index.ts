import express from "express"
import userRoutes from './routes/userRoutes'
import bodyParser from "body-parser";

const port = 3001;

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/authentication', userRoutes)

app.listen(port, () => console.log(`Server is listening on port ${port}`))

