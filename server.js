// common js
// const express = require("express")
// require('dotenv').config()

// module js
import express from "express"
import "dotenv/config"
import cors from "cors"

const app = express()
const port = process.env.PORT || 5000
app.use(cors());

// app.get("/", (req, res) => {
//     res.send("<h1>Your server is ready</h1>")
// })

// 5 different jockes will serve
app.get("/api/jokes", (req, res) => {
    const jockes = [
        {
            "id": 1,
            "title": "Atom Trust Issues",
            "content": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "title": "Knock-Knock",
            "content": "Knock, knock. Who's there? Cow says. Cow says who? No silly, cow says mooo!"
        },
        {
            "id": 3,
            "title": "Egg Secrets",
            "content": "Why don't eggs tell each other secrets? Because they might crack up!"
        },
        {
            "id": 4,
            "title": "Riddle Me This",
            "content": "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? An echo."
        },
        {
            "id": 5,
            "title": "Eyebrow Surprise",
            "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        }
    ]

    res.json(jockes)
})

app.listen(port, () => {
    console.log(`Your server is running on ${port}`);
})