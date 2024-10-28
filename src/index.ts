import express from "express"
import userRoutes from './routes/userRoutes'

const port = 3001;

const app = express()


app.use('/authentication', userRoutes)

app.listen(port, () => console.log(`Server is listening on port ${port}`))

