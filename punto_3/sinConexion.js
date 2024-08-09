// Esta funcion es la que se encarga de verificar la conexion a internet.

function verificarConexion() {
    // Todo lo que esta dentro de esta funcion se habilita!
    if (navigator.onLine) {
      console.log("Conectado a internet");
      document.getElementById("submitButton").disabled = false;
    } else {
      // Y obviamente, todo lo que esta dentro del else, lo desactiva
      console.log("Desconectado de internet");
      // Mostrar mensaje al usuario indicando que está desconectado
      // Deshabilitar funciones que dependen de internet
      document.getElementById("submitButton").disabled = true;
    }
  }
  
  // Ejecutar la función al cargar la página
  window.addEventListener("load", verificarConexion);
  
  // Opcional: Ejecutar la función periódicamente para detectar cambios en la conexión
  setInterval(verificarConexion, 30000); // Cada 30 segundos