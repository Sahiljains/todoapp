const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({ 
    task:{
        type:String,
        required:true
    },
    status:{ 
        type:Boolean,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});



const Todo = mongoose.model('todo',todoSchema);
module.exports = Todo;