const Todo = require("../config/models/todoos");

var todo;


module.exports.add = function(req,res){

    console.log(req.body);
    
    if(req.body.description=="" || req.body.dropdown=="" || req.body.date =="")
    {
        console.log("entered");
        return res.redirect("/");
    }

    Todo.create({
        task:req.body.description,
        status:true,
        category:req.body.dropdown,
        date:req.body.date
    },function(err,newtodo){
        if(err){
            throw err;
        }
        console.log("*******",newtodo); 
        return res.render("home",{title:"",Todo_database:todo,success:"Added successfully"});
    });

}

module.exports.delete = function(req,res){
    
    let c = req.query.checkbox;
    
    if(c==undefined){
        return res.render("home",{title:"", Todo_database:todo , success:"select to delete"});
    }

    Todo.findOne({_id:c},function(err){
        if(err){
            return;
        }
    });

    if(typeof c === "Object"){
        
        console.log("yes");
        for(let i=0;i < c.length;i++){
            Todo.findByIdAndDelete(c[i],function(err){
                if(err){
                    return;
                }
            });
        }
    }
}

module.exports.ok = function(req,res){
    res.redirct("/add");
}