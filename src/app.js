const weatherData=require("../utils/weatherData.js");
const express=require("express");
const hbs=require("hbs");
const path=require("path");
const app=express();

const port=process.env.PORT||3000;

const publicPath = path.join(__dirname, "../public");

const viewsPath = path.join(__dirname, "../templates/views");

const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.get("",(req,res)=>{
    res.render("index",{title:"weather App"})
})
app.get("/weather",(req,res)=>{
    if (!req.query.address){
        return res.send("address is required")
    }
   weatherData(req.query.address,(error,result)=>{
    if (error){
        return res.send(error)
    }
    res.send(result)
   });
}); 

app.get("*",(req,res)=>{
    res.send("404",{title:"page not found"})
})

app.listen(port,()=>{
    console.log("server is listening on port"+port)
})
