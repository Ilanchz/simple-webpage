import express from "express";

const app=express();
const port=3000;

let Tasks=[]; 

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));


app.post("/add",(req,res)=>{
    Tasks.push(req.body["task"]);
    res.render("index.ejs",{givenJobs:Tasks});
})

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.listen(port,()=>{
    console.log("Listening on port 3000../"); //Plain old representation
})