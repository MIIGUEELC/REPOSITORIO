/*var myCar = {

    marca: 'Ford',
    modelo: 'Mustang',
    precio: 1969,
    añomatriculaciob: 2019
};
*/





// otra forma
function coche (marca_in , modelo_in, año_in){
    this.marca =marca_in;
    this.modelo =modelo_in;
    this.año =año_in;

}

var coches =new Array(4);
coches[0]= new coche ("ferrari","enzo","1999");
coches[1]= new coche ("ferrari","enzo","1999");
coches[2]= new coche ("ferrari","enzo","1999");
coches[3]= new coche ("ferrari","enzo","1999");


for(i=0;i<coches.length;i++){
    document.write("<b>marca</b>"+coches[i].marca+"<b>modelo</b>"+coches[i].modelo+"<b>año</b>"+coches[i].año+"<br>" );
}