
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
            <a href="produto.html?id=${produto.id}" class="produto-card-link">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3 class="produto-nome">${produto.nome}</h3>
                <div class="produto-preco">
                    <span class="preco-de">R$ ${produto.precoDe.toFixed(2).replace('.',',')}</span>
                    <span class="preco-info">A PARTIR DE <span class="preco-por">R$ ${produto.precoPor.toFixed(2).replace('.', ',')}</span></span>
                        </div>
            </a>
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
         </div> 

          <button class="btn-comprar-agora" data-id="${produto.id}">
            COMPRAR AGORA
        </button>
          <button class="btn-add-carrinho-detalhe" data-id="${produto.id}">
            ADICIONAR AO CARRINHO
          </button>

          <div class="produto-frete">
            <h3 class="frete-titulo"> Consulte o Frete</h3>
            <div class="frete-opcoes">
            <button class="frete-opcao ativa" data-tipo="casa">
            <i class="fa-solid fa-truck"></i>
            <span>Receba em Casa </span>
            </button>         
            <button class="frete-opcao" data-tipo="loja">
            <i class="fa-solid fa-shop"></i>
            <span>Retire em Loja </span>
            </button>
           </div>
           <div class="frete-cep">
           <input type="text" id="inputCep" placeholder="Digite o CEP" maxlength="9">
           <button id ="btnCalcularFrete">Calcular</button>
           </div>
           <a href="#" class="frete-nao-sei">Não sei meu CEP</a>
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

        const botaoComprarAgora = evento.target.closest('.btn-comprar-agora');
    if (botaoComprarAgora) {
        const tamanhoEl = document.getElementById('tamanhoSelecionado');
        const qtdE1 = document.getElementById('qtdSelecionada');
        const tamanho = tamanhoEl ? tamanhoEl.textContent : '';
        const quantidade = qtdE1 ? Number(qtdE1.textContent) : 1;
        comprarAgora(Number(botaoComprarAgora.dataset.id), tamanho, quantidade);
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

    const botaoOlho = evento.target.closest('.toggle-senha');
    if (botaoOlho) {
        const input = document.getElementById(botaoOlho.dataset.alvo);
        if (input.type === 'password') {
            input.type = 'text';
            botaoOlho.classList.remove('fa-eye');
            botaoOlho.classList.add('fa-eye-slash');
            botaoOlho.classList.add('ativo');
        } else {
            input.type = 'password';
            botaoOlho.classList.remove('fa-eye-slash');
            botaoOlho.classList.add('fa-eye');
            botaoOlho.classList.remove('ativo');
        }
        return;
    }

    const linkEsqueciSenha = evento.target.closest('.link-esqueci-senha');
    if (linkEsqueciSenha) {
        evento.preventDefault();
        alert('Em breve você poderá recuperar sua senha por aqui!');
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
  if (!listaEl) return; 

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

const conteudoAbas = document.querySelectorAll('.conta-aba');

if (conteudoAbas.length > 0) {
    conteudoAbas.forEach(function(aba) {
        aba.addEventListener('click', function() {
            conteudoAbas.forEach(function(a) {
                a.classList.remove('ativa');
            });
            aba.classList.add('ativa');

            if(aba.dataset.aba === 'login') {
                document.getElementById('formLogin').style.display = 'flex';
                document.getElementById('formCadastro').style.display = 'none';
            } else {
                document.getElementById('formLogin').style.display = 'none';
                document.getElementById('formCadastro').style.display = 'flex';
            }
        });
    });
}

const inputCpf = document.getElementById('cadCpf');

 if (inputCpf) {
    inputCpf.addEventListener('input', function() {
        let valor = inputCpf.value.replace(/\D/g, '');
        valor = valor.slice(0, 11);
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        inputCpf.value = valor;
    });
 }

 const inputTelefone = document.getElementById('cadTelefone');

 if (inputTelefone) {
    inputTelefone.addEventListener('input', function() {
        let valor = inputTelefone.value.replace(/\D/g, '');
        valor = valor.slice(0, 11);
        valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
        valor = valor.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
        inputTelefone.value = valor;
    });
 }

 const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const erroEl = document.getElementById('cadastroErro');
        erroEl.textContent = '';

        const nome = document.getElementById('cadNome').value.trim();
        const email = document.getElementById('cadEmail').value.trim().toLowerCase();
        const cpf = document.getElementById('cadCpf').value.trim();
        const telefone = document.getElementById('cadTelefone').value.trim();
        const senha = document.getElementById('cadSenha').value;
        const senhaConfirma = document.getElementById('cadSenhaConfirma').value;

        if (senha.length < 6) {
            erroEl.textContent = 'A senha precisa ter no mínimo 6 caracteres.';
            return;
        }

        if (senha !== senhaConfirma) {
            erroEl.textContent = 'As senhas não coincidem.';
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const emailJaExiste = usuarios.find(function(u) {
            return u.email === email;
        });

        if (emailJaExiste) {
            erroEl.textContent = 'Este e-mail já está cadastrado.';
            return;
        }

        const novoUsuario = {
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            senha: senha
        };

        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));

        atualizarCabecalhoConta();
        mostrarAreaLogado();
    });
}

