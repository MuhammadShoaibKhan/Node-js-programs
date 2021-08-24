const express = require('express');
const cors = require('cors')
const bd = require('body-parser')

const app = express();
const mongoose = require('mongoose');

const port = 5000;

let authModel = require('./authschema')

app.use(cors());
app.use(bd.urlencoded({
    extended: false
}))
app.use(bd.json());

mongoose.connect('mongodb+srv://admin:12345abc123@cluster0.q6kgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

})

mongoose.connection.on("connected", () => {
    console.log("Database Connected")
})

mongoose.connection.on("error", () => {
    console.log("Database Not Connected")
})

app.get('/', (req, res) => {
    res.send('Welcome to Node.js');
})

app.post('/signup', (req, res) => {
    //  res.send("Signup API")
    let userCreate = new authModel({ email: req.body.email, password: req.body.password })
    userCreate.save()
        .then((response) => {
            //   console.log(response, 'response success')
            res.status(200).send({ result: response, message: "Data Stored Successfully" })
        })

    .catch((err) => {
        //  console.log(err, 'err');
        res.status(400).send({ result: err.message, message: "Data not stored successfully" })
    })

})

app.listen(port, () => {
    console.log("Server is Running! ");
})