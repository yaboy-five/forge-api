const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(logger)

// req - request var, res - response var
app.get('/', (req, res) => {
    console.log('Get Request sent')
    //res.send("Hi")
    //res.sendStatus(500) 
    //res.status(500)
    //res.status(500).send("Hi")
    //res.status(500).json({messgae: "Error"})
    //res.download('server.js')
    res.render("index", {text: "Introduction to NodeJS"})
}) 

const userRouter = require("./routes/users")
app.use("/users", userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
