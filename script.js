
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

function abrirMenu() {
    document.getElementById("menuLateral").classList.add("aberto");
    document.getElementById("menuOverlay").classList.add("ativo");
}

function fecharMenu() {
    document.getElementById("menuLateral").classList.remove("aberto");
    document.getElementById("menuOverlay").classList.remove("ativo");
}

const formBusca = document.querySelector('.busca');

if (formBusca) {
    formBusca.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const inputBusca = document.getElementById('input-busca');
        const termo = inputBusca.value.trim();

        if (termo !== '') {
            window.location.href = `resultados.html?busca=${encodeURIComponent(termo)}`;
        }
    });
}
const gridResultados =  document.querySelector('.resultados-grid');

if (gridResultados) {
    const parametros = new URLSearchParams(window.location.search);
    const termo = (parametros.get('busca') || '').toLowerCase().trim();

    const titulo = document.getElementById('titulo-resultados');
    if (titulo) {
        titulo.textContent = `Resultados para: "${termo}"`;
    }

    const produtosResultado = gridResultados.querySelectorAll('.produto-card');
    let encontrados = 0;

    produtosResultado.forEach((produto) => {
        const nome = produto.querySelector('.produto-nome').textContent.toLowerCase();

        if (nome.includes(termo)) {
            produto.style.display = '';
            encontrados++;
        } else {
            produto.style.display = 'none';
        }
    });

    if (encontrados === 0) {
        gridResultados.insertAdjacentHTML('beforeend', '<p>Nenhum produto encontrado.</p>' );
    }
}
