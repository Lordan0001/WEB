let img = document.querySelector("img");
let	radius = 270, move = 0;
let	step = 2 * Math.PI / 180;

setInterval(circle, 30);

function circle(){
    move += step;
    img.style.left = window.innerWidth / 2 + radius * Math.sin(move) + 'px';
    img.style.top = window.innerHeight / 2 - img.height / 2 + radius * Math.cos(move) + 'px';
}