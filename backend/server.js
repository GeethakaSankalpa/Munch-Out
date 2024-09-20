import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config
const app = express()
const port = 4000

// middleware = will get the request from frontend to backend
app.use(express.json())
app.use(cors()) // access the backend from any frontend

// db connection
connectDB();


// API endpoints
// API endpoint for foodroute
app.use("/api/food",foodRouter)

/**
 * HTTP method that can request data from the server
 * Whenever we hit any URL in the browser, that will be executed as a get method */ 
app.get("/", (request, response) => {
    response.send("API Working")
})   

// run express server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
