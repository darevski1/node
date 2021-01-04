var express = require('express');
var router = express.Router();
const movies = [
  {
    movieName: "Batman",
    year: 1900,
  },
  {
    movieName: "Joker",
    year: 1995,
  },
  {
    movieName: "Inception",
    year: 1997,
  },
  {
    movieName: "Looper",
    year: 2020,
  }
]
/* GET home page. */
router

  .get('/movies', (req, res) => {
    res.send({
      message: "List of all movies",
      items: movies
    })
  })

  
  .post('/mpvies', (req, res) => {
    movies.push(req.body)
    res.send({
      message: "We just update the movie list",
      items: movies,
    })
  })


module.exports = router;
