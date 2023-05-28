export function renderStartPage({contentElement}){

let startPageHtml = `<h1 class="heading" >Выбери сложность</h1>
<div class="box_button" id = "box_button">

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
<button id="button_start" class="button_start">Старт</button>`
contentElement.innerHTML = startPageHtml;
// let buttonElements = document.getElementById('box_button');
// let startButton = document.getElementById('button_start');
// let buttonOneLevel = document.getElementById('radio1');
// let buttonTwoLevel = document.getElementById('radio2');
// let buttonThreeLevel = document.getElementById('radio3');
}

export function renderEasyPage({contentElement}){
    let easyPageContent =`<div class = "level_page">
                            <h1>Страница с легким уровнем</h1>
                        </div>`;
        contentElement.innerHTML = easyPageContent;        
}

export function renderMediumPage({contentElement}){
    let mediumPageContent =`<div class = "level_page">
                            <h1>Страница со средним уровнем</h1>
                        </div>`;
        contentElement.innerHTML = mediumPageContent;        
}

export function renderHardPage({contentElement}){
    let hardPageContent =`<div class = "level_page">
                            <h1>Страница с тяжелым уровнем</h1>
                        </div>`;
        contentElement.innerHTML = hardPageContent;        
}