const formLogin = document.getElementById('formLogin');

if (formLogin) {
    formLogin.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const erroEl = document.getElementById('loginErro');
        erroEl.textContent = '';

        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const senha = document.getElementById('loginSenha').value;

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuario = usuarios.find(function(u) {
            return u.email === email && u.senha === senha;
        });

        if (!usuario) {
            erroEl.textContent = 'E-mail ou senha incorretos.';
            return;
        }

        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

        atualizarCabecalhoConta();
        mostrarAreaLogado();
    });
}

function mostrarAreaLogado() {
    const areaDeslogado = document.getElementById('areaDeslogado');
    const areaLogado = document.getElementById('areaLogado');

    if (!areaDeslogado || !areaLogado) return;

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) return;

    areaDeslogado.style.display = 'none';
    areaLogado.style.display = 'block';

    document.getElementById('nomeUsuarioLogado').textContent = usuarioLogado.nome;
    document.getElementById('emailUsuarioLogado').textContent = usuarioLogado.email;
}

function atualizarCabecalhoConta() {
    const contaHeaderTexto = document.getElementById('contaHeaderTexto');
    if (!contaHeaderTexto) return;

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        const primeiroNome = usuarioLogado.nome.split(' ')[0];
        contaHeaderTexto.textContent = 'Olá, ' + primeiroNome;
    } else {
        contaHeaderTexto.textContent = 'Entre ou cadastra-se';
    }
}

atualizarCabecalhoConta();
mostrarAreaLogado();

const botaoSair = document.getElementById('btnSair');

if (botaoSair) {
    botaoSair.addEventListener('click', function() {
        localStorage.removeItem('usuarioLogado');
        window.location.reload();
    });
}

function carregarPerfil() {
    const areaSemLogin = document.getElementById('areaSemLogin');
    const areaPerfil = document.getElementById('areaPerfil');
    if (!areaPerfil) return; 

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
        areaSemLogin.style.display = 'block';
        areaPerfil.style.display = 'none';
        return;
    }

    areaSemLogin.style.display = 'none';
    areaPerfil.style.display = 'block';

    document.getElementById('perfilNome').value = usuarioLogado.nome;
    document.getElementById('perfilEmail').value = usuarioLogado.email;
    document.getElementById('perfilCpf').value = usuarioLogado.cpf;
    document.getElementById('perfilTelefone').value = usuarioLogado.telefone;
}

carregarPerfil();

const inputPerfilCpf = document.getElementById('perfilCpf');

if (inputPerfilCpf) {
    inputPerfilCpf.addEventListener('input', function() {
        let valor = inputPerfilCpf.value.replace(/\D/g, '');
        valor = valor.slice(0, 11);
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        inputPerfilCpf.value = valor;
    });
}

const inputPerfilTelefone = document.getElementById('perfilTelefone');

if (inputPerfilTelefone) {
    inputPerfilTelefone.addEventListener('input', function() {
        let valor = inputPerfilTelefone.value.replace(/\D/g, '');
        valor = valor.slice(0, 11);
        valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
        valor = valor.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
        inputPerfilTelefone.value = valor;
    });
}

const formPerfil = document.getElementById('formPerfil');

