const express = require('express');
const app = express();
const morgan = require('morgan');

//logging middleware
app.use(express.json());
app.use(morgan('dev'));

app.use(function(req, res, next){
    console.log('ip address is:',req.ip);
    next();
});

app.get("/", (req, res) => {
    //root route
    res.send("FoodForge API is running")
});

app.get("/menu", (req, res) => {
    res.send("FoodForge Menu")
});

app.get("/orders", (req, res) => {
    res.send("FoodForge Orders")
});

app.post("/cart", (req, res) => {
    res.send("FoodForge Cart")
});

app.post("/checkout", (req, res) => {
    res.send("FoodForge Checkout")
});

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
