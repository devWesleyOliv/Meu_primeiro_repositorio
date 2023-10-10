// console.log(luquinha);
// console.log(window.luquinha);
// console.log(window.document.getElementById('luquinha'));

// nome da função
// tem parâmetro? (), (x)
// {} bigodes

function createHeader() {
    const header = document.querySelector('body > header');
  
    const title = document.createElement('h1');
    
    title.innerText = 'Boas vindas - Bora Jogar na Mega';
    
    header.appendChild(title);
    
    const text = document.createElement('p');
    text.innerText = 'Números sorteados: ';
    
    header.appendChild(text);
  };
  
  // arrow function
  const criarMain = () => {
    const body = document.querySelector('body');
    const main = document.createElement('main');
  
    body.appendChild(main);
  
    criarContainer();
  }
  
  const criarContainer = () => {
    const main = document.querySelector('main');
  
    const containerNumeros = document.createElement('div');
    // containerNumeros.className = 'numeros-container';
    // containerNumeros.className += ' teste';
    containerNumeros.classList.add('numeros-container');
    main.appendChild(containerNumeros);
  }
  
  // Math.round
  // Math.floor
  const gerarNumeroAleatorio = (qtd_numeros) => Math.ceil(Math.random() * qtd_numeros);
  
  
  
  const criarNumeros = (quantidade, quantidade_numeros) => {
    // acessa > cria > popula
    const container = document.getElementsByClassName('numeros-container')[0];
  
    for (let index = 0; index < quantidade; index += 1){
      const ball = document.createElement('div');
      ball.classList.add('numero');
      ball.innerText = gerarNumeroAleatorio(quantidade_numeros);
      container.appendChild(ball);
    }
  }
  
  const megassena = 60
  const lotofacil = 25
  
  createHeader();
  criarMain();
  criarNumeros(6, megassena);
  // criarNumeros(15, lotofacil);
  
  
  const deletaNumeros = () => {
    // const container = document.getElementsByClassName('numeros-container')[0].lastElementChild.remove();
  
    // const numeros = container.getElementsByClassName("numero");
    const container = document.getElementsByClassName('numeros-container')[0]
    // for(let index = 0; index < container.children.length; index += 1){
    //   container.firstChild.remove();
    // }
  
    container.remove();
    criarContainer();
  
  }
  
  const nextGameButton = document.getElementById('nextGame');
  
  nextGameButton.addEventListener('click', () => {
    deletaNumeros();
    criarNumeros(6, megassena);
  })