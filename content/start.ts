// export function renderStartPage({ contentElement }) {
//     let startPageHtml = `<div class="box " id="box">
//     <h1 class="heading" >Выбери сложность</h1>
//   <div class="box-button" id = "box_button">

// <div class="button">
//     <input type="radio" class="button-level" id="radio1" name="radios" value="1" checked>
//     <label for="radio1">1</label>
// </div>

// <div class="button">
//     <input type="radio"class="button-level"id="radio2" name="radios" value="2" >
//     <label for="radio2">2</label>
// </div>

// <div class="button">
//     <input type="radio" class="button-level" id="radio3" name="radios" value="3" >
//     <label for="radio3">3</label>
// </div>
//   </div>
//   <button id="button_start" class="button-start">Старт</button>
//   </div>`;
//     contentElement.innerHTML = startPageHtml ;
//   }

//   export function renderEasyPage({ contentElement }) {
//     let easyPageContent = `<div class = "level-page center">
//     <div class = "level-page-heading center">
//       <div class="time-game">
//       <div class="min-sek">
//           <p>min</p>
//           <p>sek</p>
//       </div>

//   <h2 class="time">00.00</h2>
//   </div>
//   <button class ="button-start">Начать заново</button>
//    </div>
//    <div class="cards" id="cards">
//    <div class="card" data-cardValue="10">
//    <p class="card-value-up">10</p>
//    <p class="card-value-down">10</p>
//    <img src="./cards/чери.svg" alt="pik" class="suit-big">
//    <img src="./cards/чери.svg" alt="pik" class="suit-small-up">
//    <img src="./cards/чери.svg" alt="pik" class="suit-small-down">
//   </div>
//    </div>
//                           </div>`;
//     contentElement.innerHTML = easyPageContent;
//   }

//   export function renderMediumPage({ contentElement }) {
//     let mediumPageContent = `<div class = "level-page center">
//     <div class = "level-page-heading center">
//       <div class="time-game">
//       <div class="min-sek">
//           <p>min</p>
//           <p>sek</p>
//       </div>

//   <h2 class="time">00.00</h2>
//   </div>
//   <button class ="button-start">Начать заново</button>
//    </div>
//    <div class="cards">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    </div>
//                           </div>`;
//     contentElement.innerHTML = mediumPageContent;
//   }

//   export function renderHardPage({ contentElement }) {
//     let hardPageContent = `<div class = "level-page center">
//     <div class = "level-page-heading center">
//       <div class="time-game">
//       <div class="min-sek">
//           <p>min</p>
//           <p>sek</p>
//       </div>

//   <h2 class="time">00.00</h2>
//   </div>
//   <button class ="button-start">Начать заново</button>
//    </div>
//    <div class="cards">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    <img src="./cards/рубашка.svg" alt="">
//    </div>
//                           </div>`;
//     contentElement.innerHTML = hardPageContent;
//   }
import { startGame } from "./game";

export const startPage = () => {
  const gameSection = document.querySelector(
    ".game-section-start__container"
  ) as HTMLElement;

  gameSection.innerHTML =`<div class="game-section-start__container">
  <h2 class="game-menu__title">Выбери <br>сложность</h2>
  <button class="game-menu-btn">1</button>
  <button class="game-menu-btn">2</button>
  <button class="game-menu-btn">3</button>
  <button class="game-menu__start-btn">Старт</button>
</div>`;

  const chooseDifficult = document.querySelectorAll(
    ".game-menu-btn"
  );

  chooseDifficult.forEach((element) =>
    element.addEventListener("click", () => {
      chooseDifficult.forEach((el) =>
        el.classList.remove("game-menu-btn_checked")
      );
      element.classList.add("game-menu-btn_checked");
      const buttonStart = document.querySelector(
        ".game-menu__start-btn"
      ) as HTMLElement;

      buttonStart.addEventListener("click", () => {
        startGame(element.textContent);
      });
    })
  );
};
