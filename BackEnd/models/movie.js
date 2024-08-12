var mongoose = require('mongoose');
var movieSchema = mongoose.Schema({
    "adult": Boolean,
    "backdrop_path": String,
    "genre_ids": [],
    "id": { type: Number, required: true },
    "original_language": String,
    "original_title": String,
    "overview": String,
    "popularity": Number,
    "poster_path": String,
    "release_date": String,
    "title": String,
    "video": Boolean,
    "vote_average": Number,
    "vote_count": Number
});
module.exports=mongoose.model('Movie',movieSchema);