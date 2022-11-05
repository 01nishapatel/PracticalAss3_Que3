require("./models/db");

const express=require("express");

const app=express();

const vehicalcontroller=require("./controller/vehicalController")

app.set("view engine","ejs");

app.use(express.urlencoded({
    extended:true
}))

app.listen(8000,"localhost",()=>{
    console.log("Connected...");
})

app.use("/",vehicalcontroller);