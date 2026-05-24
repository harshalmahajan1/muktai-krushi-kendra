import {Link} from "react-router-dom"

function Navbar(){

return(

<nav className="bg-green-900 text-white shadow-lg">

<div className="container mx-auto p-5 flex justify-between items-center">

<h1 className="text-2xl font-bold">

🌾 मुक्ताई कृषी केंद्र

</h1>

<div className="space-x-6">

<Link to="/">मुख्यपृष्ठ</Link>

<Link to="/products">उत्पादने</Link>

<Link to="/about">आमच्याबद्दल</Link>

<Link to="/contact">संपर्क</Link>

</div>

</div>

</nav>

)

}

export default Navbar