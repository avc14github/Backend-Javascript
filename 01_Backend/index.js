require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/accountname', (req, res) => {
  res.send("Aayush Jha")
})

app.get('/books', (req, res) => {
  res.json({
    "bookname": "Python",
    "author": "Pythonworld.org"
  })
})

app.get('/heading', (req, res) => {
  res.send("<h1>Hello from Heading</h1>")
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})