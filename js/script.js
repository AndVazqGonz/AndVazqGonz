console.log("Hello, world!");
let toggleThemeButton = document.getElementById("toggle-theme-btn"); //para declarar variables se usa el camel case camelCaseMethod
//objetos: Representaciones de entidades del mundo real, con propiedades y métodos(acciones programadas en funciones).
//document es el objeto principal de la web, es el que nos permite acceder a los elementos del html y manipularlos, cnvirtiendose en subelementos por elementos.
toggleThemeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

/*
Esto es un bloque de comentarios: Notas propias para no perderse en el código.
iychjkjhg
*/