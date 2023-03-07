var formulario = document.getElementById('form-login')
var pass = document.getElementById('pass-login')
var nombre = document.getElementById('nombre-login')
var correo = document.getElementById('email-login')

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")
var expEma = RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    var error = ""

    if(!pass.value.match(expMay)){
        error += "Contraseña: Debe contener una mayuscula. "
    }if(!pass.value.match(expMin)){
        error += "Contraseña: Debe contener una minuscula. "
    }if(!pass.value.match(expNum)){
        error += "Contraseña: Debe contener un numero. "
    }if(!correo.value.match(expEma)){
        error += "Correo: Debe ingresar un correo valido que incluya una @ y un dominio .com, .net, etc. "

}
if(error == ""){
    window.comunicacion.registroValido([nombre.value]);
}else{
    alert(error)
}


})

