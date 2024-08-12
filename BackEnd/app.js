//server
var express = require("express");
var server = express();

var cors = require('cors')
var movieRoutes=require('./routes/movie')

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use('/movie',movieRoutes)

//mongoose
var mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://pavly:u162vAcqRpdbQXxx@cluster0.2ykdr.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0`
).then(() => {
  console.log("connected to database");
}).catch((err) => {
  console.log(err);
});

server.listen(3003, () => {
  console.log("Server Connected");
});
