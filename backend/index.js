const express = require("express");
const notes = require('./data/notes');
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
// require("dotenv").config();



const cors = require('cors');
const app = express();
connectDB();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get("/", (req, res) => {
    res.send('API Is Runnig.....');
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.use('/api/users', userRoutes)

const PORT = 5000;

app.listen(PORT, console.log(`Start at ${PORT}`));