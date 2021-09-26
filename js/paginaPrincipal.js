var nombre = prompt("!Hola! ¿Podria indicarme su nombre?");

function transformar(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1);
  }

var titulo = document.querySelector(".titulo");

titulo.textContent = `¡Bienvenido ${transformar(nombre)}!`;

var inicio = document.querySelector(".inicio")

inicio.addEventListener("click", function() {
    window.open('index.html', `_self`);
})

var vacunate = document.querySelector(".vacunate")

vacunate.addEventListener("click", function(){
    window.open(`https://www.buenosaires.gob.ar/coronavirus/vacunacion-covid-19/poblacion-general`); 
})

var boton = document.querySelector(".boton") 

boton.addEventListener("click", function(){
    window.open(`index.html`, `_self`);
})

var tarjetas = document.querySelectorAll(".tarjeta")

for(var i=0; i<tarjetas.length;i++) {
    tarjetas[i].addEventListener("mouseover", function() {
        this.style.background = "#D6DBDF";
    })
}

for(var i=0; i<tarjetas.length;i++) {
    tarjetas[i].addEventListener("mouseleave", function() {
        this.style.background = "#EBEDEF";
    })
}
