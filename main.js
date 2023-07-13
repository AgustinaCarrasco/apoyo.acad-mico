// Obtener elementos del formulario
let form = document.getElementById("registro-form");
let nombreInput = document.getElementById("nombre");
let emailInput = document.getElementById("email");
let contraseñaInput = document.getElementById("contraseña");

// Evento de envío del formulario
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener valores de los campos
  let nombre = nombreInput.value;
  let email = emailInput.value;
  let contraseña = contraseñaInput.value;

  // Realizar validación de datos
  if (nombre === "" || email === "" || contraseña === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // procesamiento adicional. enviar datos a un servidor o almacenarlos en una base de datos.

  // Mostrar mensaje de registro exitoso
  alert("¡Registro exitoso!");

  // Restablecer los campos del formulario
  form.reset();
});
