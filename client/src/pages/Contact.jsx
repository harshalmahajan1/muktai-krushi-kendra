import { useState } from "react"

function Contact(){

const [form,setForm]=useState({

name:"",
phone:"",
village:"",
product:"",
message:""

})

const handleChange=(e)=>{

setForm({

...form,
[e.target.name]:e.target.value

})

}

const handleSubmit=(e)=>{

e.preventDefault()

const phone="919921548710" // replace with your father's WhatsApp number

const text=`नाव: ${form.name}
मोबाईल: ${form.phone}
गाव: ${form.village}
उत्पादन: ${form.product}
संदेश: ${form.message}`

const url=`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`

window.location.assign(url)

}

return(

<div className="max-w-xl mx-auto p-8">

<h1 className="text-4xl text-green-800 font-bold mb-8">

संपर्क / चौकशी

</h1>

<form
onSubmit={handleSubmit}
className="space-y-4"
>

<input
name="name"
placeholder="नाव"
value={form.name}
onChange={handleChange}
className="w-full p-3 border rounded"
/>

<input
name="phone"
placeholder="मोबाईल नंबर"
value={form.phone}
onChange={handleChange}
className="w-full p-3 border rounded"
/>

<input
name="village"
placeholder="गाव"
value={form.village}
onChange={handleChange}
className="w-full p-3 border rounded"
/>

<input
name="product"
placeholder="उत्पादन"
value={form.product}
onChange={handleChange}
className="w-full p-3 border rounded"
/>

<textarea
name="message"
placeholder="संदेश"
value={form.message}
onChange={handleChange}
className="w-full p-3 border rounded"
/>

<button
type="submit"
className="bg-green-700 text-white px-6 py-3 rounded"
>

चौकशी पाठवा

</button>

</form>

</div>

)

}

export default Contact