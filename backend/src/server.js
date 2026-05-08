// const express = require("express")
import express from "express"
import notesRoutes from "./routes/notesRoutes.js"

const app = express()

app.use("/api/notes", notesRoutes)




// moved these to appropriate places 
// app.get("/", (req, res) => {
//     res.send("your server is running")
// })

// app.get("/api/notes", (req, res) => {
//     res.send("you have got 100 notes")
// })

// app.post("/api/notes", (req, res) => {
//     res.status(201).json({ message: "note created successfully" })
// })

// app.put("/api/notes/:id", (req, res) => {
//     res.status(200).json({ message: "note updated successfully" })
// })

// app.delete("/api/notes/:id", (req, res) => {
//     res.status(200).json({ message: "note deleted successfully" })
// })

app.listen(5001, () => {
    console.log("Port running at 5001")
})