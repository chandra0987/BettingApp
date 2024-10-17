const express = require('express')
const mongoose = require('mongoose')

const bettingFile = require('./controllers/bettings')
const usersfile = require('./controllers/users')
const wineerfile=require('./controllers/winners')
const app = express()
const port = 3000
app.use(express.json()) 

mongoose.connect('mongodb://localhost:27017/betting-app', {useNewUrlParser : true})  // connection to db
  .then((connectedResponse) => {
    console.log("connected to mongodb betting-app db -----------> ")           // promise
  })
  .catch( err => {
    console.log(err)
    mongoose.disconnect()
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.post('/bettings', bettingFile.createBetting)

app.get('/bettings', bettingFile.getBettingsList)

app.get('/bettings/:id', bettingFile.getBetting)

app.put('/bettings/:id', bettingFile.updateBetting)

app.delete('/bettings/:id', bettingFile.deleteBetting)

app.post('/users', usersfile.createUser)
app.get('/users', usersfile.getuserslist)
app.get('/users/:id', usersfile.getusers)
app.delete('/users/:id', usersfile.deleteusers)
app.put('/users/:id', usersfile.updateusers)

app.post('/wineers', wineerfile.createwineers)
app.get('/wineers', wineerfile.getwineerslist)
app.get('/wineers/:id', wineerfile.getwineers)
app.delete('/wineers/:id', wineerfile.deletewineers)
app.put('/wineers/:id', wineerfile.updatewineers)


app.get('/contact', (req, res) => { //api
  res.send('Hello Contact Page!')
})

//GitHub signup

//imports exprots for remaining
// Postman
//    Post -> req.body
//    Update -> req.params
//    Get    -> 
//    Get (ById) -> req.params
//    delete -> req.params

// mongo compass install

