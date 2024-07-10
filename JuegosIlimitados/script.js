const juegos = [
    { titulo: "Juego 1", descripcion: "Descripción breve del juego 1", url: "https://www.youtube.com/watch?v=MEGN2slSAd8" },
    { titulo: "Juego 2", descripcion: "Descripción breve del juego 2", url: "https://www.ejemplo.com/descargar-juego-2" },
    { titulo: "Juego 3", descripcion: "Descripción breve del juego 3", url: "https://www.ejemplo.com/descargar-juego-3" },
    { titulo: "Juego 4", descripcion: "Descripción breve del juego 4", url: "https://www.ejemplo.com/descargar-juego-4" },
    { titulo: "Juego 5", descripcion: "Descripción breve del juego 5", url: "https://www.ejemplo.com/descargar-juego-5" },
    { titulo: "Juego 6", descripcion: "Descripción breve del juego 6", url: "https://www.ejemplo.com/descargar-juego-6" },
    { titulo: "Juego 7", descripcion: "Descripción breve del juego 7", url: "https://www.ejemplo.com/descargar-juego-7" }
    // Agregar más juegos aquí según sea necesario
];

function generarJuegos() {
    const gameList = document.getElementById("gameList");

    juegos.forEach(juego => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");

        const title = document.createElement("h3");
        title.textContent = juego.titulo;

        const description = document.createElement("p");
        description.textContent = juego.descripcion;

        const downloadLink = document.createElement("a");
        downloadLink.href = juego.url;
        downloadLink.target = "_blank";
        downloadLink.textContent = "Descargar";

        gameItem.appendChild(title);
        gameItem.appendChild(description);
        gameItem.appendChild(downloadLink);

        gameList.appendChild(gameItem);
    });
}

generarJuegos();


// Funcionalidad de búsqueda
document.getElementById("searchInput").addEventListener("input", function() {
    var filter, gameItems, title, i;
    filter = this.value.toUpperCase();
    gameItems = document.querySelectorAll(".game-item");

    gameItems.forEach(gameItem => {
        title = gameItem.querySelector("h3");
        if (title.textContent.toUpperCase().indexOf(filter) > -1) {
            gameItem.style.display = "";
        } else {
            gameItem.style.display = "none";
        }
    });
});

// Funcionalidad de paginación
function irAPagina(pagina) {
    paginaActual = pagina;
    generarJuegos();
}

// Ejemplo de generación de botones de paginación (puedes ajustarlo según tus necesidades)
const paginationContainer = document.getElementById("pagination");

for (let i = 1; i <= Math.ceil(juegos.length / juegosPorPagina); i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", function() {
        irAPagina(i);
    });
    paginationContainer.appendChild(button);
}
