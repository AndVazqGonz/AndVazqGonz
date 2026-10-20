/*console.log("Hello, world!");
function saludo(nombre="Mundo"){
   /* alert("Hola, " + nombre);
}
/*saludo(); //llama a la función saludo, que es la que contiene el alert, que es un mensaje emergente en la pantalla.
*/

//para declarar variables se usa el camel case (camelCaseMethod)

const TOGGLE_BTN = document.getElementById("toggle-theme-btn"); //document es el elemento que contiene todo el contenido de la página web, y getElementById es un método que permite acceder a un elemento del html a través de su id, en este caso, el id es "toggle-theme-btn", que es el botón que permite cambiar el tema de la página web.
const ROOT = document.documentElement;
TOGGLE_BTN.addEventListener("click", function(){
    ROOT.classList.toggle("dark-theme");

    
});



//instancias separan las clases de los objetos, es decir, las clases son como moldes y las instancias son los objetos que se crean a partir de esos moldes.
//objetos: Representaciones de entidades del mundo real, con propiedades y métodos(acciones programadas en funciones).
//document es el objeto principal de la web, es el que nos permite acceder a los elementos del html y manipularlos, cnvirtiendose en subelementos por elementos.
/*toggleThemeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});
*/
//el punto sirve par ACCEDER A PROPIEDADES DE UN OBJETO, en este caso, el objeto es document.body.classList y la propiedad es toggle, que es un método que permite alternar entre dos estados, en este caso, entre el tema oscuro y el tema claro.

/*
Esto es un bloque de comentarios: Notas propias para no perderse en el código.
*/