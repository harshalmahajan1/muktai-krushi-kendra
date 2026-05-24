const express=require("express")

const router=express.Router()

let inquiries=[]

router.post("/",(req,res)=>{

inquiries.push(req.body)

res.json({

message:"Inquiry saved"

})

})

router.get("/",(req,res)=>{

res.json(inquiries)

})

module.exports=router