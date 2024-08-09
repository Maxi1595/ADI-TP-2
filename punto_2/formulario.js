const nombre = document.getElementById('nombreForm');
const apellido = document.getElementById('apellidoForm');
const email = document.getElementById('emailForm');
const contraseña = document.getElementById('contraseñaForm');
const boton = document.getElementById('button');
const form = document.getElementById('formulario');

form.addEventListener('submit', e=> {
    e.preventDefault();
    checkInputs();
});



function checkInputs(){

const nombreValue = nombreForm.value.trim();
const apellidoValue = apellidoForm.value.trim();
const emailValue = emailForm.value.trim();
const contraseñaValue = contraseñaForm.value.trim();

if (nombreValue =='') {
    setErrorFor(nombreForm, '¡Favor de llenar el campo Nombre!');
}else{
    setSuccessFor(nombreForm); 
  }
if (apellidoValue ==''){
    setErrorFor(apellidoForm, '¡Favor de llenar el campo Apellido!');
}else{
    setSuccessFor(apellidoForm);
}
if(emailValue ==''){
    setErrorFor(emailForm, '¡Favor de llenar el campo email!');
}else{
    setSuccessFor(emailForm);        
}

if(contraseñaValue ==''){
    setErrorFor(contraseñaForm, '¡Favor de llenar el campo contraseña!');
}else if (contraseñaValue.length < 8 || !/[A-Z]/.test(contraseñaValue)){
    setErrorFor(contraseñaForm, 'Debe tener como minimo 8 caracteres y una letra mayuscula');        
}else{
    setSuccessFor(contraseñaForm);
}
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-cont error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-cont success';
}

