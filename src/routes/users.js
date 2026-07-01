const first = require('ee-first')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    console.log(req.query.name)
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    }
    else {
        console.log("Error")
        res.render(`users/new`, {firstName: req.body.firstName})
    }
    //console.log(req.body.firstName)
    //res.send('Creating User')
})

router.route("/:userid")
 .get((req, res) => {
  console.log(req.user)
  res.send(`Get User with ID ${req.params.userid}`)
 })
 .put((req, res) => {
  res.send(`Update User with ID ${req.params.userid}`)
 })
 .delete((req, res) => {
  res.send(`Delete User with ID ${req.params.userid}`)
 })

const users = [{name:"Default0"},{name:"Bojack"},{name:"Sarah"},{name:"Todd"}]
router.param("userid", (req, res, next, userid) => {
    console.log(userid)
    req.user = users[userid]
    next()
})

export default router;