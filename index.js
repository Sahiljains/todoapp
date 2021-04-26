const express = require('express');
const app  = express();
const path = require("path");
const port = 8001;

//database
const mongoose = require("./config/mongoose");

//importing the models
const Todo = require("./models/todoos");

//importing views
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// using the routes for various functions.
app.use('/add',require("./routes"));

app.listen(port,function(err){
    if(err){
        consol.log("error in server");
    }
    console.log("server is running on:",port);
})