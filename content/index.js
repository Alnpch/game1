import { renderStartPage, renderEasyPage, renderMediumPage, renderHardPage} from "./render.js";
let contentElement = document.getElementById('box');
console.log(contentElement);


renderStartPage ({contentElement});

let startButton = document.getElementById('button_start');

startButton.addEventListener('click',() => {
let buttonOneLevel = document.getElementById('radio1');
let buttonTwoLevel = document.getElementById('radio2');
let buttonThreeLevel = document.getElementById('radio3');
//let radio = document.querySelectorAll('.button-level')
//  for(let i = 0; i < radio.length; i++){
//   if (radio[i].checked) {
//    renderEasyPage({contentElement});
//   }  
//  }
    if (buttonOneLevel.checked) {
       renderEasyPage({contentElement});
        
    }
    
    if (buttonTwoLevel.checked) {
        renderMediumPage({contentElement});
         
     }
     if (buttonThreeLevel.checked) {
        renderHardPage({contentElement});
         
     }
})
