    document.addEventListener("DOMContentLoaded", function () {
    const titleElement1 = document.getElementById("animatedTitle");
    const titleElement2 = document.getElementById("animatedTitle2");
    const cursorElement = document.getElementById("cursor");

    if (!titleElement1 || !titleElement2 || !cursorElement) {
        console.error("Algunos elementos no se encontraron.");
        return;
    }

    const texts = ["Bienvenidos al ", "Aula de Software Libre"];
    let currentIndex = 0; // Controla qué texto se está escribiendo
    let index = 0; // Controla la posición del carácter en el texto actual

    function type() {
        // Determina el elemento actual y el texto a escribir
        const currentElement = currentIndex === 0 ? titleElement1 : titleElement2;
        const currentText = texts[currentIndex];

        if (index < currentText.length) {
        currentElement.innerHTML += currentText.charAt(index);
        index++;
        setTimeout(type, 100);
        } else {
        // Al terminar el primer texto, avanzar y esperar antes de comenzar el siguiente
        if (currentIndex < texts.length - 1) {
            currentIndex++;
            index = 0;
            setTimeout(type, 0); // Esperar un segundo antes de iniciar el siguiente texto
        } else {
            cursorElement.style.display = "none"; // Ocultar cursor al final
        }
        }
    }

    type(); // Iniciar la escritura

    // Manejo del cursor
    setInterval(() => {
        cursorElement.style.visibility =
        cursorElement.style.visibility === "hidden" ? "visible" : "hidden";
    }, 500);
    });
