require("dotenv").config()

const express=require("express")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{

res.send("शेतकरी सेवा केंद्र API चालू आहे 🚜")

})

app.use(
"/api/products",
require("./routes/productRoutes")
)

app.use(
"/api/inquiries",
require("./routes/inquiryRoutes")
)

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`)

})