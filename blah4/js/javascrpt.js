let char = document.querySelector("img.griffin");
let aud = document.querySelector("audio");

aud.play ();
aud.addEventListener('ended', scaleGriffin);

function scaleGriffin(){
    console.log("scaleGriffin was called")
    char.classList.add("griffinCSS");
    char.addEventListener('animationend', fadeGriffin);
}



function fadeGriffin(){
    console.log("fadeGriffin was called")
    char.classList.add("fadeCSS");
}
