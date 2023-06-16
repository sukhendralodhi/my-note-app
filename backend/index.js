const express = require("express");
const notes = require('./data/notes');
// require("dotenv").config();


const app = express();

app.get("/", (req, res) => {
    res.send('API Is Runnig.....');
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n.id === req.params.id);
    res.send(note);
});

const PORT = 5000;

app.listen(PORT, console.log(`Start at ${PORT}`));