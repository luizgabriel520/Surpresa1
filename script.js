document.addEventListener("DOMContentLoaded", function () {
    // Efeito de digitação na história
    const texto = "Desde o momento em que nos conhecemos, soube que minha vida mudaria para sempre. Cada sorriso seu ilumina meus dias e cada abraço seu me traz paz. Obrigado por ser meu amor e minha melhor companhia. 💖";
    let i = 0;
    function digitarTexto() {
        if (i < texto.length) {
            document.getElementById("historia-texto").innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitarTexto, 50); // Velocidade da digitação
        }
    }
    digitarTexto();

    // Mostrar e esconder carta de amor
    document.getElementById("mostrarCarta").addEventListener("click", function () {
        const carta = document.getElementById("carta");
        if (carta.style.display === "block") {
            carta.style.display = "none";
        } else {
            carta.style.display = "block";
        }
    });

    // Tocar música de fundo
    const musica = document.getElementById("musicaFundo");
    document.getElementById("playMusic").addEventListener("click", function () {
        if (musica.paused) {
            musica.play();
            this.textContent = "⏸️ Pausar Música";
        } else {
            musica.pause();
            this.textContent = "🎶 Tocar Música";
        }
    });

    // Fogos de artifício
    document.getElementById("fogosBtn").addEventListener("click", function () {
        const fogos = document.createElement("div");
        fogos.classList.add("fogo");
        document.body.appendChild(fogos);

        fogos.style.left = Math.random() * window.innerWidth + "px";
        fogos.style.animationDuration = Math.random() * 2 + 2 + "s";

        setTimeout(() => {
            fogos.remove();
        }, 2000);
    });
});
