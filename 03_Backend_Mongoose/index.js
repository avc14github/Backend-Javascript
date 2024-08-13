import express from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("This is server and its using mongoose")
})

app.get("/info", (req, res) => {
    res.json([
        {
            "book" : "history",
            "year" : 1900,
            "status" : "available",
        }
    ])
})

app.listen( port,() => {
    console.log(`Server is running on Port : ${port}`)
})