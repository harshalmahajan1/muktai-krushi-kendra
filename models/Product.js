const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({

name:{
type:String,
required:true
},

brand:String,

category:String,

description:String,

image:String,

available:{
type:Boolean,
default:true
}

},{timestamps:true})

module.exports=mongoose.model(
"Product",
productSchema
)