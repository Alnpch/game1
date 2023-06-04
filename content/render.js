export function renderStartPage({ contentElement }) {
  let startPageHtml = `<div class="box " id="box">
  <h1 class="heading" >Выбери сложность</h1>
<div class="box-button" id = "box_button">

<div class="button">
    <input type="radio" class="button-level" id="radio1" name="radios" value="1" checked>
    <label for="radio1">1</label>
</div>
    
<div class="button">
    <input type="radio"class="button-level"id="radio2" name="radios" value="2" >
    <label for="radio2">2</label>
</div> 

<div class="button">
    <input type="radio" class="button-level" id="radio3" name="radios" value="3" >
    <label for="radio3">3</label>
</div>
</div>
<button id="button_start" class="button-start">Старт</button>
</div>`;
  contentElement.innerHTML = startPageHtml;
  // let buttonElements = document.getElementById('box_button');
  // let startButton = document.getElementById('button_start');
  // let buttonOneLevel = document.getElementById('radio1');
  // let buttonTwoLevel = document.getElementById('radio2');
  // let buttonThreeLevel = document.getElementById('radio3');
}

export function renderEasyPage({ contentElement }) {
  let easyPageContent = `<div class = "level-page center">
  <div class = "level-page-heading center">
    <div class="time-game">
    <div class="min-sek">
        <p>min</p>
        <p>sek</p>
    </div>

<h2 class="time">00.00</h2>
</div>
<button class ="button-start">Начать заново</button>
 </div>
 <div class="cards">
    <img src="./cards/туз пики.svg" alt="">
    <img src="./cards/туз бубны.svg" alt="">
    <img src="./cards/туз крести.svg" alt="">
    <img src="./cards/туз черви.svg" alt="">
 </div>
                        </div>`;
  contentElement.innerHTML = easyPageContent;
}

export function renderMediumPage({ contentElement }) {
  let mediumPageContent = `<div class = "level-page center">
  <div class = "level-page-heading center">
    <div class="time-game">
    <div class="min-sek">
        <p>min</p>
        <p>sek</p>
    </div>

<h2 class="time">00.00</h2>
</div>
<button class ="button-start">Начать заново</button>
 </div>
 <div class="cards">
    <img src="./cards/туз пики.svg" alt="">
    <img src="./cards/туз бубны.svg" alt="">
    <img src="./cards/туз крести.svg" alt="">
    <img src="./cards/туз черви.svg" alt="">
 </div>
                        </div>`;
  contentElement.innerHTML = mediumPageContent;
}

export function renderHardPage({ contentElement }) {
  let hardPageContent = `<div class = "level-page center">
  <div class = "level-page-heading center">
    <div class="time-game">
    <div class="min-sek">
        <p>min</p>
        <p>sek</p>
    </div>

<h2 class="time">00.00</h2>
</div>
<button class ="button-start">Начать заново</button>
 </div>
 <div class="cards">
    <img src="./cards/туз пики.svg" alt="">
    <img src="./cards/туз бубны.svg" alt="">
    <img src="./cards/туз крести.svg" alt="">
    <img src="./cards/туз черви.svg" alt="">
 </div>
                        </div>`;
  contentElement.innerHTML = hardPageContent;
}
