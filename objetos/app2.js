function generarnumero(numMax){
    return Math.round((Math.random()*numMax))
}
generarnumero(100)

// objeto array, map, set

const a1=new Array("rojo","amarillo","blanco")
const a2=new Array(4)

const a3=Array.from('miguel covarrubias')
const set = new Set(['foo','bar','foo','bar'])
console.log(Array.from(set))// con esto solo coje los elemntos diferenciados

const map= new Map([[1,2],[2,4],[4,8]])
Array.from(map)


const mapper = new Map([['1','a'],['2','b']])  // si quiero meter en array solo claves o solo valores
const a6=Array.from(mapper.values())// AQUI  mete solo valores
const a7=Array.from(mapper.keys())//aqui mete las claves


// contenido de array

let a8= Array.from([1,2,3],x=>x+x) // devuelve suma funcion (de flecha)
let a9= Array.from({length:5},(v,i)=>i)
console.log(a9)

console.log(Array.isArray(a9))
