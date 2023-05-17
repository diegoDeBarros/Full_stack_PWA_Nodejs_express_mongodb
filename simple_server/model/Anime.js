const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Anime = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  year: {
    type: Number
  },
  
},{
    collection: 'anime'
});

module.exports = mongoose.model('Anime', Anime);
