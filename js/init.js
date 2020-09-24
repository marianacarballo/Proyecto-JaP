const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url) {
    var result = {};
    showSpinner();
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function(response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner();
            return result;
        })
        .catch(function(error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
}

//Boton con nombre usuario, carrito, mi perfil y cierre de sesion
function showDropdowns() {

    let htmlContentToAppend = "";

    htmlContentToAppend += `
    <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="cart.html" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    </a>
  
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="cart.html">Carrito</a>
      <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
      <a class="dropdown-item" id="cerrarSesion" href="index.html">Cierre de sesión</a>
    </div>
  </div>
    `

    document.getElementById("nombreU").innerHTML = htmlContentToAppend;
    document.getElementById("dropdownMenuLink").innerHTML += localStorage.getItem("user");
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    var userlog = localStorage.getItem("user"); //leer el ítem almacenado en localStorage.
    userlog = JSON.parse(userlog); //JSON.parse: los datos se convertirán en un objeto JavaScript
    console.log(userlog);

    document.getElementById("nombreU").innerHTML = userlog; //inner.HTML: establece o devuelve el contenido al HTML.
    showDropdowns();

    //evento al boton cerrar sesion
    document.getElementById("cerrarSesion").addEventListener("click", function() {

        localStorage.clear(); // elimina todos los usuario almacenados
    })
});