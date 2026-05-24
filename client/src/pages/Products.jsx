import {useState} from "react"
import ProductCard from "../components/ProductCard"

function Products(){

const [search,setSearch]=useState("")

const products=[

{
id:1,
name:"खत",
brand:"एनएफएल युरिया, महाधन पोटॅश, कोरोमंडल झिंकयुक्त फॉस्फेट",
description:"उत्तम दर्जाचे खत"
},

{
id:2,
name:"बियाणे",
brand:"रासी, अजित, कावेरी, पायोनिअर",
description:"उच्च उत्पादन क्षमता"
},

{
id:3,
name:"कीटकनाशक",
brand:"Agro-Max, GSP, Mandar, Swal, Elain",
description:"पीक संरक्षण"
}

]

const filteredProducts=

products.filter(product=>

product.name.toLowerCase()
.includes(search.toLowerCase())

)

return(

<div className="container mx-auto p-10">

<h1 className="text-4xl text-green-800 font-bold text-center">

आमची उत्पादने

</h1>

<input
type="text"
placeholder="उत्पादन शोधा..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full border p-3 rounded mt-8"
/>

<div className="grid md:grid-cols-3 gap-6 mt-8">

{filteredProducts.map(product=>(

<ProductCard
key={product.id}
product={product}
/>

))}

</div>

</div>

)

}

export default Products