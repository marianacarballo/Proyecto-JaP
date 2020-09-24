//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos loBOTON
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) { //activa un evento cuando abre el html
    document.getElementById("boton").addEventListener("click", function() { //activa evento cuando hace click en el boton
        correo = document.getElementById("inputEmail").value;
        contraseña = document.getElementById("inputContraseña").value;
        modifCorreo = document.getElementById("inputEmail").style.borderColor = "red";
        modifContraseña = document.getElementById("inputContraseña").style.borderColor = "red";

        if (correo != "") { //si contraseña y usuario no estan vacios redirije al indej 
            localStorage.setItem("user", JSON.stringify(correo)); //JSON lo convertimos en string (strignify)
            document.getElementById("inputEmail").style.removeProperty("border-color");
        }
        if (contraseña != "") { //si contraseña y usuario no estan vacios redirije al indej 
            document.getElementById("inputContraseña").style.removeProperty("border-color");
            if (correo != "" && contraseña != "")
                location.href = "inicio.html";
        } else {
            return modifCorreo.placeholder || modifContraseña;
        }
    });
});