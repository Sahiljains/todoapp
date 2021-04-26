// require the library
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/todoapp');

//acquire the connection(to check if it is successfull)
const db = mongoose.connection;

//error
db.on("error",console.error.bind(console,"connection error"));

//up and running  then print the message
db.once('open',function(){
    console.log("successfully running the database");

})