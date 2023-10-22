const FLIGTH=100
const HOTEL=60
const TOUR=20
const TOTAL=FLIGTH+HOTEL+TOUR
const budget=250
if (budget>TOTAL){
    console.log('te puedes ir de viaje')
}else if (budget===TOTAL){console.log('te puedes ir de viaje ')}
else{
    console.log('no te puedes ir de viaje')
}
const RESULTADO = budget>=TOTAL ?console.log('te puedes ir de viaje'): console.log('no te puede ir de viaje') // operadores terciarios
