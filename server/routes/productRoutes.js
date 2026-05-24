const express=require("express")

const router=express.Router()

const products=[

{
id:1,
name:"युरिया खत",
brand:"IFFCO",
category:"खते",
description:"उत्तम दर्जाचे नायट्रोजन खत",
image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
},

{
id:2,
name:"टोमॅटो बियाणे",
brand:"Syngenta",
category:"बियाणे",
description:"उच्च उत्पादन क्षमता",
image:"https://images.unsplash.com/photo-1592841200221-a6898f307baa"
},

{
id:3,
name:"कीटकनाशक",
brand:"Bayer",
category:"कीटकनाशके",
description:"पीक संरक्षणासाठी",
image:"https://images.unsplash.com/photo-1625246333119-dc31b0f4a4a4"
}

]

router.get("/",(req,res)=>{

res.json(products)

})

module.exports=router