const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds153552.mlab.com:53552/heroku_4v9lpxhh"
mongoose.connect(MONGODB_URI);

app.use(express.static("public"));

app.use( require("./routes"));

app.listen(PORT, ()=>{
  console.log(`App is running on port: ${PORT}`)
});