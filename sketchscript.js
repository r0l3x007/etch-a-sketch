const btn = document.querySelector(`#button1`);
let num1 = btn.addEventListener(`click`, getNum);

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

//need to make a function that generates a set number of divs

const contElem =  document.querySelector(`#container`);


function drawSq(num){

    for (let i = 1; i <= num * num; i++ ){
        let squareBox = document.createElement(`div`);
        squareBox.classList.add(`square`);
        squareBox.setAttribute(`id`,`square`);
        const widthAndHeight = (960 -((num * 2))) / num;
        squareBox.style.width = `${widthAndHeight}px`;
        squareBox.style.height = `${widthAndHeight}px`;
        squareBox.style.backgroundColor = "grey";
        contElem.appendChild(squareBox);
        squareBox.addEventListener("mouseover", function(){
            squareBox.style.backgroundColor = "red";
        })
    }
}