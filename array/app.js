var persona = ['John',12,'Mexico',true]

var persona1 = new Array(3)

var persona2 = new Array('Jhon',12,'Mexico',true)

console.log(persona[0])
console.log(persona2[1])

persona[0] = 'Jose'
persona.pop() // Saca el ultimo elemento de la lista
persona.push('Programador') // Añade un elemento al final de la lista
console.log(persona)

var colores = ['Rojo','Azul','Amarillo','Naranja']

for(var i=0; i<colores.length; i++){
    console.log(colores[i])
}


// Array Multidimensiponal 

var palabras_españa = new Array('facebook','tuenti','hotmail');
var palabras_suiza = new Array('facebook','tuenti','hotmail');
var palabras_portugal = new Array('facebook','tuenti','hotmail');
var palabras_mas_buscadas = new Array(palabras_españa,palabras_suiza,palabras_portugal);

document.write("<table_border=1");
for(i=0;i<palabras_mas_buscadas.length;i++){
    document.write("<tr>")
    document.write("<td><b> estado "+i+ "<b></td>")
    for(j=0; j<palabras_mas_buscadas[i].length;j++){
        document.write("<td>"+palabras_mas_buscadas[i][j]+"</td>")
    }
    document.write("</tr>")
}
document.write("</table>")

// OTRA FORMA DE RECORRER ARRAY bucle for_of (es6)

for(num  of a1){
    console.log(num)
}

// tambien poddemos recorrerlo con un foreach

a1.forEach(function(elementoindice,array){
    console.log(`${indice}: ${elemento}`);

    
});
// una cadena tambien se puede recorrer como un array de caracteres
const cadena ="hola mundo";

for (car of cadena){
    console.log(car)
}
