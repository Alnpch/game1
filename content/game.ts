import { createIconsArray } from "./deck";
import { cardsApp } from "./index";
import "./styles.css";
declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    timeGame: ReturnType<typeof setInterval>;
  }
}

export interface ICardType {
  suit: string;
  value: string;
}

type suitsBackgroundType = {
  [word: string]: string;
};

export const startGame = (difficult: string) => {
  const suitsBackground: suitsBackgroundType = {
    "♠": "pik.svg",
    "♣": "krest.svg",
    "♥": "che.svg",
    "♦": "bub.svg",
  //   switch (suit.charAt(0)) {
  //     case "♠":
  //       suit= "./cards/pik.svg";
  //         break;
  //     case "♥":
  //       suit = "./cards/che.svg";
  //         break;
  //     case "♦":
  //       suit= "./cards/bub.svg";
  //         break;
  //     case "♣":
  //       suit= "./cards/krest.svg";
  //         break;
  //     default:
  //         break;
  // }
  };

  // рендер
  const gameSection = document.querySelector(
    ".game-section-start__container"
  ) as HTMLElement;
  const gameTable = document.querySelector(
    ".game-section-cards__container"
  ) as HTMLElement;
  gameTable.style.opacity = "1";
  gameSection.style.display = "none";
  const cardsIcons = createIconsArray(difficult) as ICardType[];

  const cardsHtml = cardsIcons
    .map((card: ICardType) => {
      return `
      <div data-value=${card.value} data-suit=${
        card.suit
      } class="game-table__card" >
     
          <div class="card__face" style="background: url(./cards/${
            suitsBackground[card.suit]
          }) center center no-repeat, rgb(255, 255, 255);">
         
              <div class="card__top">    
                  <div class="card__value">${card.value}
                  </div>
                  <img class="card__suit" src="./cards/${
                    suitsBackground[card.suit]
                  }" alt="suit">
              </div>
              <img src="./cards/${
                suitsBackground[card.suit]
              }" alt="suit" class="suit_big">
              <div class="card__bottom">    
                  <div class="card__value">${card.value}
                  </div>
                  <img class="card__suit" src="./cards/${
                    suitsBackground[card.suit]
                  }" alt="suit">
              </div>
              
              
          </div>
          <div class="card__back"></div>
          
    </div>
     
      `;
    })
    .join("");

  gameTable.innerHTML = `
  <div class="game_content">
    <div class="game_background" 
        <div id="timer">
            <div class="timer__text">
                <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>
            </div>
            <p class='timer'>00.00</p>
        </div>
        <button class="game_content_button">Начать заново</button>
    </div>
        <div class="game-cards-box">
        ${cardsHtml}
        </div> `;

  const restartBTn = document.querySelector(".game_content_button");
  restartBTn.addEventListener("click", () => {
    startGame(difficult);
  });
 
  // Скрытие карт
  function closecards() {
    const cards: NodeListOf<HTMLElement> =
      document.querySelectorAll(".card__back");
    for (const card of cards) {
      card.style.display = "flex";
    }
  }

  // Скрытие карт через 5 секунд и запуск игры
  const coutDownEl = document.querySelector(".timer") as HTMLElement;
  let timer = 5;
  coutDownEl.textContent = "00.05";
  const id = setInterval(function () {
    timer--;
    if (timer === 0) {
      clearInterval(id);
      closecards();
      game();
    } else {
      coutDownEl.innerHTML = `00.0${timer}`;
    }
  }, 1000);

  // время
  function timerGame() {
    timer = 0;

    coutDownEl.textContent = "00.00";
    function setTime() {
      timer++;
      const minutes = ("00" + Math.floor(timer / 60)).slice(-2);
      const seconds = ("00" + (timer % 60)).slice(-2);
      coutDownEl.textContent = `${minutes}.${seconds}`;
    }
    window.timeGame = setInterval(setTime, 1000);
    setTimeout(clearInterval, 600000, window.timeGame);
  }

  // конец игры
  function isWinner(winner: boolean) {
    clearInterval(window.timeGame);
    gameSection.style.display = "block";
    const timerResult = coutDownEl.textContent;
    gameTable.style.opacity = "0.3";
    gameSection.classList.add("popup");

    gameSection.innerHTML = `<div class="game-section-start__container">
            <img class="timer_result-img" src="./cards/${
              winner ? '"win.svg" alt="win"' : '"lose.svg" alt="lose"'
            }"  >
            
            <h2 class="game-menu_result-title">${
              winner ? "Вы выиграли" : "Вы проиграли"
            }</h2>
            <p class="title-time">Затраченное время</h2>
            <p class='timer_result'>${timerResult}</p>
            <button class="game-menu__start-btn">Играть снова</button>
            </div>`;

    const restartBTn = document.querySelector(".game-menu__start-btn");
    restartBTn.addEventListener("click", () => {
      cardsApp();
    });
  }

  //игра
  function game() {
    timerGame();
    let firstCard: number | null = null;
    let secondCard: number | null = null;
    let clickable = true;
    let winner = false;
    const allCards: Array<HTMLElement> = Array.from(
      document.querySelectorAll(".game-table__card")
    );

    allCards.forEach((card, index) =>
      card.addEventListener("click", () => {
        console.log(card);
        if (clickable === true && !card.classList.contains("successfully")) {
          card.querySelector(".card__back")
            ? card.querySelector(".card__back").classList.remove("card__back")
            : false;

          if (firstCard === null) {
            firstCard = index;
          } else {
            if (index !== firstCard) {
              secondCard = index;
              clickable = false;
            }
          }

          if (
            firstCard !== null &&
            secondCard !== null &&
            firstCard !== secondCard
          ) {
            if (
              allCards[firstCard].dataset.suit ===
                allCards[secondCard].dataset.suit &&
              allCards[firstCard].dataset.value ===
                allCards[secondCard].dataset.value
            ) {
              allCards[firstCard].classList.add("successfully");

              allCards[secondCard].classList.add("successfully");

              firstCard = null;
              secondCard = null;
              clickable = true;
              const arrSuccess = allCards.filter((item) =>
                item.classList.contains("successfully")
              );
              console.log(arrSuccess);
              if (allCards.length === arrSuccess.length) {
                winner = true;
                isWinner(winner);
              }
            } else {
              isWinner(winner);
            }
          }
        }
      })
    );
  }
};
