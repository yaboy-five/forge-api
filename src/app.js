const express = require('express');
const morgan = require('morgan');
const app = express();

//logging middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/menu', menuRoute);
app.use('/status', statusRoute);
app.use('/cart', cartRoute);
app.use('/checkout', checkoutRoute);
app.use('/order', orderRoute);

app.get("/", (req, res) => {
    res.send("FoodForge API is running")
});

app.get("/menu", (req, res) => {
    res.send("FoodForge Menu")
});

app.get("/status", (req, res) => {
    res.send("FoodForge Order Status")
});

app.post("/cart", (req, res) => {
    res.send("FoodForge Cart")
});

app.post("/checkout", (req, res) => {
    res.send("FoodForge Checkout")
});

app.post("/orderManagement", (req, res) => {
    res.send("FoodForge OrderManagement")
});

//health check
app.get('/health', (req, res) => {
    res.status(200).json({status: 'FoodForge API is functioning'})
})

app.use(function(req, res, next){
    console.log('ip address is:',req.ip);
    next();
});

//error Handling
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
