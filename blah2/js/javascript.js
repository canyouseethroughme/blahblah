let anim = document.querySelector ("#anim");
anim.addEventListener('click', startAnimation);

function startAnimation() {
    anim.classList.toggle('enable');
}
