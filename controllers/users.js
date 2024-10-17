const User = require('../models/users')

function createUser(req, res){
    console.log(req.body)
    // return res.send("I created new user")
    const instanceUser = new User(req.body)
    console.log(instanceUser)
    instanceUser.save()
    .then((savedUserDetails) =>{
        console.log("saved User details")
        res.send(savedUserDetails)
    }) 
    .catch((error) =>{
        console.log("error")
        res.send(error)
    })
}

function updateusers(req,res){
    console.log(req.params)
    // return response.send("your application had updated from users update api")
    User.findById(req.params.id)
    .then((updateUserDetails) => {
        console.log(updateUserDetails)
        if(!updateUserDetails) {
            return res.send(" User details not present")
        }
        updateUserDetails.set(req.body)
        updateUserDetails.save()
        .then((savedUpdateUserDetails) =>{
            return res.send(savedUpdateUserDetails)
        })
        .catch((error) =>{
            res.send(error)
        })
    })
    .catch((error)=>{
        res.send(error)
    })
}

function getuserslist(req,res){
    console.log(req.params)
    // return res.send("you application details fetched from getuserslist")
    User.find()
    .then((getUserDetails) => {
        res.send(getUserDetails)
    })
    .catch((error)=> {
        console.log(error)
    })

}

function getusers(req,res){
    console.log(req.params)
    // return res.send("you application had fetched from getusers")
    User.findById(req.params.id)
    // Movie.find({name: req.params.ownDefinedName})
    .then((getUserDetailsById) => {
        console.log("getUserDetailsById")
        console.log(getUserDetailsById)
        res.send(getUserDetailsById)
    })
    .catch((error) =>{
        console.log(error);
    })
}

function deleteusers(req,res){
    console.log(req.params)
    // return res.send("you application had fetched from delete")
    User.findByIdAndDelete(req.params.id)
    .then((userDetails) => {
        return res.send(userDetails)
    })
    .catch((error) =>{
        console.log(error)
    })
}

module.exports = {
    updateusers,
    createUser,
    getuserslist,
    getusers,
    deleteusers
}