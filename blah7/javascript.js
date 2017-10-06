let clicks = 0;
let div = document.querySelector("div");
div.addEventListener("click", changeMe);

function changeMe (){
    clicks++;
    console.log(clicks)
    if(clicks == 1){
        div.classList.add("red");
    } else if (clicks==2){
        div.classList.add("orange");
    } else if (clicks==3){
        div.classList.add("yellow")
    } else if (clicks==4){
        div.classList.add("green")
    } else if (clicks==5){
        div.classList.add("blue")
    } else if (clicks==6){
        div.classList.add("purple")
    } else if (clicks==7){
        div.classList.add("violet")
    }
}

