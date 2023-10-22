document.addEventListener("DOMContentLoaded",function(evento){
    const usuario=document.getElementById('uname')
    const clave=document.getElementById('pwd')
    const form=document.querySelector('form')


    form.addEventListener('submit',validadFormulario)

    usuario.addEventListener("keyup",function(e){
        if(this.value){
            this.setCustomValidity("")
        }
        else{
            this.setCustomValidity("Campo vacio")
        }
        

        
    })
    clave.addEventListener("keyup",function(e){
        if(this.value.length>=6){
            this.setCustomValidity("")
        }else{
            this.setCustomValidity("la contraseña es demasiado pequeña")
        }
    })
    function validadFormulario(evento){
        evento.preventDefault()
        evento.stopPropagation()
        let valido=true

        if(!usuario.value){
            usuario.setCustomValidity("campo vacio")
            valido=false
        }else{
            usuario.setCustomValidity("")
        }
        if(clave.vale.length<6){
            clave.setCustomValidity("menor de  6 caracteres")
            valido=false
        }else{
            clave.setCustomValidity("")
        }
        if(valido){
            this.submit
        }else{
            usuario.setCustomValidity("")
        }
    }
})