

function updatewineers(req,res){
    console.log(req.params)
    return res.send("i am updated winner status api")
}

function getwineerslist(req,res){
    return res.send("you application details fetched from getwineerlist")
}

function getwineers(req,res){
    console.log(req.params)
    return res.send("your application had fetched from getwinner")

}

function deletewineers(req,res) {
    console.log(req.params)
    return res.send("you application had fetched from delete")
}

function createwineers(req,res){
    console.log("req.body------")
    console.log(req.body)
    return res.send("i am create winner")
}

module.exports ={
    getwineerslist,
    getwineers,
    updatewineers,
    deletewineers,
    createwineers
}
