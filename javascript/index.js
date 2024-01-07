document.addEventListener("DOMContentLoaded", function () {
    var noButton = document.getElementsByName("NO")[0];

    noButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Mueve el botón a una posición aleatoria
        var randomX = Math.random() * (window.innerWidth - 1000);
        var randomY = Math.random() * (window.innerHeight - 40);
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        // Agrega la clase para establecer el estilo de posición absoluta
        noButton.classList.add("random-position");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var siButton = document.getElementsByName("SI")[0];

    siButton.addEventListener("click", function (event) {
        // Previene la acción predeterminada del formulario
        event.preventDefault();
        window.location.href = "perdonado.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var siButton = document.getElementsByName("MEME")[0];
    var mainPage = document.getElementsByTagName("main")[0];
    var image = document.getElementsByTagName("img")[0];
    var randomNumber = Math.floor(Math.random() * 8);
    var randomNumber = 1;

    siButton.addEventListener("click", function (event) {
        // Previene la acción predeterminada del formulario
        event.preventDefault();
        
        image.src = "./images/" + randomNumber + ".png";
        mainPage.style.display = "none";
        image.style.display = "block";
    });
});