import shopData from "../data/shopData"

function ShopInfo(){

return(

<div className="bg-green-700 text-white py-12">

<div className="container mx-auto text-center">

<h1 className="text-4xl font-bold">

{shopData.shopName}

</h1>

<p className="mt-4">

मालक: {shopData.owner}

</p>

<p>

📞 {shopData.phone}

</p>

<p>

📍 {shopData.address}

</p>

</div>

</div>

)

}

export default ShopInfo