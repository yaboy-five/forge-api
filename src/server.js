const app = require('./app');
const express = require("express");
const port = process.env.port || 5000;

app.use(express.json());

app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err)
    }
    console.log(`Listening on port: ${port}`)
});