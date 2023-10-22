document.addEventListener("DOMContentLoaded",function(){
    const email=document.getElementById('email')
    const codigo=document.getElementById('cp')
    const formulario=document.querySelector('formulario')

    form.addEventListener('submit',function(evento){
        evento.preventDefault()
        evento.stopPropagation()

        let valido=true
        if(!validaEmail(email)){
            valido=false
        }

        if(!validaCP(cp)){
            valido=false
        }
        if (valido){
            this.submit
        }

        function validaCP(el){
            const erCP = /^[0-5][0-9]{4}$/    //expresion regular  el gorrito dice empieza ...elcampo empieza entre un 0 y 5 luego numeros entre 0y9 y que sean 4 y el dollar que acaba
            const cpvalue=el.value.trim() // el trim limpia el principio y el final
            if(cpvalue.match(erCP)){  // si encaja con la expresion regular
                el.setCustomValiaty()
                return true
            }else{
                el.setCustomValiaty("el codigo es erroneo")
            }
        }

        function validaEmail(el){
            const erMail=/^[-\W.%+]{1,64}@(?:[A-Z0-9]{1,63}\.){1,125}[A-Z]{2,63}$/i  // debe de empezar con cualquier cadena hasta un punto y solo 1
            if(erMail.test(el.value.trim())){ // esto cimprueba que encaja con lo que has escrito
                el.setCustomValiaty("")
                return true
            }else{
                el.setCustomValiaty("el email no tiene formato correcto ")
            }
        }


        




    })


















})




