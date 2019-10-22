const express = require('express');
const app = express(); 
const mongoose = require("mongoose");
const {mongourl} = require('./config/keys');

const User = mongoose.model("user");

mongoose.connect(mongourl,{useNewUrlParser:true,  useUnifiedTopology: true});

module.exports = (app)=>{
//get routes
 app.post('/api/data',(req,res)=>{
    User.find({}).then(data=>{
        // console.log(data)
        // console.log("lala")
        res.send(data)
       // res.render('home',{email:data})
        
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})   
//post routes
app.post('/api/sent',(req,res)=>{
    const Item = new User({
        
        email:req.body.email,
        password:req.body.password,
        name:req.body.name
    });
    // console.log(req.body.item)
    Item.save().then(data=>{
        // console.log("saved")
        res.send(data)
    }).catch(err=>{
        throw err;
    })
  
})

//delete routes

app.delete('/remove/:id',(req,res)=>{

    User.findOneAndRemove({_id:req.params.id}).then(data=>{
        // console.log("deleted")
        res.send(data)
    })
   
})



}

