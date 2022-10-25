const express = require('express')
const mongoose = require('mongoose')
// const autores = require("./autoresSchema")
const autoresRouter = require('./routes/autoresClasicosRouter')
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://homerodbAtlas:esquilodb@cluster0.s7g4yqn.mongodb.net/netflixMEN?retryWrites=true&w=majority')
// , { 
  // useNewUrlParser: true, 
//   useUnifiedTopology: true, 
// }



app.use(express.static(__dirname + '/public'));


app.use('/autoresClasicos', autoresRouter)


const autoresSchema = {
  nombre: String,
  descripcion: String,
  genero: String,
};

const autor = mongoose.model('autores', autoresSchema);


app.get('/', (req, res) => {
  autor.find({}, function(err, autores) {
      res.render('index', {
          autoresLista:autores
      })
  })
})

  app.use(express.static('./views'));

app.use('/autoresClasicos', autoresRouter)

app.listen(5000)