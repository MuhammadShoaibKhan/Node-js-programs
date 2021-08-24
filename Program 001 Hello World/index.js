const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Muhammad Shoaib Khan');
})

app.listen(port, () => {
    console.log("Server is Running! ");
})