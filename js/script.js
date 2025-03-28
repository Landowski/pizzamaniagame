document.addEventListener('DOMContentLoaded', function () {
  let sound = localStorage.getItem('sound');
  if (sound === null) {
    sound = true;
    localStorage.setItem('sound', 'true');
  } else {
    sound = sound === 'true';
  }

  const elementsToToggle = document.querySelectorAll('.container, .container-buy, .header-counters-items, #money-counter, #counterMoney, #counterChef, #counterDeliverer, #counterVan, #counterPizzeria, #nameChef, #nameDeliverer, #nameVan, #namePizzeria');
  const configDarkMode  = document.getElementById('configDarkMode');

  let darkMode = localStorage.getItem('darkMode') === 'true';
  if (darkMode) {
    document.body.classList.add('dark');
    elementsToToggle.forEach(element => {
      element.classList.add('dark');
    });
  }
  configDarkMode.addEventListener('click', function() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    
    document.body.classList.toggle('dark');
    elementsToToggle.forEach(element => {
      element.classList.toggle('dark');
    });
  });

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
  
  let currentLanguage = localStorage.getItem('language') || 'en';
  const soundImage = document.getElementById('sound');
  const audio = new Audio('sound/cash.mp3');
  const popSound = new Audio('sound/pop.mp3');
  const configSound = document.getElementById('configSound');
  const buttonMakePizza = document.getElementById('buttonMakePizza');
  const pizzaImage = document.getElementById('pizza-image');
  const buttonSellPizzas = document.getElementById('buttonSellPizzas');
  const containerPizza = document.querySelector('.container-pizza');
  const configReset = document.getElementById('configReset');
  const configInfo = document.getElementById("configInfo");
  const popupInfo = document.getElementById("popup-info");
  const buttonClosePopupInfo = document.getElementById("buttonClosePopupInfo");
  const configLang = document.getElementById("configLang");
  const popupLang = document.getElementById("popup-lang");
  const buttonClosePopupLang = document.getElementById("buttonClosePopupLang");

  let nameChef = document.getElementById('nameChef');
  let nameDeliverer = document.getElementById('nameDeliverer');
  let nameVan = document.getElementById('nameVan');
  let namePizzeria = document.getElementById('namePizzeria');
  let chooseLanguage = document.getElementById('chooseLanguage');
  let textPizzasMade = document.getElementById('textPizzasMade');
  let textPizzasPerSecond = document.getElementById('textPizzasPerSecond');
  let textPizzaMakerButton = document.getElementById('textPizzaMakerButton');
  let textSellPizzas = document.getElementById('textSellPizzas');
  let textYourMoney = document.getElementById('textYourMoney');
  let textPizzaChef = document.getElementById('textPizzaChef');
  let textDeliverer = document.getElementById('textDeliverer');
  let textVan = document.getElementById('textVan');
  let textPizzeria = document.getElementById('textPizzeria');
  let textSound = document.getElementById('textSound');
  let textChooseLanguage = document.getElementById('textChooseLanguage');
  let textDarkMode = document.getElementById('textDarkMode');
  let textReset = document.getElementById('textReset');
  let textMoreClicks = document.getElementById('textMoreClicks');
  let textPrivacyPolicy = document.getElementById('textPrivacyPolicy');
  
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

  const translations = {
    'en': {
      buttonSellPizzas: 'SELL ALL PIZZAS!',
      nameChef: 'PIZZA CHEF',
      nameDeliverer: 'DELIVERER',
      nameVan: 'VAN',
      namePizzeria: 'PIZZERIA',
      chooseLanguage: 'Choose your language (it will be saved as your preference):',
      textPizzasMade: 'Total pizzas made',
      textPizzasPerSecond: 'Total pizzas per second',
      textPizzaMakerButton: 'Pizza maker button',
      textSellPizzas: 'Sell all the pizzas you make and earn money',
      textYourMoney: 'Your money',
      textPizzaChef: 'Pizza Chef: add +1 pizza per second',
      textDeliverer: 'Deliverer: add +5 pizzas per second',
      textVan: 'Van: add +15 pizzas per second',
      textPizzeria: 'Pizzeria: add +50 pizzas per second',
      textSound: 'Turn sounds on/off',
      textChooseLanguage: 'Choose other languages',
      textDarkMode: 'Turn dark mode on/off',
      textReset: 'Reset the whole game',
      textMoreClicks: '🏆 The more you click, the more rewards you earn! Can you reach 1 million clicks and see what happens?',
      textPrivacyPolicy: 'Privacy page about Pizza Mania',
      textResetGame: 'Are you sure you want to reset the game? All progress will be lost!',
      toastUnlockGlobal: '🏆 UNLOCKED +1,000 PIZZAS PER CLICK: owner of a world pizzeria for five hundred thousand clicks! ✖',
      toastUnlockMaster: '🏆 UNLOCKED +100 PIZZAS PER CLICK: recognition of "KING OF PIZZA" for three hundred thousand clicks! ✖',
      toastUnlockChocolate: '🏆 UNLOCKED +10 PIZZAS PER CLICK: pizza + soda pop + chocolate combo for one hundred thousand clicks! ✖',
      toastUnlockCoke: '🏆 UNLOCKED +5 PIZZAS PER CLICK: pizza + soda pop combo for ten thousand clicks! ✖',
      toastUnlockThousand: '🏆 UNLOCKED +1,000 PIZZAS PER SECOND: bonus for one million clicks! ✖',
      toastClickReward: '🏆 UNLOCKED +1 PIZZA PER CLICK: click reward for {clicks} clicks! ✖'
    },
    'pt-br': {
      buttonSellPizzas: 'VENDER TODAS AS PIZZAS!',
      nameChef: 'PIZZAIOLO',
      nameDeliverer: 'ENTREGADOR',
      nameVan: 'VAN',
      namePizzeria: 'PIZZARIA',
      chooseLanguage: 'Escolha seu idioma (será salvo como sua preferência):',
      textPizzasMade: 'Total de pizzas feitas',
      textPizzasPerSecond: 'Total de pizzas por segundo',
      textPizzaMakerButton: 'Botão de fazer pizza',
      textSellPizzas: 'Venda todas as pizzas que você fez e ganhe dinheiro',
      textYourMoney: 'Seu dinheiro',
      textPizzaChef: 'Pizzaiolo: adiciona +1 pizza por segundo',
      textDeliverer: 'Entregador: adiciona +5 pizzas por segundo',
      textVan: 'Van: adiciona +15 pizzas por segundo',
      textPizzeria: 'Pizzaria: adiciona +50 pizzas por segundo',
      textSound: 'Ligar/desligar sons',
      textChooseLanguage: 'Escolher outros idiomas',
      textDarkMode: 'Ativar/desativar modo escuro',
      textReset: 'Resetar todo o jogo',
      textMoreClicks: '🏆 Quanto mais você clica, mais recompensas ganha! Consegue chegar a 1 milhão de cliques e ver o que acontece?',
      textPrivacyPolicy: 'Página de privacidade sobre Pizza Mania',
      textResetGame: 'Tem certeza que deseja resetar o jogo? Todo o progresso será perdido!',
      toastUnlockGlobal: '🏆 DESBLOQUEADO +1.000 PIZZAS POR CLIQUE: dono de uma pizzaria mundial por quinhentos mil cliques! ✖',
      toastUnlockMaster: '🏆 DESBLOQUEADO +100 PIZZAS POR CLIQUE: reconhecimento de "REI DA PIZZA" por trezentos mil cliques! ✖',
      toastUnlockChocolate: '🏆 DESBLOQUEADO +10 PIZZAS POR CLIQUE: combo de pizza + refrigerante + chocolate por cem mil cliques! ✖',
      toastUnlockCoke: '🏆 DESBLOQUEADO +5 PIZZAS POR CLIQUE: combo de pizza + refrigerante por dez mil cliques! ✖',
      toastUnlockThousand: '🏆 DESBLOQUEADO +1.000 PIZZAS POR SEGUNDO: bônus por um milhão de cliques! ✖',
      toastClickReward: '🏆 DESBLOQUEADO +1 PIZZA POR CLIQUE: recompensa por {clicks} cliques! ✖'
    },
    'es': {
      buttonSellPizzas: '¡VENDER TODAS LAS PIZZAS!',
      nameChef: 'CHEF DE PIZZA',
      nameDeliverer: 'REPARTIDOR',
      nameVan: 'FURGONETA',
      namePizzeria: 'PIZZERÍA',
      chooseLanguage: 'Elige tu idioma (se guardará como tu preferencia):',
      textPizzasMade: 'Total de pizzas hechas',
      textPizzasPerSecond: 'Total de pizzas por segundo',
      textPizzaMakerButton: 'Botón para hacer pizza',
      textSellPizzas: 'Vende todas las pizzas que haces y gana dinero',
      textYourMoney: 'Tu dinero',
      textPizzaChef: 'Chef de Pizza: añade +1 pizza por segundo',
      textDeliverer: 'Repartidor: añade +5 pizzas por segundo',
      textVan: 'Furgoneta: añade +15 pizzas por segundo',
      textPizzeria: 'Pizzería: añade +50 pizzas por segundo',
      textSound: 'Activar/desactivar sonidos',
      textChooseLanguage: 'Elegir otros idiomas',
      textDarkMode: 'Activar/desactivar modo oscuro',
      textReset: 'Reiniciar todo el juego',
      textMoreClicks: '🏆 ¡Cuanto más haces clic, más recompensas ganas! ¿Puedes llegar a 1 millón de clics y ver qué pasa?',
      textPrivacyPolicy: 'Página de privacidad sobre Pizza Mania',
      textResetGame: '¿Estás seguro de que quieres reiniciar el juego? ¡Todo el progreso se perderá!',
      toastUnlockGlobal: '🏆 DESBLOQUEADO +1.000 PIZZAS POR CLIC: dueño de una pizzería mundial por quinientos mil clics! ✖',
      toastUnlockMaster: '🏆 DESBLOQUEADO +100 PIZZAS POR CLIC: reconocimiento de "REY DE LA PIZZA" por trescientos mil clics! ✖',
      toastUnlockChocolate: '🏆 DESBLOQUEADO +10 PIZZAS POR CLIC: combo de pizza + refresco + chocolate por cien mil clics! ✖',
      toastUnlockCoke: '🏆 DESBLOQUEADO +5 PIZZAS POR CLIC: combo de pizza + refresco por diez mil clics! ✖',
      toastUnlockThousand: '🏆 DESBLOQUEADO +1.000 PIZZAS POR SEGUNDO: bono por un millón de clics! ✖',
      toastClickReward: '🏆 DESBLOQUEADO +1 PIZZA POR CLIC: recompensa por {clicks} clics! ✖'
    },
    'ja': {
      buttonSellPizzas: 'すべてのピザを売る！',
      nameChef: 'ピザシェフ',
      nameDeliverer: '配達人',
      nameVan: '配達車',
      namePizzeria: 'ピザ屋',
      chooseLanguage: '言語を選択してください（設定として保存されます）：',
      textPizzasMade: '作ったピザの合計',
      textPizzasPerSecond: '1秒あたりのピザの合計',
      textPizzaMakerButton: 'ピザ作成ボタン',
      textSellPizzas: '作ったピザをすべて売ってお金を稼ぐ',
      textYourMoney: 'あなたのお金',
      textPizzaChef: 'ピザシェフ：1秒あたり+1ピザ追加',
      textDeliverer: '配達人：1秒あたり+5ピザ追加',
      textVan: '配達車：1秒あたり+15ピザ追加',
      textPizzeria: 'ピザ屋：1秒あたり+50ピザ追加',
      textSound: 'サウンドのオン/オフ',
      textChooseLanguage: '他の言語を選択',
      textDarkMode: 'ダークモードのオン/オフ',
      textReset: 'ゲーム全体をリセット',
      textMoreClicks: '🏆 クリックすればするほど、より多くの報酬を獲得できます！100万回クリックして何が起こるか見てみませんか？',
      textPrivacyPolicy: 'Pizza Maniaのプライバシーページ',
      textResetGame: 'ゲームをリセットしますか？すべての進行状況が失われます！',
      toastUnlockGlobal: '🏆 クリックごとに+1,000ピザを解除：50万クリックで世界のピザ屋のオーナー！ ✖',
      toastUnlockMaster: '🏆 クリックごとに+100ピザを解除：30万クリックで「ピザの王」の称号を獲得！ ✖',
      toastUnlockChocolate: '🏆 クリックごとに+10ピザを解除：10万クリックでピザ＋ソーダ＋チョコレートのコンボ！ ✖',
      toastUnlockCoke: '🏆 クリックごとに+5ピザを解除：1万クリックでピザ＋ソーダのコンボ！ ✖',
      toastUnlockThousand: '🏆 秒ごとに+1,000ピザを解除：100万クリックのボーナス！ ✖',
      toastClickReward: '🏆 クリックごとに+1ピザを解除：{clicks}クリックの報酬！ ✖'
    },
    'ru': {
      buttonSellPizzas: 'ПРОДАТЬ ВСЕ ПИЦЦЫ!',
      nameChef: 'ПОВАР ПИЦЦЫ',
      nameDeliverer: 'ДОСТАВЩИК',
      nameVan: 'ФУРГОН',
      namePizzeria: 'ПИЦЦЕРИЯ',
      chooseLanguage: 'Выберите язык (будет сохранен в качестве вашего предпочтения):',
      textPizzasMade: 'Всего приготовлено пицц',
      textPizzasPerSecond: 'Всего пицц в секунду',
      textPizzaMakerButton: 'Кнопка приготовления пиццы',
      textSellPizzas: 'Продайте все свои пиццы и заработайте деньги',
      textYourMoney: 'Ваши деньги',
      textPizzaChef: 'Повар пиццы: добавляет +1 пиццу в секунду',
      textDeliverer: 'Доставщик: добавляет +5 пицц в секунду',
      textVan: 'Фургон: добавляет +15 пицц в секунду',
      textPizzeria: 'Пиццерия: добавляет +50 пицц в секунду',
      textSound: 'Включить/выключить звуки',
      textChooseLanguage: 'Выбрать другие языки',
      textDarkMode: 'Включить/выключить темный режим',
      textReset: 'Сбросить всю игру',
      textMoreClicks: '🏆 Чем больше вы кликаете, тем больше наград получаете! Сможете ли вы достичь 1 миллиона кликов и увидеть, что произойдет?',
      textPrivacyPolicy: 'Страница конфиденциальности о Pizza Mania',
      textResetGame: 'Вы уверены, что хотите сбросить игру? Весь прогресс будет потерян!',
      toastUnlockGlobal: '🏆 РАЗБЛОКИРОВАНО +1,000 ПИЦЦ ЗА КЛИК: владелец мировой пиццерии за пятьсот тысяч кликов! ✖',
      toastUnlockMaster: '🏆 РАЗБЛОКИРОВАНО +100 ПИЦЦ ЗА КЛИК: признание "КОРОЛЯ ПИЦЦЫ" за триста тысяч кликов! ✖',
      toastUnlockChocolate: '🏆 РАЗБЛОКИРОВАНО +10 ПИЦЦ ЗА КЛИК: комбо пицца + газировка + шоколад за сто тысяч кликов! ✖',
      toastUnlockCoke: '🏆 РАЗБЛОКИРОВАНО +5 ПИЦЦ ЗА КЛИК: комбо пицца + газировка за десять тысяч кликов! ✖',
      toastUnlockThousand: '🏆 РАЗБЛОКИРОВАНО +1,000 ПИЦЦ В СЕКУНДУ: бонус за миллион кликов! ✖',
      toastClickReward: '🏆 РАЗБЛОКИРОВАНО +1 ПИЦЦА ЗА КЛИК: награда за {clicks} кликов! ✖'
    },
    'zh': {
      buttonSellPizzas: '出售所有比萨饼！',
      nameChef: '比萨厨师',
      nameDeliverer: '送货员',
      nameVan: '送货车',
      namePizzeria: '比萨店',
      chooseLanguage: '选择您的语言（将被保存为您的偏好）：',
      textPizzasMade: '制作的比萨饼总数',
      textPizzasPerSecond: '每秒比萨饼总数',
      textPizzaMakerButton: '比萨饼制作按钮',
      textSellPizzas: '出售您制作的所有比萨饼并赚钱',
      textYourMoney: '您的资金',
      textPizzaChef: '比萨厨师：每秒增加+1个比萨饼',
      textDeliverer: '送货员：每秒增加+5个比萨饼',
      textVan: '送货车：每秒增加+15个比萨饼',
      textPizzeria: '比萨店：每秒增加+50个比萨饼',
      textSound: '开启/关闭声音',
      textChooseLanguage: '选择其他语言',
      textDarkMode: '开启/关闭黑暗模式',
      textReset: '重置整个游戏',
      textMoreClicks: '🏆 点击越多，获得的奖励越多！您能达到100万次点击并查看会发生什么吗？',
      textPrivacyPolicy: '关于Pizza Mania的隐私页面',
      textResetGame: '您确定要重置游戏吗？所有进度都将丢失！',
      toastUnlockGlobal: '🏆 解锁每次点击+1,000比萨饼：五十万点击成为世界比萨店老板！ ✖',
      toastUnlockMaster: '🏆 解锁每次点击+100比萨饼：三十万点击获得“比萨之王”称号！ ✖',
      toastUnlockChocolate: '🏆 解锁每次点击+10比萨饼：十万点击获得比萨+汽水+巧克力组合！ ✖',
      toastUnlockCoke: '🏆 解锁每次点击+5比萨饼：一万点击获得比萨+汽水组合！ ✖',
      toastUnlockThousand: '🏆 解锁每秒+1,000比萨饼：一百万点击的奖励！ ✖',
      toastClickReward: '🏆 解锁每次点击+1比萨饼：{clicks}点击的奖励！ ✖'
    },
    'it': {
      buttonSellPizzas: 'VENDI TUTTE LE PIZZE!',
      nameChef: 'CHEF DI PIZZA',
      nameDeliverer: 'FATTORINO',
      nameVan: 'FURGONE',
      namePizzeria: 'PIZZERIA',
      chooseLanguage: 'Scegli la tua lingua (sarà salvata come tua preferenza):',
      textPizzasMade: 'Totale pizze preparate',
      textPizzasPerSecond: 'Totale pizze al secondo',
      textPizzaMakerButton: 'Pulsante per fare la pizza',
      textSellPizzas: 'Vendi tutte le pizze che hai fatto e guadagna denaro',
      textYourMoney: 'I tuoi soldi',
      textPizzaChef: 'Chef di Pizza: aggiunge +1 pizza al secondo',
      textDeliverer: 'Fattorino: aggiunge +5 pizze al secondo',
      textVan: 'Furgone: aggiunge +15 pizze al secondo',
      textPizzeria: 'Pizzeria: aggiunge +50 pizze al secondo',
      textSound: 'Attiva/disattiva suoni',
      textChooseLanguage: 'Scegli altre lingue',
      textDarkMode: 'Attiva/disattiva modalità scura',
      textReset: 'Reimposta tutto il gioco',
      textMoreClicks: '🏆 Più clicchi, più ricompense guadagni! Puoi raggiungere 1 milione di clic e vedere cosa succede?',
      textPrivacyPolicy: 'Pagina sulla privacy di Pizza Mania',
      textResetGame: 'Sei sicuro di voler reimpostare il gioco? Tutti i progressi andranno persi!',
      toastUnlockGlobal: '🏆 SBLOCCATO +1.000 PIZZE PER CLICK: proprietario di una pizzeria mondiale per cinquecentomila click! ✖',
      toastUnlockMaster: '🏆 SBLOCCATO +100 PIZZE PER CLICK: riconoscimento di "RE DELLA PIZZA" per trecentomila click! ✖',
      toastUnlockChocolate: '🏆 SBLOCCATO +10 PIZZE PER CLICK: combo pizza + bibita + cioccolato per centomila click! ✖',
      toastUnlockCoke: '🏆 SBLOCCATO +5 PIZZE PER CLICK: combo pizza + bibita per diecimila click! ✖',
      toastUnlockThousand: '🏆 SBLOCCATO +1.000 PIZZE AL SECONDO: bonus per un milione di click! ✖',
      toastClickReward: '🏆 SBLOCCATO +1 PIZZA PER CLICK: ricompensa per {clicks} click! ✖'
    },
    'de': {
      buttonSellPizzas: 'ALLE PIZZEN VERKAUFEN!',
      nameChef: 'PIZZAKOCH',
      nameDeliverer: 'LIEFERANT',
      nameVan: 'LIEFERWAGEN',
      namePizzeria: 'PIZZERIA',
      chooseLanguage: 'Wähle deine Sprache (wird als deine Präferenz gespeichert):',
      textPizzasMade: 'Insgesamt hergestellte Pizzen',
      textPizzasPerSecond: 'Pizzen pro Sekunde insgesamt',
      textPizzaMakerButton: 'Pizza-Herstellungsknopf',
      textSellPizzas: 'Verkaufe alle Pizzen, die du herstellst, und verdiene Geld',
      textYourMoney: 'Dein Geld',
      textPizzaChef: 'Pizzakoch: fügt +1 Pizza pro Sekunde hinzu',
      textDeliverer: 'Lieferant: fügt +5 Pizzen pro Sekunde hinzu',
      textVan: 'Lieferwagen: fügt +15 Pizzen pro Sekunde hinzu',
      textPizzeria: 'Pizzeria: fügt +50 Pizzen pro Sekunde hinzu',
      textSound: 'Ton ein-/ausschalten',
      textChooseLanguage: 'Andere Sprachen wählen',
      textDarkMode: 'Dunkelmodus ein-/ausschalten',
      textReset: 'Gesamtes Spiel zurücksetzen',
      textMoreClicks: '🏆 Je mehr du klickst, desto mehr Belohnungen erhältst du! Kannst du 1 Million Klicks erreichen und sehen, was passiert?',
      textPrivacyPolicy: 'Datenschutzseite über Pizza Mania',
      textResetGame: 'Bist du sicher, dass du das Spiel zurücksetzen möchtest? Alle Fortschritte gehen verloren!',
      toastUnlockGlobal: '🏆 FREIGESCHALTET +1.000 PIZZEN PRO KLICK: Besitzer einer weltweiten Pizzeria für fünfhunderttausend Klicks! ✖',
      toastUnlockMaster: '🏆 FREIGESCHALTET +100 PIZZEN PRO KLICK: Anerkennung als "KÖNIG DER PIZZA" für dreihunderttausend Klicks! ✖',
      toastUnlockChocolate: '🏆 FREIGESCHALTET +10 PIZZEN PRO KLICK: Pizza + Limo + Schokolade Combo für einhunderttausend Klicks! ✖',
      toastUnlockCoke: '🏆 FREIGESCHALTET +5 PIZZEN PRO KLICK: Pizza + Limo Combo für zehntausend Klicks! ✖',
      toastUnlockThousand: '🏆 FREIGESCHALTET +1.000 PIZZEN PRO SEKUNDE: Bonus für eine Million Klicks! ✖',
      toastClickReward: '🏆 FREIGESCHALTET +1 PIZZA PRO KLICK: Belohnung für {clicks} Klicks! ✖'
    },
    'ko': {
      buttonSellPizzas: '모든 피자 판매!',
      nameChef: '피자 셰프',
      nameDeliverer: '배달원',
      nameVan: '밴',
      namePizzeria: '피자가게',
      chooseLanguage: '언어를 선택하세요 (설정으로 저장됩니다):',
      textPizzasMade: '만든 피자 총량',
      textPizzasPerSecond: '초당 피자 총량',
      textPizzaMakerButton: '피자 만들기 버튼',
      textSellPizzas: '만든 모든 피자를 판매하고 돈을 벌어보세요',
      textYourMoney: '당신의 돈',
      textPizzaChef: '피자 셰프: 초당 +1 피자 추가',
      textDeliverer: '배달원: 초당 +5 피자 추가',
      textVan: '밴: 초당 +15 피자 추가',
      textPizzeria: '피자가게: 초당 +50 피자 추가',
      textSound: '소리 켜기/끄기',
      textChooseLanguage: '다른 언어 선택',
      textDarkMode: '다크 모드 켜기/끄기',
      textReset: '게임 전체 재설정',
      textMoreClicks: '🏆 더 많이 클릭할수록 더 많은 보상을 얻습니다! 100만 번 클릭하고 무슨 일이 일어나는지 확인할 수 있을까요?',
      textPrivacyPolicy: 'Pizza Mania 개인정보 보호 페이지',
      textResetGame: '게임을 재설정하시겠습니까? 모든 진행 상황이 손실됩니다!',
      toastUnlockGlobal: '🏆 클릭당 +1,000피자 해제: 50만 클릭으로 세계 피자 가게 주인! ✖',
      toastUnlockMaster: '🏆 클릭당 +100피자 해제: 30만 클릭으로 "피자의 왕" 칭호 획득! ✖',
      toastUnlockChocolate: '🏆 클릭당 +10피자 해제: 10만 클릭으로 피자 + 탄산음료 + 초콜릿 콤보! ✖',
      toastUnlockCoke: '🏆 클릭당 +5피자 해제: 1만 클릭으로 피자 + 탄산음료 콤보! ✖',
      toastUnlockThousand: '🏆 초당 +1,000피자 해제: 100만 클릭 보너스! ✖',
      toastClickReward: '🏆 클릭당 +1피자 해제: {clicks}클릭 보상! ✖'
    },
    'fr': {
      buttonSellPizzas: 'VENDRE TOUTES LES PIZZAS !',
      nameChef: 'CHEF PIZZA',
      nameDeliverer: 'LIVREUR',
      nameVan: 'CAMIONNETTE',
      namePizzeria: 'PIZZERIA',
      chooseLanguage: 'Choisissez votre langue (elle sera enregistrée comme votre préférence) :',
      textPizzasMade: 'Total des pizzas faites',
      textPizzasPerSecond: 'Total des pizzas par seconde',
      textPizzaMakerButton: 'Bouton de fabrication de pizza',
      textSellPizzas: 'Vendez toutes les pizzas que vous faites et gagnez de l\'argent',
      textYourMoney: 'Votre argent',
      textPizzaChef: 'Chef Pizza : ajoute +1 pizza par seconde',
      textDeliverer: 'Livreur : ajoute +5 pizzas par seconde',
      textVan: 'Camionnette : ajoute +15 pizzas par seconde',
      textPizzeria: 'Pizzeria : ajoute +50 pizzas par seconde',
      textSound: 'Activer/désactiver les sons',
      textChooseLanguage: 'Choisir d\'autres langues',
      textDarkMode: 'Activer/désactiver le mode sombre',
      textReset: 'Réinitialiser tout le jeu',
      textMoreClicks: '🏆 Plus vous cliquez, plus vous gagnez de récompenses ! Pouvez-vous atteindre 1 million de clics et voir ce qui se passe ?',
      textPrivacyPolicy: 'Page de confidentialité sur Pizza Mania',
      textResetGame: 'Êtes-vous sûr de vouloir réinitialiser le jeu ? Tous les progrès seront perdus !',
      toastUnlockGlobal: '🏆 DÉBLOQUÉ +1.000 PIZZAS PAR CLIC : propriétaire d\'une pizzeria mondiale pour cinq cent mille clics ! ✖',
      toastUnlockMaster: '🏆 DÉBLOQUÉ +100 PIZZAS PAR CLIC : reconnaissance de "ROI DE LA PIZZA" pour trois cent mille clics ! ✖',
      toastUnlockChocolate: '🏆 DÉBLOQUÉ +10 PIZZAS PAR CLIC : combo pizza + soda + chocolat pour cent mille clics ! ✖',
      toastUnlockCoke: '🏆 DÉBLOQUÉ +5 PIZZAS PAR CLIC : combo pizza + soda pour dix mille clics ! ✖',
      toastUnlockThousand: '🏆 DÉBLOQUÉ +1.000 PIZZAS PAR SECONDE : bonus pour un million de clics ! ✖',
      toastClickReward: '🏆 DÉBLOQUÉ +1 PIZZA PAR CLIC : récompense pour {clicks} clics ! ✖'
    }
  };

  function applyTranslation() {
    if (!translations[currentLanguage]) {
      currentLanguage = 'en';
    }
    const texts = translations[currentLanguage];
    buttonSellPizzas.textContent = texts.buttonSellPizzas;
    nameChef.textContent = texts.nameChef;
    nameDeliverer.textContent = texts.nameDeliverer;
    nameVan.textContent = texts.nameVan;
    namePizzeria.textContent = texts.namePizzeria;
    chooseLanguage.textContent = texts.chooseLanguage;
    textPizzasMade.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d0d0d0"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="rotate: 180deg;"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" /><path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" /><path d="M13 11.01v-.01" /><path d="M11 14v-.01" /></svg>${texts.textPizzasMade}`;
    textPizzasPerSecond.innerHTML = `<img src="images/counter-clock.svg" width="24" height="24">${texts.textPizzasPerSecond}`;
    textPizzaMakerButton.innerHTML = `<img src="images/button-make-pizza.png" width="24" height="24">${texts.textPizzaMakerButton}`;
    textSellPizzas.innerHTML = `<span>SELL</span>${texts.textSellPizzas}`;
    textYourMoney.innerHTML = `<img src="images/money-counter.svg" width="24" height="24">${texts.textYourMoney}`;
    textPizzaChef.innerHTML = `<img src="images/buy-pizza-chef.png" width="24" height="24">${texts.textPizzaChef}`;
    textDeliverer.innerHTML = `<img src="images/buy-delivery-person.png" width="24" height="24">${texts.textDeliverer}`;
    textVan.innerHTML = `<img src="images/buy-delivery-van.png" width="24" height="24">${texts.textVan}`;
    textPizzeria.innerHTML = `<img src="images/buy-pizzeria.png" width="24" height="24">${texts.textPizzeria}`;
    textSound.innerHTML = `<img src="images/config-sound-on.svg" width="24" height="24">${texts.textSound}`;
    textChooseLanguage.innerHTML = `<img src="images/config-language.svg" width="24" height="24">${texts.textChooseLanguage}`;
    textDarkMode.innerHTML = `<img src="images/config-dark.svg" width="24" height="24">${texts.textDarkMode}`;
    textReset.innerHTML = `<img src="images/config-reset.svg" width="24" height="24">${texts.textReset}`;
    textMoreClicks.innerHTML = `<strong>${texts.textMoreClicks}</strong>`;
    textPrivacyPolicy.textContent = texts.textPrivacyPolicy;
  }

  const languageSelect = document.getElementById('language-select');
  languageSelect.value = currentLanguage;

  languageSelect.addEventListener("change", function() {
    const selectedLang = languageSelect.value;
    changeLanguage(selectedLang);
  });

  function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    applyTranslation();
  }

  buttonClosePopupLang.addEventListener("click", function() {
    popupLang.classList.toggle('hidden');
  });

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
  
  let totalClicks = 0;
  let unlocked = 'none';
  let clickValue = 1;
  let thousand = false;

  const DEFAULT_PRICES = {
    chef: 100,
    deliverer: 500,
    van: 1500,
    pizzeria: 5000
  };

  const PIZZAS_PER_SECOND = {
    chef: 1,
    deliverer: 5,
    van: 15,
    pizzeria: 50
  };

  function loadGameData() {
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
    totalClicks = parseInt(localStorage.getItem('totalClicks') || 0);
    unlocked = localStorage.getItem('unlocked') || 'none';
    thousand = localStorage.getItem('thousand') === 'true';
    updateClickValue();
    updatePizzaImage();
    updateDisplay();
  }

  function saveGameData() {
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
    localStorage.setItem('totalClicks', totalClicks);
    localStorage.setItem('unlocked', unlocked);
    localStorage.setItem('thousand', thousand);
  }
  
  function updateClickValue() {
    let baseValue = 1;
    if (unlocked === 'global') {
      baseValue += 999;
    } else if (unlocked === 'master') {
      baseValue += 99;
    } else if (unlocked === 'chocolate') {
      baseValue += 9;
    } else if (unlocked === 'coke') {
      baseValue += 4;
    }
    let thousandBonus = Math.floor(totalClicks / 1000);
    clickValue = baseValue + thousandBonus;
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
    let unlockedSomething = false;
    if (totalClicks >= 500000 && unlocked !== 'global') {
      unlocked = 'global';
      unlockedSomething = true;
      triggerConfetti();
      if (sound) popSound.play();
      showToast(translations[currentLanguage].toastUnlockGlobal);
    }
    else if (totalClicks >= 300000 && unlocked !== 'global' && unlocked !== 'master') {
      unlocked = 'master';
      unlockedSomething = true;
      triggerConfetti();
      if (sound) popSound.play();
      showToast(translations[currentLanguage].toastUnlockMaster);
    }
    else if (totalClicks >= 100000 && unlocked !== 'global' && unlocked !== 'master' && unlocked !== 'chocolate') {
      unlocked = 'chocolate';
      unlockedSomething = true;
      triggerConfetti();
      if (sound) popSound.play();
      showToast(translations[currentLanguage].toastUnlockChocolate);
    }
    else if (totalClicks >= 10000 && unlocked !== 'global' && unlocked !== 'master' && unlocked !== 'chocolate' && unlocked !== 'coke') {
      unlocked = 'coke';
      unlockedSomething = true;
      triggerConfetti();
      if (sound) popSound.play();
      showToast(translations[currentLanguage].toastUnlockCoke);
    }
    else if (totalClicks >= 1000000 && thousand === false) {
      thousand = true;
      localStorage.setItem('thousand', 'true');
      updatePizzasPerSecond();
      triggerConfetti();
      if (sound) popSound.play();
      showToast(translations[currentLanguage].toastUnlockThousand);
    }
    if (unlockedSomething) {
      updateClickValue();
      updatePizzaImage();
      saveGameData();
    }
  }

  function checkClickReward() {
    if (totalClicks > 0 && totalClicks % 1000 === 0) {
      updateClickValue();
      if (sound) popSound.play();
      showToast(translations[currentLanguage].toastClickReward.replace('{clicks}', totalClicks));
      triggerConfetti();
    }
  }
  
  function updateDisplay() {
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
    if (moneyCount >= chefPrice) {
      priceChef.classList.remove('off');
      priceChef.classList.add('on');
      buyChef.style.cursor = 'pointer';
    } else {
      priceChef.classList.remove('on');
      priceChef.classList.add('off');
      buyChef.style.cursor = 'default';
    }
    if (moneyCount >= delivererPrice) {
      priceDeliverer.classList.remove('off');
      priceDeliverer.classList.add('on');
      buyDeliverer.style.cursor = 'pointer';
    } else {
      priceDeliverer.classList.remove('on');
      priceDeliverer.classList.add('off');
      buyDeliverer.style.cursor = 'default';
    }
    if (moneyCount >= vanPrice) {
      priceVan.classList.remove('off');
      priceVan.classList.add('on');
      buyVan.style.cursor = 'pointer';
    } else {
      priceVan.classList.remove('on');
      priceVan.classList.add('off');
      buyVan.style.cursor = 'default';
    }
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
    let basePizzasPerSecond = 
    chefCount * PIZZAS_PER_SECOND.chef + 
    delivererCount * PIZZAS_PER_SECOND.deliverer + 
    vanCount * PIZZAS_PER_SECOND.van + 
    pizzeriaCount * PIZZAS_PER_SECOND.pizzeria;
    if (thousand) {
      pizzasPerSecond = basePizzasPerSecond + 1000;
    } else {
      pizzasPerSecond = basePizzasPerSecond;
    }
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
          const percentIncrease = Math.random() * 24 + 1;
          chefPrice = Math.round(price * (1 + percentIncrease / 100));
          createFloatingText('+1 Chef');
        }
        break;
      case 'deliverer':
        price = delivererPrice;
        if (moneyCount >= price) {
          moneyCount -= price;
          delivererCount++;
          const percentIncrease = Math.random() * 24 + 1;
          delivererPrice = Math.round(price * (1 + percentIncrease / 100));
          createFloatingText('+1 Deliverer');
        }
        break;
      case 'van':
        price = vanPrice;
        if (moneyCount >= price) {
          moneyCount -= price;
          vanCount++;
          const percentIncrease = Math.random() * 24 + 1;
          vanPrice = Math.round(price * (1 + percentIncrease / 100));
          createFloatingText('+1 Van');
        }
        break;
      case 'pizzeria':
        price = pizzeriaPrice;
        if (moneyCount >= price) {
          moneyCount -= price;
          pizzeriaCount++;
          const percentIncrease = Math.random() * 24 + 1;
          pizzeriaPrice = Math.round(price * (1 + percentIncrease / 100));
          createFloatingText('+1 Pizzeria');
        }
        break;
    }
    updatePizzasPerSecond();
    updateDisplay();
    saveGameData();
    if (sound && moneyCount >= price) {
      audio.play();
    }
  }

  buttonMakePizza.addEventListener('click', function (event) {
    if (event.isTrusted) {
      totalClicks++;
      checkClickReward();
      checkUnlocks();
      pizzasCount += clickValue;
      updateDisplay();
      saveGameData();
      createFloatingText('+' + clickValue);
    } else {
      alert("Clique automatizado não permitido!");
    }
    
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

  configInfo.addEventListener("click", function() {
    popupInfo.classList.toggle('hidden');
  });

  buttonClosePopupInfo.addEventListener("click", function() {
    popupInfo.classList.toggle('hidden');
  });

  configLang.addEventListener("click", function() {
    const selectedLang = languageSelect.value;
    changeLanguage(selectedLang);
    popupLang.classList.remove('hidden');
  });

  buttonClosePopupLang.addEventListener("click", function() {
    popupLang.classList.add('hidden');
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

  function generateAutomaticPizzas() {
    if (pizzasPerSecond > 0) {
      pizzasCount += pizzasPerSecond;
      updateDisplay();
      saveGameData();
    }
  }

  function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.4 },
      zIndex: 9999999999
    });
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    toast.addEventListener('click', function hideToast() {
    toast.classList.remove('show');
    toast.removeEventListener('click', hideToast);
    });
  }

  function resetGame() {
    const resetConfirmText = translations[currentLanguage].textResetGame;
    if (confirm(resetConfirmText)) {
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
      thousand = false;
      updatePizzaImage();
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
      localStorage.removeItem('thousand');
      localStorage.removeItem('sound');
      localStorage.removeItem('language');
      soundImage.src = 'images/config-sound-on.svg';
      localStorage.removeItem('darkMode');
      document.body.classList.remove('dark');
      elementsToToggle.forEach(element => {
        element.classList.remove('dark');
      });
      updateDisplay();
    }
  }

  applyTranslation();
  loadGameData();
  updatePizzasPerSecond();
  updateDisplay();
  setInterval(saveGameData, 10000);
  setInterval(generateAutomaticPizzas, 1000);
});