const express = require('express')
const bettingFile = require('./controllers/bettings')

const app = express()
const port = 3000
app.use(express.json()) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.post('/bettings', bettingFile.createBetting)

app.get('/bettings', bettingFile.getBettingsList)

app.get('/bettings/:id', bettingFile.getBetting)

app.put('/bettings/:id', bettingFile.updateBetting)

app.delete('/bettings/:id', bettingFile.deleteBetting)


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


