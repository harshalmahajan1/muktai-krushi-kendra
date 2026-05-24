function Testimonials(){

const reviews=[

{
name:"महेंद्र अर्जुन पाटील, रमजीपूर",
message:"उत्पादने खूप चांगली आहेत.",
stars:"⭐⭐⭐⭐⭐"
},

{
name:"पांडुरंग हरी महाजन, रमजीपूर",
message:"योग्य मार्गदर्शन मिळाले.",
stars:"⭐⭐⭐⭐⭐"
},

{
name:"सुधाकर रामचंद्र महाजन, खिरोदा",
message:"दर्जेदार सेवा मिळाली.",
stars:"⭐⭐⭐⭐"
}

]

return(

<div className="py-12 bg-green-50">

<h1 className="text-center text-4xl font-bold text-green-800">

ग्राहक प्रतिक्रिया

</h1>

<div className="container mx-auto grid md:grid-cols-3 gap-6 mt-10">

{reviews.map((review,index)=>(

<div
key={index}
className="bg-white p-6 rounded-xl shadow"
>

<h2 className="font-bold">

{review.name}

</h2>

<p className="mt-2">

{review.stars}

</p>

<p className="mt-3">

{review.message}

</p>

</div>

))}

</div>

</div>

)

}

export default Testimonials