
let slideAtual = 0;
const slides = document.querySelectorAll(".slide");
const bolinhas = document.querySelectorAll(".bolinha");
let autoplay;

function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    bolinhas.forEach(bolinha => bolinha.classList.remove("ativa"));

    slides[index].classList.add("active");
    bolinhas[index].classList.add("ativa");

    slideAtual = index;
}

function mudarSlide(direcao) {
    let novoIndex = slideAtual + direcao;

    if (novoIndex < 0) {
        novoIndex = slides.length -1;
    } else if (novoIndex >= slides.length) {
        novoIndex = 0;
    }

    mostrarSlide(novoIndex);
    reiniciarAutoplay();
}

function irParaSlide(index) {
    mostrarSlide(index);
    reiniciarAutoplay();
}

function iniciarAutoplay() {
    autoplay = setInterval(() => {
        mudarSlide(1);
    }, 5000);
}

function reiniciarAutoplay() {
    clearInterval(autoplay);
    iniciarAutoplay();
}

iniciarAutoplay();

function deslizar(id, direcao) {
    const carrossel = document.getElementById(id);
    const larguraCard = carrossel.querySelector(".produto-card").offsetWidth + 20; 
    carrossel.scrollBy({ left: larguraCard * direcao, behavior: "smooth" });
}
