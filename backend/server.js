// const express = require("express")
import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("your server is running")
})

app.get("/api/notes", (req, res) => {
    res.send("you have got 100 notes")
})

app.listen(5001, (req, res) => {
    console.log("Port running at 5001")
})