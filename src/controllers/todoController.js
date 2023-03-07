

exports.get = (req, res) =>{
    res.send("OK GET");
    
    console.log("Get")
}

exports.getAll = (req, res) =>{
    res.send("OK GET ALL");
    console.log("Get all")
}

exports.add = (req, res) =>{
    res.send("OK ADD");
    console.log("Add")
}

exports.update = (req, res) =>{
    res.send("OK UPDATE");
    console.log("Update")
}

exports.delete = (req, res) =>{
    res.send("OK DEL");
    console.log("Delete")
}