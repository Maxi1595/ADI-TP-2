var prueba = 0;

navigator.getBattery().then(function (battery){
  if (battery.level <= 0.2) {
    // Detener la animación
    document.querySelector('.cubo.animado').classList.remove('animado');
  } else if (battery.level > 0.2) {
    // Reanudar la animación
    document.querySelector('.cubo.animado').classList.add('animado');
  }
});
