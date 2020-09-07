const body = document.querySelector("body");

const IMG_NUMBER = 5;

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImg");
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();