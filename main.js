/*registro de usuario simulador interactivo*/
let nombre = prompt("ingresa tu nombre")
let apellido = prompt("ingresa tu apellido")
let email = prompt("ingresa tu email")
let contraseña = prompt("ingresa tu contraseña")
let celular =  parseInt(prompt("ingresa tu numero de celular"))

if (celular != celular) {
    prompt('Debes ingresar un valor numérico.');
  } else {
   prompt('Número de celular ingresado correctamente:' + celular);
  }