var contador = 1;

var cambiarImagen = function(){
    //var contador = 1;
    if(contador == 5) {
        contador = 1;
    } else {
        contador++;
    }
    document.getElementById("img").src = `imagenes/Imagenes-noticias/${contador}.png`;
};



setInterval(cambiarImagen,2750);

var verificar = function() {
    var dni = document.getElementById("dni").value;
    var contrasenia = document.getElementById("contrasenia").value;

    if(dni === "" || contrasenia === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (isNaN(dni)) {
        alert("El DNI es solo números");
        return false;
    } else if (dni.length != 8) {
        alert("El DNI debe contener ocho digitos");
        return false;
    } else if(contrasenia.length < 4) {
        alert("La contraseña debe contener al menos cuatro caracteres");
        return false;
    }
    window.open("paginaPrincipal.html", `_self`);
};

document.getElementById("ingresar").addEventListener("click", verificar);




