const express = require('express');
const app = express();
const port = process.env.port || 4444;

//logging middleware
app.use(express.json());

app.use(function(req, res, next){
    console.log('ip address is:',req.ip);
    next();
});

app.get("/", (req, res) => {
    res.send("FoodForge API is running")
})

app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err)
    }
    logger.log('info',`Listening on port: ${port}`)
});

module.exports = app;
