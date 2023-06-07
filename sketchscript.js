//Button prompting the user for the grid layout
const btn = document.querySelector(`#button1`);
let num1 = btn.addEventListener(`click`, getNum);
//function handling the reset of the grid layout and accepting new input
function getNum(){
    num1 = prompt(`enter a number`);
    if(num1 <= 100 && num1 > 0){
        const sqRdel = document.querySelectorAll(`#square`);
        for(let i = 0; i < sqRdel.length; i++){
            sqRdel[i].remove();
        }
        drawSq(num1);
    } else {
        alert(`Please try again and enter a number between 0 and 100.`);
    }
}


//Resetting canvas button
const rstBtn =  document.querySelector(`#button3`);
let rstFn =  rstBtn.addEventListener(`click` , resetCanvas );


function resetCanvas(){
    const squareSum = document.querySelectorAll(`#square`);
    if(squareSum.length > 0){
        for (let i = 0; i < squareSum.length; i ++ ){
            squareSum[i].remove();
        }
    }
    drawSq(num1);
}

//Button that activates rainbow mode
const rnbBtn = document.querySelector(`#button2`);
const checKer = rnbBtn.addEventListener(`click`, rainbowCol);


function rainbowCol(){
    const colorBox = document.querySelectorAll(`#square`);
    if(colorBox.length > 0){
        for(let i = 0; i < colorBox.length; i ++){
            colorBox[i].addEventListener("mouseover", function(){
                colorBox[i].style.backgroundColor = randomHexcol();
            })
        }
    }
}

//need to make a function that generates a set number of divs
//main function drawing the squares
const contElem =  document.querySelector(`#container`);

function drawSq(num){

    for (let i = 1; i <= num * num; i++ ){
        let squareBox = document.createElement(`div`);
        squareBox.classList.add(`square`);
        squareBox.setAttribute(`id`,`square`);
        let rangare = 960/num;
        squareBox.style.width = rangare + `px`;
        squareBox.style.height = rangare + `px`;
        //const widthAndHeight =(960 -((num * 2))) / num;
        //squareBox.style.width = `${widthAndHeight}px`;
        //squareBox.style.height = `${widthAndHeight}px`;
        squareBox.style.backgroundColor = "lightgrey";
        contElem.appendChild(squareBox);
        squareBox.addEventListener("mouseover", function(){
            squareBox.style.backgroundColor = `green`;
        })
    }
}



//Shading button, with each pass adds 10% of black to the existing color

/*const scaleColor =  document.querySelector(`#button4`);
const scaleBtn =  scaleColor.addEventListener(`click`, shadeImage);

function shadeImage(){
    const shadeBox = document.querySelectorAll(`#square`);
    if(shadeBox.length > 0){
        for(let i = 0; i < shadeBox.length; i++){
            shadeBox[i].addEventListener(`mouseover`, function(){
                shadeBox[i].style.filter  = `brightness(0.9)`;
            })
        }
    }
}*/


//random color generator
function randomInteger(max){
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbCol(){
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);

    return [r,g,b];
}

function randomHexcol(){
    let [r,g,b] = randomRgbCol();
    let hr = r.toString(16).padStart(2,`0`);
    let hg = g.toString(16).padStart(2,`0`);
    let hb = b.toString(16).padStart(2,`0`);

    return "#" + hr + hg + hb;
}