const mongoose = require("mongoose");

const peliculasSchema = new mongoose.Schema({
    titulo: String,
    duracion: Number,
    descripcion: String,
    genero: String
})

module.exports = mongoose.model("peliculas", peliculasSchema)