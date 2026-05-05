// const express = require("express")
import express from "express"

const app = express()

app.get("/api/notes", (req, res) => {
    res.send("you got 5 notes")
})

app.listen(5001, (req, res) => {
    console.log("Port running at 5001")
})