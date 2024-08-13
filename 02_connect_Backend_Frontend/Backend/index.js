import express from "express";
import 'dotenv/config';

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('server is running')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "This is Joke 1",
            content: "Joke 1"
        },
        {
            id: 2,
            title: "This is Joke 2",
            content: "Joke 2"
        },
        {
            id: 3,
            title: "This is Joke 3",
            content: "Joke 3"
        },
        {
            id: 4,
            title: "Jokes is this",
            content: "No jokes now"
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})