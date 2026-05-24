import {
BrowserRouter,
Routes,
Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import WhatsappButton from "./components/Whatsappbutton"

import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import CallButton from "./components/CallButton"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/products"
element={<Products/>}
/>

<Route
path="/about"
element={<About/>}
/>

<Route
path="/contact"
element={<Contact/>}
/>

</Routes>

<WhatsappButton/>

<Footer/>

<CallButton/>

</BrowserRouter>

)

}

export default App