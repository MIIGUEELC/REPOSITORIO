function Cuentacorriente(Numero,Titular,DNI,Telefono,saldo,ultimos10mov){
    this.Numero=Numero;
    this.Titular=Titular;
    this.DNI=DNI;
    this.Telefono=Telefono;
    this.saldo=saldo;
    this.ultimos10mov= new Array(10);
    }

    function Ingresar(ingreso){
        this.saldo += ingreso;

    }
    function sacar(retirada){
        this.saldo -= retirada;

    }
    function saldo(){
        return this.saldo

    }
    function vermovimientos(){
        return this.ultimos10mov

    }

    // con clase
    class Cuentacorriente{
        constructor(Numero,Titular,DNI,Telefono,saldo,ultimos10mov){
            this._nombre=nombre;
            this._apellidos=apellidos;
            this._año=año;
            
        }
    
        //podemos declarar metodos getteers and setter
        get año(){
            return this._año;
        }

    }