if (formPerfil) {
    formPerfil.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const sucessoEl = document.getElementById('perfilSucesso');
        sucessoEl.textContent = '';

        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        if (!usuarioLogado) return;

        const nome = document.getElementById('perfilNome').value.trim();
        const email = document.getElementById('perfilEmail').value.trim().toLowerCase();
        const cpf = document.getElementById('perfilCpf').value.trim();
        const telefone = document.getElementById('perfilTelefone').value.trim();

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const index = usuarios.findIndex(function(u) {
            return u.email === usuarioLogado.email;
        });

        if (index === -1) return;

        usuarios[index].nome = nome;
        usuarios[index].email = email;
        usuarios[index].cpf = cpf;
        usuarios[index].telefone = telefone;

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarios[index]));

        atualizarCabecalhoConta();
        sucessoEl.textContent = 'Dados atualizados com sucesso!';
    });
}

function comprarAgora(idProduto, tamanho, quantidade) {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
        window.location.href = 'conta.html';
        return;
    }

    const produto = produtos.find(function(p) {
        return p.id === idProduto;
    });

    if (!produto) return;

    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    const novoPedido = {
        id: Date.now(),
        emailUsuario: usuarioLogado.email,
        produtoId: produto.id,
        nome: produto.nome,
        imagem: produto.imagem,
        tamanho: tamanho,
        quantidade: quantidade,
        preco: produto.precoPor,
        total: produto.precoPor * quantidade,
        data: new Date().toLocaleDateString('pt-BR'),
        dataCriacao: Date.now()
    };

    pedidos.push(novoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    window.location.href = 'pedidos.html';
}

const botaoFinalizar = document.getElementById('btnFinalizar');

if (botaoFinalizar) {
    botaoFinalizar.addEventListener('click', finalizarCompra);
}

function finalizarCompra() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
        window.location.href = 'conta.html';
        return;
    }

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) return;

    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    carrinho.forEach(function(item) {
        pedidos.push({
            id: Date.now(),
            emailUsuario: usuarioLogado.email,
            produtoId: item.id,
            nome: item.nome,
            imagem: item.imagem,
            tamanho: '-',
            quantidade: item.quantidade,
            preco: item.preco,
            total: item.preco * item.quantidade,
            data: new Date().toLocaleDateString('pt-BR'),
            dataCriacao: Date.now()
        });
    });

    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    carrinho = [];
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    window.location.href = 'pedidos.html';
}

function renderizarPedidos() {
    const areaSemLogin = document.getElementById('areaSemLogin');
    const areaPedidos = document.getElementById('areaPedidos');
    if (!areaPedidos) return;

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
        areaSemLogin.style.display = 'block';
        areaPedidos.style.display = 'none';
        return;
    }

    areaSemLogin.style.display = 'none';
    areaPedidos.style.display = 'block';

    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    const meusPedidos = pedidos.filter(function(pedido) {
        return pedido.emailUsuario === usuarioLogado.email;
    });

    const listaEl = document.getElementById('listaPedidos');

    if (meusPedidos.length === 0) {
        listaEl.innerHTML = '<p>Você ainda não tem pedidos.</p>';
        return;
    }

    listaEl.innerHTML = meusPedidos.map(function(pedido) {
        return `
            <div class="carrinho-item">
                <img src="${pedido.imagem}" alt="${pedido.nome}">
                <span class="carrinho-item-nome">${pedido.nome} - Tam: ${pedido.tamanho}</span>
                <span class="carrinho-item-preco">R$ ${pedido.total.toFixed(2).replace('.', ',')}</span>
                <span>Qtd: ${pedido.quantidade}</span>
                                <span>${pedido.data}</span>
                <span class="carrinho-item-status">${calcularStatusPedido(pedido.dataCriacao)}</span>
            </div>
        `;
    }).join('');
}

function calcularStatusPedido(timestamp) {
    const agora = Date.now();
    const diffMs = agora - timestamp;
    const diffDias = diffMs / (1000 * 60 * 60 * 24);

    if (diffDias < 1) {
        return 'Processando';
    } else if (diffDias <= 3) {
        return 'Enviado';
    } else {
        return 'Entregue';
    }
}

renderizarPedidos();

renderizarCarrinho();

renderizarProduto();