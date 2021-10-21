let img = document.querySelector("img"), right = 100;
setInterval(line, 15);
function line(){
	img.style.right = right + "vw";
	right--;
	if(right == -10)
        right = 100;
}