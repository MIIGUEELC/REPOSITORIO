let especial=document.getElementById("especial")
console.log(especial)
especial.style.color="red"



// otra forma de obtener un conjunto de nodos

let lista_elementos = document.querySelectorAll("li") // este me permite recuperar los nodos que tiene una clase
console.log(lista_elementos)


for (let i=0; i<lista_elementos.length; i++){
    lista_elementos[i].style.fontSize="2rem"
}

for (const item of lista_elementos){
    item.style.fontSize="3rem"
}



lista_elementos.forEach(item=>{
    item.style.fontSize="3rem"
})