import Hero from "../components/Hero"
import FeatureCard from "../components/FeatureCard"
import shopData from "../data/shopData"
import Gallery from "../components/Gallery"
import ShopInfo from "../components/ShopInfo"
import MapSection from "../components/MapSection"
import Testimonials from "../components/Testimonials"

function Home(){

return(

<div>

<Hero/>

<section className="container mx-auto p-10">

<h2
className="text-center text-4xl font-bold text-green-800"
>

आमच्या सेवा

</h2>

<div
className="grid md:grid-cols-4 gap-6 mt-8"
>

{

shopData.services.map(
(service,index)=>(

<FeatureCard
key={index}
title={service}
/>

))

}

</div>

</section>

<section
className="bg-green-100 p-10"
>

<h2
className="text-center text-4xl font-bold text-green-800"
>

ग्राहक प्रतिक्रिया

</h2>

<div className="grid md:grid-cols-2 gap-6 mt-8">

{

shopData.reviews.map(
(review,index)=>(

<div
key={index}
className="bg-white p-5 rounded-lg shadow"
>

<h3 className="font-bold">

{review.name}

</h3>

<p>

"{review.message}"

</p>

</div>

))

}

</div>

</section>
<Gallery/>
<ShopInfo/>
<MapSection/>
<Testimonials/>

</div>

)

}

export default Home