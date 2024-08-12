var express = require("express");
var router = express.Router();
var Movie = require('../models/movie');

//post
router.post("/addmovie", (req, res) => {
  var data = req.body;
  var newMovie = new Movie({
    "adult": data.adult,
    "backdrop_path": data.backdrop_path,
    "genre_ids": data.genre_ids,
    "id": data.id,
    "original_language": data.original_language,
    "original_title": data.original_title,
    "overview": data.overview,
    "popularity": data.popularity,
    "poster_path": data.poster_path,
    "release_date": data.release_date,
    "title": data.title,
    "video": data.video,
    "vote_average": data.vote_average,
    "vote_count": data.vote_count,
  });
  try {
    newMovie.save().then(() => {
      console.log("Movie Added Successfully")
    }).catch(() => {
      console.log("Somthing went wrong");
    });
  } catch (err) {
    console.log(err);
  }

});


//get
router.get("/all", (req, res) => {
  try {
    Movie.find().then((movies)=>{
      if(movies){
        res.json({moviesData: movies});
      }else{
        res.json({msg:"No Data!"});
      }
    })
  } catch (err) {
    console.log(err);
  }

});

router.get("/getById/:id", (req, res) => {
  var movieId = +req.params.id;
  try {
    Movie.findOne({id: movieId }).then((movie)=>{
      if(movie){
        console.log(movie);
        res.json(movie);
      }else{
        res.json({msg:"Not Found!"});
      }
    })
  } catch (err) {
    console.log(err);
  }

});

module.exports = router;
