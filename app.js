import express from 'express'
import { router as taskRoute } from './routes/task.route.js'
import { errHandler } from './middlewares/error.handler.js'


const app = express()
const port = 3000


app.use(express.json())

app.use(errHandler)

app.use('/tasks', taskRoute)

app.listen(port, () => {
	console.log(`Task App Listen on Port 3000`)
})