function ProductCard({ product }) {

return (

<div className="border p-5">

<h2>

{product.name}

</h2>

<p>

ब्रँड: {product.brand}

</p>

<p>

{product.description}

</p>

</div>

)

}

export default ProductCard