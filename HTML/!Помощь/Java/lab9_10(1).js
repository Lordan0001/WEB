let flag = false;
function task1(){
    let obj = event.target;
    onmousemove = function(){
        if (flag){
            obj.style.top = event.pageY - (obj.style.height / 2) + "px";
            obj.style.left = event.pageX - (obj.style.width / 2) + "px";
        }
    }
}
onclick = function(){
	flag = !flag;
}
