import "./styles.css";
import { startPage } from "./start";
export const cardsApp = () => {
  startPage();
};

cardsApp();

// import {
//   renderStartPage,
//   renderEasyPage,
//   renderMediumPage,
//   renderHardPage,
// } from "./start";
// import Deck from "./deck";
// const deck = new Deck();
// deck.shuffle();
// console.log(deck.cards);
// let contentElement = document.getElementById("page");

// renderStartPage({ contentElement });

// let startButton = document.getElementById("button_start");

// startButton.addEventListener("click", () => {
//   let buttonOneLevel = document.getElementById("radio1");
//   let buttonTwoLevel = document.getElementById("radio2");
//   let buttonThreeLevel = document.getElementById("radio3");
//   //let radio = document.querySelectorAll('.button-level')
//   //  for(let i = 0; i < radio.length; i++){
//   //   if (radio[i].checked) {
//   //    renderEasyPage({contentElement});
//   //   }
//   //  }
//   if ((buttonOneLevel as HTMLInputElement).checked) {
//     renderEasyPage({ contentElement });
//   }

//   if ((buttonTwoLevel as HTMLInputElement).checked) {
//     renderMediumPage({ contentElement });
//   }
//   if ((buttonThreeLevel as HTMLInputElement).checked) {
//     renderHardPage({ contentElement });
//   }
// });
