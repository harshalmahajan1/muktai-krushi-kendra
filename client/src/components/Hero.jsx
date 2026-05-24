import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import shopPhoto from "../assets/shop.png"

function Hero(){

return(

<section
className="min-h-screen bg-gradient-to-r from-green-800 to-green-500 text-white flex items-center"
>

<div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

<div>

<motion.h1
initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-5xl md:text-6xl font-bold leading-tight"
>

🌾 मुक्ताई कृषी केंद्र

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}

className="mt-6 text-xl"
>

उत्तम दर्जाची बियाणे, खते आणि
कीटकनाशके आता आपल्या सेवेत

</motion.p>

<div className="mt-8 flex gap-4">

<Link
to="/products"
className="bg-white text-green-800 px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
>
उत्पादने पहा
</Link>

<Link
to="/contact"
className="bg-green-900 px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
>
संपर्क करा
</Link>

</div>

</div>

<div>

<img
src={shopPhoto}
alt="Agriculture"
className="rounded-2xl shadow-2xl"
/>

</div>

</div>

</section>

)

}

export default Hero