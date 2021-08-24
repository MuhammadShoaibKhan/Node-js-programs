const express = require("express");
const cors = require("cors");
const bd = require("body-parser");

const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const mainRoute = require('./route/mainRoute')

const port = 5000;


app.use(cors());
app.use(
    bd.urlencoded({
        extended: false,
    })
);
app.use(bd.json());
app.use(mainRoute)

mongoose.connect(
    "mongodb+srv://admin:12345abc123@cluster0.q6kgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.connection.on("connected", () => {
    console.log("Database Connected");
});

mongoose.connection.on("error", () => {
    console.log("Database Not Connected");
});

app.get("/", (req, res) => {
    res.send("Welcome to Node.js");
});





app.listen(port, () => {
    console.log("Server is Running! ");
});