function createBetting(req, res) {
    console.log("req.body------")
    console.log(req.body)
    return res.send("Your had submitted from create Betting api")
}

function updateBetting(req, res) {
    console.log(req.params)
    return  res.send("You application had updated from Betting update api")
}

function getBettingsList(req, res) {
    return res.send("You application details fetched from getBettingList ")
}

function getBetting(req, res) {
    console.log(req.params)
    return res.send("You application had fetched from getBetting")
}

function deleteBetting(req, res) {
    console.log(req.params)
    return res.send("You application had fetched from delete")
}

module.exports = {
    createBetting,
    getBettingsList,
    getBetting,
    updateBetting,
    deleteBetting
}
