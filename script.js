
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

if (slides.length > 0) {
    iniciarAutoplay();
}

const produtos = [
  // Copa do Mundo 2026 (vitrineCarrossel)
  { id: 1, nome: "Camisa Brasil Copa do Mundo 2026 Goleiro", imagem: "fotos/blusa_seleçao1.webp", precoDe: 399.90, precoPor: 199.90, carrossel: "vitrineCarrossel" },
  { id: 2, nome: "Camisa Brasil Copa do Mundo 2026 Home", imagem: "fotos/blusa_selecao2.webp", precoDe: 499.90, precoPor: 249.90, carrossel: "vitrineCarrossel" },
  { id: 3, nome: "Camisa Brasil Jogador Copa do Mundo 2026 Home", imagem: "fotos/camisa_selecao3.webp", precoDe: 499.90, precoPor: 299.90, carrossel: "vitrineCarrossel" },
  { id: 4, nome: "Camisa Brasil Jogador Copa do Mundo 2026 Away", imagem: "fotos/camisa_selecao4.webp", precoDe: 399.90, precoPor: 199.90, carrossel: "vitrineCarrossel" },
  { id: 5, nome: "Camisa Brasil Feminino Copa do Mundo 2026 Away", imagem: "fotos/camisa_selecao5.webp", precoDe: 399.90, precoPor: 199.90, carrossel: "vitrineCarrossel" },
  { id: 6, nome: "Infantil Brasil Copa do Mundo 2026 Home", imagem: "fotos/blusa_infantil1.webp", precoDe: 399.90, precoPor: 199.90, carrossel: "vitrineCarrossel" },
  { id: 7, nome: "Infantil Brasil Copa do Mundo 2026 Goleiro", imagem: "fotos/camisa_infantil2.webp", precoDe: 399.90, precoPor: 199.90, carrossel: "vitrineCarrossel" },

  // Brasileirão (carrosselTimes)
  { id: 8, nome: "CAMISA FLAMENGO BRANCA MASCULINA", imagem: "fotos/flabarnca-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 9, nome: "CAMISA FLAMENGO MASCULINA", imagem: "fotos/flavermelha-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 10, nome: "CAMISA PALMEIRAS MASCULINA", imagem: "fotos/palmeiras-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 11, nome: "CAMISA CORINTHIANS MASCULINA", imagem: "fotos/corint-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 12, nome: "CAMISA CRUZEIRO MASCULINA", imagem: "fotos/cruzeiro-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 13, nome: "CAMISA ATLÉTICO MINEIRO MASCULINA", imagem: "fotos/cam-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 14, nome: "CAMISA FLUMINENSE MASCULINA", imagem: "fotos/flu-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 15, nome: "CAMISA SÃO PAULO MASCULINA", imagem: "fotos/sp-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 16, nome: "CAMISA VASCO MASCULINA", imagem: "fotos/vasco-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 17, nome: "CAMISA BAHIA MASCULINA", imagem: "fotos/bahia-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 18, nome: "CAMISA BRAGANTINO MASCULINA", imagem: "fotos/bragantino-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 19, nome: "CAMISA FORTALEZA MASCULINA", imagem: "fotos/fortaleza-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 20, nome: "CAMISA CUIABÁ MASCULINA", imagem: "fotos/cuiaba-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },
  { id: 21, nome: "CAMISA SANTOS MASCULINA", imagem: "fotos/santos-masc.webp", precoDe: 349.90, precoPor: 159.90, carrossel: "carrosselTimes" },

  // Feminino (carrosselFeminino)
  { id: 22, nome: "Feminina Corinthians 24/25 Home", imagem: "fotos/corint-fem.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 23, nome: "Camisa Feminina do Vasco da Gama 23/24 Third - Preto", imagem: "fotos/vasco-fem.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 24, nome: "Camisa Flamengo 24/25 Feminino - Branco", imagem: "fotos/flam-fem.avif", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 25, nome: "Camisa Feminina do Palmeiras Home 24/25 - Verde", imagem: "fotos/palmeiras-fem.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 26, nome: "Camisa Corinthians Feminina II 24/25 - Preto", imagem: "fotos/conrin-fem-preta.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 27, nome: "Camisa Feminina Flamengo III 23/24 Adidas - Preto", imagem: "fotos/fla-fem-preta.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 28, nome: "Camisa Feminino Flamengo 25/26 Home", imagem: "fotos/fla-fem-vermelha.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 29, nome: "Camisa Feminina Flamengo Away II 24/25 - Branco", imagem: "fotos/fla-fem-away.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 30, nome: "Camisa Feminina do Palmeiras Away 24/25 - Branca", imagem: "fotos/palmeiras-fem-branca.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 31, nome: "Camisa 23/24 Real Madrid l - Feminino", imagem: "fotos/realmadrid-fem.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 32, nome: "Feminina Cruzeiro 24/25 Home", imagem: "fotos/cruzeiro-fem.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 33, nome: "Feminina Botafogo 24/25 Home", imagem: "fotos/botafogo-fem.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 34, nome: "Feminina Barcelona 24/25 Home", imagem: "fotos/barcelona-fem.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },
  { id: 35, nome: "Camisa Brasil Feminino 19/20 Branco", imagem: "fotos/br-branca-fem.webp", precoDe: 289.90, precoPor: 199.90, carrossel: "carrosselFeminino" },

  // Infantil (carrosselInfantil)
  { id: 36, nome: "Conjunto Infantil Real Madrid Home 23/24 - Branco", imagem: "fotos/conjuntorealmadrid-infantil.webp", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
  { id: 37, nome: "KIDS SELEÇÃO DE PORTUGAL 2024/25", imagem: "fotos/KitinfantilISelecaodePortugal.webp", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
  { id: 38, nome: "KIT INFANTIL PALMEIRAS 24/25 HOME - VERDE", imagem: "fotos/kitpalmeiras-infantil.webp", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
  { id: 39, nome: "Conjunto Infantil Flamengo 24/25 Home", imagem: "fotos/kitflamengo-infantil.webp", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
  { id: 40, nome: "Conjunto Infantil Vasco L 2024/25", imagem: "fotos/kitvasco-infantil.jpg", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
  { id: 41, nome: "Conjunto Infantil Seleção Brasil l 24/25", imagem: "fotos/brasil-kids.webp", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
  { id: 42, nome: "Conjunto Infantil Barcelona Third 23/24 - Azul", imagem: "fotos/kitbarcelona-infantil.webp", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
  { id: 43, nome: "Kit Infantil Real Madrid ll 2023/24", imagem: "fotos/kitrealmadridpreta-infatil.webp", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
  { id: 44, nome: "Kids Barcelona ll 2024/25", imagem: "fotos/kitbarcelonapreta-infantil.webp", precoDe: 399.90, precoPor: 219.90, carrossel: "carrosselInfantil" },
];

function renderizarProdutos() {
  const carrosseis = ["vitrineCarrossel", "carrosselTimes", "carrosselFeminino", "carrosselInfantil"];

  carrosseis.forEach(function(idCarrossel) {
    const container = document.getElementById(idCarrossel);
    if (!container) return;

    const produtosDoCarrossel = produtos.filter(function(produto) {
      return produto.carrossel === idCarrossel;
    });

    container.innerHTML = produtosDoCarrossel.map(criarCardProduto).join('');
  });
}

function criarCardProduto(produto) {
    return `
        <div class="produto-card">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3 class="produto-nome">${produto.nome}</h3>
            <div class="produto-preco">
                <span class="preco-de">R$ ${produto.precoDe.toFixed(2).replace('.','.')}</span>
                <span class="preco-info">A PARTIR DE <span class="preco-por">R$ ${produto.precoPor.toFixed(2).replace('.', ',')}</span></span>
        </div>
        <button class="btn-add-carrinho" data-id="${produto.id}">
    <i class="fa-solid fa-cart-plus"></i>
</button>
    </div>
     `;
}

function renderizarProduto() {
    const container = document.getElementById('produtoPagina');
    if (!container) return;

    const parametros = new URLSearchParams(window.location.search);
    const idProduto = Number(parametros.get('id'));

    const produto = produtos.find(function(p) {
        return p.id === idProduto;
    });

    if (!produto) {
        container.innerHTML = '<p>Produto não encontrado.</p>';
        return;
    }

    const tamanhos = ["P", "M", "G", "GG", "2GG", "4GG"];

    container.innerHTML = `
    <div class="produto-detalhe">
      <img src="${produto.imagem}" alt="${produto.nome}" class="produto-detalhe-img">
      <div class="produto-detalhe-info">
        <h1 class="produto-detalhe-nome">${produto.nome}</h1>
        <div class="produto-detalhe-preco">
          <span class="preco-de">R$ ${produto.precoDe.toFixed(2).replace('.', ',')}</span>
          <span class="preco-por">R$ ${produto.precoPor.toFixed(2).replace('.', ',')}</span>
        </div>

        <div class="produto-detalhe-tamanho">
          <span class="tamanho-label">TAMANHO: <span id="tamanhoSelecionado">${tamanhos[0]}</span></span>
          <div class="tamanho-opcoes">
            ${tamanhos.map(function(tam, index) {
                return `<button class="btn-tamanho${index === 0 ? ' ativo' : ''}" data-tamanho="${tam}">${tam}</button>`;
            }).join('')}
          </div>
        </div>

        <div class="produto-detalhe-acoes">
          <div class="quantidade-seletor">
            <button class="btn-qtd-diminuir">-</button>
            <span id="qtdSelecionada">1</span>
            <button class="btn-qtd-aumentar">+</button>
          </div>
          <button class="btn-add-carrinho-detalhe" data-id="${produto.id}">
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('click', function(evento) {

    const botaoTamanho = evento.target.closest('.btn-tamanho');
    if (botaoTamanho) {
        document.querySelectorAll('.btn-tamanho').forEach(function(btn) {
            btn.classList.remove('ativo');
        });
        botaoTamanho.classList.add('ativo');
        document.getElementById('tamanhoSelecionado').textContent = botaoTamanho.dataset.tamanho;
        return;
    }

    const botaoQtdMais = evento.target.closest('.btn-qtd-aumentar');
    if (botaoQtdMais) {
        const span = document.getElementById('qtdSelecionada');
        span.textContent = Number(span.textContent) + 1;
        return;
    }

    const botaoQtdMenos = evento.target.closest('.btn-qtd-diminuir');
    if (botaoQtdMenos) {
        const span = document.getElementById('qtdSelecionada');
        const atual = Number(span.textContent);
        if (atual > 1) span.textContent = atual - 1;
        return;
    }

    const botaoAdd = evento.target.closest('.btn-add-carrinho, .btn-add-carrinho-detalhe');
    if (botaoAdd) {
        const qtdE1 = document.getElementById('qtdSelecionada');
        const quantidade = qtdE1 ? Number (qtdE1.textContent) : 1;
        adicionarAoCarrinho(Number(botaoAdd.dataset.id), quantidade);
        return;
    }

    const botaoAumentar = evento.target.closest('.btn-aumentar');
    if (botaoAumentar) {
        alterarQuantidade(Number(botaoAumentar.dataset.id), 1);
        return;
    }

   const botaoDiminuir = evento.target.closest('.btn-diminuir');
   if (botaoDiminuir) {
    alterarQuantidade(Number(botaoDiminuir.dataset.id), -1);
    return;
   }

    const botaoRemover = evento.target.closest('.btn-remover');
    if (botaoRemover) {
        removerDoCarrinho(Number(botaoRemover.dataset.id));
        return;
    }
});

function alterarQuantidade(id, delta){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const item = carrinho.find(function(p) {
        return p.id === id;
    });

    if (!item) return;

    item.quantidade += delta;

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(function(p) {
            return p.id !== id;
        });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
}

function removerDoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho = carrinho.filter(function(p) {
        return p.id !== id;
    });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
}

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

renderizarProdutos();

function adicionarAoCarrinho(idProduto, quantidade){
    quantidade = quantidade || 1;


    const produto = produtos.find(function(p) {
        return p.id === idProduto;
    });

    if (!produto) return;

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const itemExistente = carrinho.find(function(item) {
        return item.id === idProduto;
    
    });

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push ({
            id: produto.id,
            nome: produto.nome,
            imagem: produto.imagem,
            preco: produto.precoPor,
            quantidade: 1
        });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(produto.nome + " Foi adicionado ao carrinho!");
}


function renderizarCarrinho() {
  const listaEl = document.getElementById('carrinhoLista');
  if (!listaEl) return; // só roda na página do carrinho

  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (carrinho.length === 0) {
    listaEl.innerHTML = '<p>Seu carrinho está vazio.</p>';
    document.getElementById('carrinhoTotal').textContent = 'R$ 0,00';
    return;
  }

  listaEl.innerHTML = carrinho.map(function(item) {
    return `
      <div class="carrinho-item" data-id="${item.id}">
        <img src="${item.imagem}" alt="${item.nome}">
        <span class="carrinho-item-nome">${item.nome}</span>
        <span class="carrinho-item-preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
        <div class="carrinho-item-qtd">
          <button class="btn-diminuir" data-id="${item.id}">-</button>
          <span>${item.quantidade}</span>
          <button class="btn-aumentar" data-id="${item.id}">+</button>
        </div>
        <button class="btn-remover" data-id="${item.id}">Remover</button>
      </div>
    `;
  }).join('');

  const total = carrinho.reduce(function(soma, item) {
    return soma + (item.preco * item.quantidade);
  }, 0);

  document.getElementById('carrinhoTotal').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

renderizarCarrinho();

renderizarProduto();