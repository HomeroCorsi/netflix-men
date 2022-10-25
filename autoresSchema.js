const mongoose = require("mongoose");

const autoresSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    genero: String
})

module.exports = mongoose.model("autores", autoresSchema)