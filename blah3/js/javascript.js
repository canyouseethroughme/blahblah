let char = document.querySelector("img.mario");

let shakeButton = document.querySelector("#shake");
shakeButton.addEventListener('click', makeShake)
function makeShake(){
    console.log("make shake");
    char.classList.toggle("shakeCSS");
}

let jumpingButton = document.querySelector("#jumping");
jumpingButton.addEventListener('click', makeJumping)
function makeJumping(){
    console.log("make jumping");
    char.classList.toggle("jumpingCSS");
}

let moveButton = document.querySelector("#move");
moveButton.addEventListener('click', makeMove)
function makeMove(){
    console.log("make move");
    char.classList.toggle("moveCSS");
}

let scaleButton = document.querySelector("#scale");
scaleButton.addEventListener('click',makeScale)
function makeScale(){
    console.log("make scale");
    char.classList.toggle("scaleCSS");
}

let fadeButton = document.querySelector("#fade");
fadeButton.addEventListener('click', makeFade)
function makeFade(){
    console.log("make fade");
    char.classList.toggle("fadeCSS");
}

let glowButton = document.querySelector('#glow');
glowButton.addEventListener('click', makeGlow)
function makeGlow(){
    console.log("make glow");
    char.classList.toggle("glowCSS");
}

let move2zeroButton = document.querySelector('#move2zero');
move2zeroButton.addEventListener('click', makeMove2Zero)
function makeMove2Zero (){
    console.log("make move2zero");
    char.classList.toggle("move2zeroCSS");
}

let fallButton = document.querySelector('#fall');
fallButton.addEventListener('click', makeFall)
function makeFall (){
    console.log("make fall");
    char.classList.toggle("fallCSS");
}

let rotateButton = document.querySelector('#rotate');
rotateButton.addEventListener('click', makeRotate)
function makeRotate (){
    console.log("make rotate");
    char.classList.toggle("rotateCSS");
}

let jumpButton = document.querySelector('#jump');
jumpButton.addEventListener('click', makeJump)
function makeJump (){
    console.log("make jump");
    char.classList.toggle("jumpCSS");
}

let move230Button = document.querySelector('#move230');
move230Button.addEventListener('click', makeMove230)
function makeMove230 (){
    console.log("make move230");
    char.classList.toggle("moveToCSS");
}

let moveFrom30Button = document.querySelector('#moveFrom30');
moveFrom30Button.addEventListener('click', makeMoveFrom30)
function makeMoveFrom30 (){
    console.log("make moveFrom30");
    char.classList.toggle("moveFromCSS");
}

let speakButton = document.querySelector('#speak');
speakButton.addEventListener('click', makeSpeak)
function makeSpeak (){
    console.log("make Speak");
    char.classList.toggle("speakCSS");
}

let mirrorButton = document.querySelector('#mirror');
mirrorButton.addEventListener('click', makeMirror)
function makeMirror (){
    console.log("make Mirror");
    char.classList.toggle("mirrorCSS");
}


let chara = document.querySelector("img.donkeyKong");

let fightButton = document.querySelector('#fight');
fightButton.addEventListener('click', makeFight)
function makeFight (){
    console.log("make Fight");
    chara.classList.toggle("donkeyKongCSS");
    char.classList.toggle("marioCSS")
}







