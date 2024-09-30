require("./model/index")
var express = require('express');
var app = express();
app.set('view engine', 'ejs')



app.get('/',(req ,res)=>{
    res.render("home.ejs")
})

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

app.get("/about",(req,res)=>{
    res.render("about.ejs")
})



app.listen(3000, ()=>{
    console.log("Project has been started");
})


//hahahahahahaha