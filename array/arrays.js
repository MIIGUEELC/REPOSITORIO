const lenguajes= new Array ('CSS','JAVASCRIPT','HPH');
const FRAMEWORKS= new Array ('REACT','VUE','ANGULAR.JS');

console.log(lenguajes);
lenguajes.reverse();
console.log(lenguajes);
lenguajes.sort(); // ordanarlo el array


const tecnologias= lenguajes.concat(frameworks);
console.log(lenguajes);
console.log(tecnologias);

tecnologias.push('webpack');
console.log(tecnologias);
const tecnologiasCsv =tecnologias.join(',');




function persona (nombre,apellido,fecha){
    this.nombre=nombre;
    this.nombre=nombre;
    this.nombre=nombre;
    this.fecha=fecha;
    this.getfe= function (){
        return this.año
    }
        
}
// clases

class persona{
    constructor(nombre,apellidos,año){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._año=año;
        
    }

    //podemos declarar metodos getteers and setter
    get año(){
        return this._año;
    }
}
// creacion de objeto por instanciacion
 const p1= new persona('lerie','garcia',1980)

 console.log(p1);
 console.log(p1.año);