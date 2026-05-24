function WhatsappButton(){

const phone="+919921548710"

const message=
"नमस्कार, मला तुमच्या उत्पादनांची माहिती हवी आहे"

const link=
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`

return(

<a
href={link}
target="_blank"
rel="noreferrer"
className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl text-white text-3xl"
>

💬

</a>

)

}

export default WhatsappButton