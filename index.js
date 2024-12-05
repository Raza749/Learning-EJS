const express = require('express');
const path = require("path");

const app = express();

const port = 3000;

// Setup the ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home");
});

app.get('/rolldice',(req,res)=>{
    let value = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice",{num: value});
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
if(data){
    res.render("instagram.ejs",{data});
}else{
    res.render("err.ejs");
}
});

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
});