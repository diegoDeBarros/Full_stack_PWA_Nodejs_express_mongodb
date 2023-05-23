var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');
const Anime = require('./model/Anime');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/mean', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});


const animeRoute = require('./routes/anime.route');
const animeRoutes = require('./routes/anime.route');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/add', (req, res) => {
  const animeData = req.body;
  const novoAnime = new Anime(animeData);

  novoAnime.save((err, animeSalvo) => {
    if (err) {
      console.error('Erro ao salvar anime:', err);
      res.status(500).send('Erro ao salvar anime');
    } else {
      console.log('Anime adicionado com sucesso:', animeSalvo);
      res.status(200).json({ message: 'Anime adicionado com sucesso' });
    }
  });
});
//app.use('/anime', animeRoute);

app.get('/', function(req, res) {
  res.send('Hello, World!');
});


//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
/*

*/
// Configuração do middleware body-parser


app.listen(3000,function(){
    console.log('Listening on port 3000!');
});

const novoAnime1 = new Anime({
  title: 'Tokyo Revengers',
  description: 'Com uma linha temporal alterada...',
  year: 2023
});