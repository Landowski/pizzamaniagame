document.addEventListener('DOMContentLoaded', function () {
  // Configuração de som existente
  let sound = localStorage.getItem('sound');
  if (sound === null) {
    sound = true;
    localStorage.setItem('sound', 'true');
  } else {
    sound = sound === 'true';
  }

  // Elementos HTML
  const soundImage = document.getElementById('sound');
  const audio = new Audio('cash-register.mp3');
  const configSound = document.getElementById('configSound');
  const buttonMakePizza = document.getElementById('buttonMakePizza');
  const pizzaImage = document.getElementById('pizza-image');
  const buttonSellPizzas = document.getElementById('buttonSellPizzas');
  const containerPizza = document.querySelector('.container-pizza');
  const configReset = document.getElementById('configReset');
  
  // Elementos de exibição
  let counterPizzas = document.getElementById('counterPizzas');
  let counterPizzasPerSecond = document.getElementById('counterPizzasPerSecond');
  let counterMoney = document.getElementById('counterMoney');
  let counterChef = document.getElementById('counterChef');
  let counterDeliverer = document.getElementById('counterDeliverer');
  let counterVan = document.getElementById('counterVan');
  let counterPizzeria = document.getElementById('counterPizzeria');
  let priceChef = document.getElementById('priceChef');
  let priceDeliverer = document.getElementById('priceDeliverer');
  let priceVan = document.getElementById('priceVan');
  let pricePizzeria = document.getElementById('pricePizzeria');
  let buyChef = document.getElementById('buy-chef');
  let buyDeliverer = document.getElementById('buy-deliverer');
  let buyVan = document.getElementById('buy-van');
  let buyPizzeria = document.getElementById('buy-pizzeria');

  // Valores numéricos reais
  let pizzasCount = 0;
  let pizzasPerSecond = 0;
  let moneyCount = 0;
  let chefCount = 0;
  let delivererCount = 0;
  let vanCount = 0;
  let pizzeriaCount = 0;
  let chefPrice = 100;
  let delivererPrice = 500;
  let vanPrice = 1500;
  let pizzeriaPrice = 5000;
  
  // Contador de cliques e desbloqueios
  let totalClicks = 0;
  let unlocked = 'none'; // Pode ser 'none', 'coke' ou 'chocolate'
  let clickValue = 1; // Valor de cada clique (1, 5 ou 10)

  // Valores padrão para os preços dos itens
  const DEFAULT_PRICES = {
    chef: 100,
    deliverer: 500,
    van: 1500,
    pizzeria: 5000
  };

  // Contribuição de cada item para pizzas por segundo
  const PIZZAS_PER_SECOND = {
    chef: 1,
    deliverer: 5,
    van: 15,
    pizzeria: 50
  };

  function loadGameData() {
    // Carrega valores do localStorage ou usa valores padrão
    pizzasCount = parseInt(localStorage.getItem('pizzasCount') || 0);
    moneyCount = parseInt(localStorage.getItem('moneyCount') || 0);
    chefCount = parseInt(localStorage.getItem('chefCount') || 0);
    delivererCount = parseInt(localStorage.getItem('delivererCount') || 0);
    vanCount = parseInt(localStorage.getItem('vanCount') || 0);
    pizzeriaCount = parseInt(localStorage.getItem('pizzeriaCount') || 0);
    
    chefPrice = parseInt(localStorage.getItem('chefPrice') || DEFAULT_PRICES.chef);
    delivererPrice = parseInt(localStorage.getItem('delivererPrice') || DEFAULT_PRICES.deliverer);
    vanPrice = parseInt(localStorage.getItem('vanPrice') || DEFAULT_PRICES.van);
    pizzeriaPrice = parseInt(localStorage.getItem('pizzeriaPrice') || DEFAULT_PRICES.pizzeria);
    
    // Carrega o contador de cliques e desbloqueios
    totalClicks = parseInt(localStorage.getItem('totalClicks') || 0);
    unlocked = localStorage.getItem('unlocked') || 'none';
    
    // Define o valor de clique baseado no item desbloqueado
    updateClickValue();
    
    // Atualiza a imagem do botão baseado no item desbloqueado
    updatePizzaImage();
    
    // Atualiza interface com valores carregados
    updateDisplay();
  }

  function saveGameData() {
    // Salva os valores numéricos diretamente
    localStorage.setItem('pizzasCount', pizzasCount);
    localStorage.setItem('moneyCount', moneyCount);
    localStorage.setItem('chefCount', chefCount);
    localStorage.setItem('delivererCount', delivererCount);
    localStorage.setItem('vanCount', vanCount);
    localStorage.setItem('pizzeriaCount', pizzeriaCount);
    
    localStorage.setItem('chefPrice', chefPrice);
    localStorage.setItem('delivererPrice', delivererPrice);
    localStorage.setItem('vanPrice', vanPrice);
    localStorage.setItem('pizzeriaPrice', pizzeriaPrice);
    localStorage.setItem('pizzasPerSecond', pizzasPerSecond);
    
    // Salva o contador de cliques e desbloqueios
    localStorage.setItem('totalClicks', totalClicks);
    localStorage.setItem('unlocked', unlocked);
  }
  
  function updateClickValue() {
    if (unlocked === 'global') {
      clickValue = 1000;
    } else if (unlocked === 'master') {
      clickValue = 100;
    } else if (unlocked === 'chocolate') {
      clickValue = 10;
    } else if (unlocked === 'coke') {
      clickValue = 5;
    } else {
      clickValue = 1;
    }
  }
  
  function updatePizzaImage() {
    if (unlocked === 'global') {
      pizzaImage.src = 'images/button-make-pizza-5.png';
    } else if (unlocked === 'master') {
      pizzaImage.src = 'images/button-make-pizza-4.png';
    } else if (unlocked === 'chocolate') {
      pizzaImage.src = 'images/button-make-pizza-3.png';
    } else if (unlocked === 'coke') {
      pizzaImage.src = 'images/button-make-pizza-2.png';
    } else {
      pizzaImage.src = 'images/button-make-pizza.png';
    }
  }
  
  function checkUnlocks() {
    // Verifica se atingiu 200 cliques e ainda não desbloqueou global
    if (totalClicks >= 200 && unlocked !== 'global') {
      unlocked = 'global';
      updateClickValue();
      updatePizzaImage();
      alert('Você abriu uma pizzaria em cada país e cada clique vale 1.000!');
      saveGameData();
    }
    // Verifica se atingiu 150 cliques e ainda não desbloqueou master
    else if (totalClicks >= 150 && unlocked !== 'global' && unlocked !== 'master') {
      unlocked = 'master';
      updateClickValue();
      updatePizzaImage();
      alert('Você agora é o Rei da Pizza e cada clique vale 100!');
      saveGameData();
    }
    // Verifica se atingiu 100 cliques e ainda não desbloqueou chocolate
    else if (totalClicks >= 100 && unlocked !== 'global' && unlocked !== 'master' && unlocked !== 'chocolate') {
      unlocked = 'chocolate';
      updateClickValue();
      updatePizzaImage();
      alert('Você desbloqueou Chocolate! Cada clique agora vale 10 pizzas!');
      saveGameData();
    }
    // Verifica se atingiu 50 cliques e ainda não desbloqueou coca-cola
    else if (totalClicks >= 50 && unlocked !== 'global' && unlocked !== 'master' && unlocked !== 'chocolate' && unlocked !== 'coke') {
      unlocked = 'coke';
      updateClickValue();
      updatePizzaImage();
      alert('Você desbloqueou Coca-Cola! Cada clique agora vale 5 pizzas!');
      saveGameData();
    }
  }
  
  function updateDisplay() {
    // Atualiza todos os elementos de exibição com os valores formatados
    counterPizzas.textContent = formatarNumeroUS(pizzasCount);
    counterMoney.textContent = formatarNumeroUS(moneyCount);
    counterPizzasPerSecond.textContent = formatarNumeroUS(pizzasPerSecond);
    
    counterChef.textContent = formatarNumeroUS(chefCount);
    counterDeliverer.textContent = formatarNumeroUS(delivererCount);
    counterVan.textContent = formatarNumeroUS(vanCount);
    counterPizzeria.textContent = formatarNumeroUS(pizzeriaCount);
    
    priceChef.textContent = formatarNumeroUS(chefPrice);
    priceDeliverer.textContent = formatarNumeroUS(delivererPrice);
    priceVan.textContent = formatarNumeroUS(vanPrice);
    pricePizzeria.textContent = formatarNumeroUS(pizzeriaPrice);
    
    // Atualiza estados dos botões
    updateSellButtonState();
    updateBuyButtonsState();
  }

  function updateSoundIcon() {
    soundImage.src = sound ? 'images/config-sound-on.svg' : 'images/config-sound-off.svg';
  }
  updateSoundIcon();

  function updateSellButtonState() {
    if (pizzasCount === 0) {
      buttonSellPizzas.disabled = true;
      buttonSellPizzas.style.backgroundColor = 'rgb(151, 211, 178)';
      buttonSellPizzas.style.cursor = 'default';
    } else {
      buttonSellPizzas.disabled = false;
      buttonSellPizzas.style.backgroundColor = '#13CE66';
      buttonSellPizzas.style.cursor = 'pointer';
    }
  }

  function updateBuyButtonsState() {
    // Chef
    if (moneyCount >= chefPrice) {
      priceChef.classList.remove('off');
      priceChef.classList.add('on');
      buyChef.style.cursor = 'pointer';
    } else {
      priceChef.classList.remove('on');
      priceChef.classList.add('off');
      buyChef.style.cursor = 'default';
    }
    
    // Deliverer
    if (moneyCount >= delivererPrice) {
      priceDeliverer.classList.remove('off');
      priceDeliverer.classList.add('on');
      buyDeliverer.style.cursor = 'pointer';
    } else {
      priceDeliverer.classList.remove('on');
      priceDeliverer.classList.add('off');
      buyDeliverer.style.cursor = 'default';
    }
    
    // Van
    if (moneyCount >= vanPrice) {
      priceVan.classList.remove('off');
      priceVan.classList.add('on');
      buyVan.style.cursor = 'pointer';
    } else {
      priceVan.classList.remove('on');
      priceVan.classList.add('off');
      buyVan.style.cursor = 'default';
    }
    
    // Pizzeria
    if (moneyCount >= pizzeriaPrice) {
      pricePizzeria.classList.remove('off');
      pricePizzeria.classList.add('on');
      buyPizzeria.style.cursor = 'pointer';
    } else {
      pricePizzeria.classList.remove('on');
      pricePizzeria.classList.add('off');
      buyPizzeria.style.cursor = 'default';
    }
  }

  function updatePizzasPerSecond() {
    pizzasPerSecond = 
      chefCount * PIZZAS_PER_SECOND.chef + 
      delivererCount * PIZZAS_PER_SECOND.deliverer + 
      vanCount * PIZZAS_PER_SECOND.van + 
      pizzeriaCount * PIZZAS_PER_SECOND.pizzeria;
      
    // Atualiza a exibição
    counterPizzasPerSecond.textContent = formatarNumeroUS(pizzasPerSecond);
  }

  function buyItem(itemType) {
    let price;
    let count;
    
    switch(itemType) {
      case 'chef':
        price = chefPrice;
        if (moneyCount >= price) {
          moneyCount -= price;
          chefCount++;
          
          // Atualiza o preço (aumenta em um percentual aleatório entre 10% e 100%)
          const percentIncrease = Math.random() * 90 + 10; // Gera um número entre 10 e 100
          chefPrice = Math.round(price * (1 + percentIncrease / 100));
          
          createFloatingText('+1 Chef');
        }
        break;
      case 'deliverer':
        price = delivererPrice;
        if (moneyCount >= price) {
          moneyCount -= price;
          delivererCount++;
          
          const percentIncrease = Math.random() * 90 + 10;
          delivererPrice = Math.round(price * (1 + percentIncrease / 100));
          
          createFloatingText('+1 Deliverer');
        }
        break;
      case 'van':
        price = vanPrice;
        if (moneyCount >= price) {
          moneyCount -= price;
          vanCount++;
          
          const percentIncrease = Math.random() * 90 + 10;
          vanPrice = Math.round(price * (1 + percentIncrease / 100));
          
          createFloatingText('+1 Van');
        }
        break;
      case 'pizzeria':
        price = pizzeriaPrice;
        if (moneyCount >= price) {
          moneyCount -= price;
          pizzeriaCount++;
          
          const percentIncrease = Math.random() * 90 + 10;
          pizzeriaPrice = Math.round(price * (1 + percentIncrease / 100));
          
          createFloatingText('+1 Pizzeria');
        }
        break;
    }
    
    // Atualiza pizzas por segundo
    updatePizzasPerSecond();
    
    // Atualiza a exibição
    updateDisplay();
    
    // Salva o jogo
    saveGameData();
    
    // Efeito sonoro
    if (sound && moneyCount >= price) {
      audio.play();
    }
  }

  buttonMakePizza.addEventListener('click', function () {
    // Incrementa o contador de cliques totais
    totalClicks++;
    
    // Adiciona o valor de pizzas baseado no desbloqueio atual
    pizzasCount += clickValue;
    
    // Verifica se desbloqueou algum item
    checkUnlocks();
    
    updateDisplay();
    saveGameData();
    
    // Cria o texto flutuante com o valor correto
    createFloatingText('+' + clickValue);
  });

  buttonSellPizzas.addEventListener('click', function () {
    if (pizzasCount > 0) {
      moneyCount += pizzasCount;
      pizzasCount = 0;
      updateDisplay();
      saveGameData();
      if (sound) {
        audio.play();
      }
    }
  });

  // Adiciona eventos de clique para os botões de compra
  buyChef.addEventListener('click', function() {
    buyItem('chef');
  });
  
  buyDeliverer.addEventListener('click', function() {
    buyItem('deliverer');
  });
  
  buyVan.addEventListener('click', function() {
    buyItem('van');
  });
  
  buyPizzeria.addEventListener('click', function() {
    buyItem('pizzeria');
  });

  configSound.addEventListener('click', function () {
    sound = !sound;
    localStorage.setItem('sound', sound);
    updateSoundIcon();
  });

  configReset.addEventListener('click', resetGame);

  function createFloatingText(text) {
    const floatingText = document.createElement('span');
    floatingText.textContent = text;
    floatingText.classList.add('floating-text');

    const containerRect = containerPizza.getBoundingClientRect();

    const x = Math.random() * (containerRect.width - 40);
    const y = Math.random() * (containerRect.height - 40);

    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y}px`;

    containerPizza.style.position = 'relative';
    floatingText.style.position = 'absolute';

    containerPizza.appendChild(floatingText);

    setTimeout(() => {
      floatingText.remove();
    }, 1000);
  }

  function formatarNumeroUS(numero) {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0
    }).format(numero);
  }

  // Função para gerar pizzas automaticamente baseado nos itens comprados
  function generateAutomaticPizzas() {
    if (pizzasPerSecond > 0) {
      pizzasCount += pizzasPerSecond;
      updateDisplay();
      saveGameData();
    }
  }

  // Adicione esta função para resetar o jogo
function resetGame() {
  // Pede confirmação ao usuário
  if (confirm('Tem certeza que deseja resetar o jogo? Todo o progresso será perdido!')) {
    // Reseta todos os valores para o padrão
    pizzasCount = 0;
    pizzasPerSecond = 0;
    moneyCount = 0;
    chefCount = 0;
    delivererCount = 0;
    vanCount = 0;
    pizzeriaCount = 0;
    
    chefPrice = DEFAULT_PRICES.chef;
    delivererPrice = DEFAULT_PRICES.deliverer;
    vanPrice = DEFAULT_PRICES.van;
    pizzeriaPrice = DEFAULT_PRICES.pizzeria;
    
    totalClicks = 0;
    unlocked = 'none';
    clickValue = 1;
    
    // Atualiza a imagem do botão para o padrão
    updatePizzaImage();
    
    // Limpa o localStorage
    localStorage.removeItem('pizzasCount');
    localStorage.removeItem('moneyCount');
    localStorage.removeItem('chefCount');
    localStorage.removeItem('delivererCount');
    localStorage.removeItem('vanCount');
    localStorage.removeItem('pizzeriaCount');
    localStorage.removeItem('chefPrice');
    localStorage.removeItem('delivererPrice');
    localStorage.removeItem('vanPrice');
    localStorage.removeItem('pizzeriaPrice');
    localStorage.removeItem('pizzasPerSecond');
    localStorage.removeItem('totalClicks');
    localStorage.removeItem('unlocked');
    
    // Atualiza a interface
    updateDisplay();
  }
}

  loadGameData();
  updatePizzasPerSecond();
  updateDisplay();

  // Salva o jogo a cada 10 segundos
  setInterval(saveGameData, 10000);
  
  // Gera pizzas automaticamente a cada segundo
  setInterval(generateAutomaticPizzas, 1000);
});