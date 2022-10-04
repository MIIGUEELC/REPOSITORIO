var coche={}

var usuario={
        nombre:'felipe',
        edad:43,
        saludo:function(){
            console.log(`hola soy ${this.nombre}`) // el dolar toma el valor del objeto 
        },
};

console.log (usuario.saludo)

// objetos descontruidos 
function persona(nombre,edad){
    this.nombre=nombre
    this.edad=edad
    this.saludar=function(){
        console.log(`hola soy ${this.nombre}`)
    }
}
var profesor=new persona ("maria",25)

var persona1=new Object({
    nombre:'pedro',
    edad:24,
    saludar:function(){
        console.log('hola')
    }


})