document.addEventListener("DOMContentLoaded",(e)=>{
const valor=document.getElementById("et2");
console.log(valor)
const valor2=document.querySelector(".et1");

})


// para los eventos

const btn = document.querySelector(".btn-dark")
btn.addEventListener("click",(e)=>{
    console.log("boton dark")
    e.stopPropagation // detiene la propagacion
    e.preventDefault //  evita que al hacer click ejecute lo que tiene asignado por defecto
})

const bgsucess=document.querySelector(".bg-sucess")
bgsucess.addEventListener("click",(e)=>{
    console.log("pulsaste bg-sucess")
})
