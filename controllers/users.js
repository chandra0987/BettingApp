function updateusers(request,response){
    console.log(req.params)
    return response.send("your application had updated from users update api")
}
module.exports = {
    updateusers
}