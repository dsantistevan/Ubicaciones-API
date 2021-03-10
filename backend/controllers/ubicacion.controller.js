const Ubicacion = require("../collections/ubicacion.model");

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
    
    Ubicacion.find({}, (err, docs) => {
        res.send(docs)
    })
};

exports.findOne = (req,res) => {
    
    const id = req.params.id;
    console.log(id)
    Ubicacion.findById({_id: ""+id},{latitude: 1, longitude: 1, user:1}, (err, docs) => {
        res.send(docs)
    })
}