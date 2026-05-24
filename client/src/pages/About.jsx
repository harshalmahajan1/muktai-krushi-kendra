import ownerPhoto from "../assets/ownerPhoto.jpeg"

function About(){

return(

<div className="container mx-auto px-6 py-12">

<h1 className="text-4xl font-bold text-green-800 text-center">

आमच्याबद्दल

</h1>

<div className="grid md:grid-cols-2 gap-10 items-center mt-10">

<div>

<img
src={ownerPhoto}
alt="मालक"
className="rounded-2xl shadow-xl h-[450px] w-full object-cover"
/>

</div>

<div>

<h2 className="text-3xl font-bold text-green-700">

श्री. कैलास मुकुंदा महाजन

</h2>

<p className="mt-6 text-lg">

मुक्ताई कृषी केंद्र मध्ये आम्ही शेतकऱ्यांना
उत्तम दर्जाची बियाणे, खते आणि कीटकनाशके
उपलब्ध करून देतो. आमचे ध्येय शेतकऱ्यांना
योग्य मार्गदर्शन आणि विश्वासार्ह सेवा देणे आहे.

</p>

<p className="mt-4">

🌾 अनुभवी मार्गदर्शन  
<br/>
🌾 दर्जेदार उत्पादने  
<br/>
🌾 शेतकऱ्यांचा विश्वास  

</p>

</div>

</div>

</div>

)

}

export default About