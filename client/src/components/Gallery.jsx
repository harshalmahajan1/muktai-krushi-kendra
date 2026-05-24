function Gallery(){

const images=[

"https://images.unsplash.com/photo-1500937386664-56d1dfef3854",

"https://images.unsplash.com/photo-1625246333195-78d9c38ad449",

"https://images.unsplash.com/photo-1592841200221-a6898f307baa",

"https://images.unsplash.com/photo-1464226184884-fa280b87c399"

]

return(

<div className="bg-green-50 py-12">

<h1 className="text-center text-4xl font-bold text-green-800">

फोटो गॅलरी

</h1>

<div className="container mx-auto grid md:grid-cols-4 gap-6 mt-10 px-6">

{images.map((image,index)=>(

<div
key={index}
className="overflow-hidden rounded-xl shadow-lg"
>

<img
src={image}
alt="gallery"
className="h-64 w-full object-cover hover:scale-110 transition duration-500"
/>

</div>

))}

</div>

</div>

)

}

export default Gallery