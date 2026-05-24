const mongoose=require("mongoose")

const inquirySchema=new mongoose.Schema({

name:String,

phone:String,

village:String,

product:String,

message:String

},
{timestamps:true})

module.exports=mongoose.model(
"Inquiry",
inquirySchema
)