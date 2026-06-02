const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// req - request var, res - response var
app.get('/', (req, res) => {
    console.log('Get is sent')
    //res.send("Hi")
    //res.sendStatus(500) 
    //res.status(500)
    //res.status(500).send("Hi")
    //res.status(500).json({messgae: "Error"})
    //res.download('server.js')
    res.render("index", {text: "Introduction to NodeJS"})
}) 

app.listen(3000)
