function CallButton(){

const phone="919921548710" // replace with actual number

return(

<a
href={`tel:${phone}`}
className="fixed bottom-24 right-6 bg-green-700 p-4 rounded-full shadow-xl text-white text-3xl"
>

📞

</a>

)

}

export default CallButton