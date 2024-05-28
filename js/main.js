// El código va aquí 
let btnAgregar =document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    }//if length
    return true;
}//validarCantidad

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";


    if (txtNombre.value.length<3){
        alertValidacionesTexto.innerHTML="El <strong>nombre</strong> no es correcto <br/>";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium";
    }//length
    if(! validarCantidad()){
        alertValidacionesTexto.innerHTML +="El <strong>numero</strong> no es correcto";
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid red medium";
    }//!ValidarCantidad
    
});

btnClear.addEventListener("click", function (event) {
    event.preventDefault();

    txtNombre.value = "";
    txtNumber.value = "";
    
});