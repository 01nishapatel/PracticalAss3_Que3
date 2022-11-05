const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/VehicalDatabase",{ useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("connect to mongo db");
    }
    else{
        console.log(err);
    }
})
require("../models/vehical.model");
require("../models/category.model");