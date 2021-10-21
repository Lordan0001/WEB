function task4_5(){
	event.preventDefault();

	if(document.getElementById("canvas"))//Удаление старого холста
		document.getElementById("canvas").remove();
	if(document.getElementById("Y"))
		document.getElementById("Y").remove();
	if(document.getElementById("X"))
		document.getElementById("X").remove();

	let canvas = document.createElement("canvas"),
        graph = event.target.graph.value,
		color = document.getElementById("select").value,
		y,
		ctx = canvas.getContext('2d'),//Возвращает контекст рисования на холсте (2d-двумерный контекст)
		X = document.body.appendChild(document.createElement("div")),
		Y = document.body.appendChild(document.createElement("div"));

	canvas.width = 600;
	canvas.height = 500;
	canvas.style.position = "absolute";
	canvas.style.top = "40px";
	canvas.id = "canvas";

	Y.innerHTML = "Y";
	Y.id = "divY";
	X.innerHTML = "X";
	X.id = "divX";
	X.style = "position: absolute; font-size: 20px;";
	Y.style = "position: absolute; font-size: 20px;";
	Y.style.top = 40 + "px";
	Y.style.left = canvas.width / 2 - 20 + "px";
	X.style.top = canvas.height / 2 + 50 + "px";
	X.style.left = canvas.width - 10 + "px";

//Нанесение системы координат
	ctx.lineWidth = 1;                          
	ctx.strokeStyle = "black";
	ctx.moveTo(canvas.width / 2 - 0.5, 0);
	ctx.lineTo(canvas.width / 2 - 0.5, canvas.height);
	ctx.moveTo(0, canvas.height / 2 - 0.5);
	ctx.lineTo(canvas.width, canvas.height / 2 - 0.5);

	ctx.moveTo(canvas.width / 2 - 0.5, 0);
	ctx.lineTo(canvas.width / 2 - 5.5, 10.5);
	ctx.moveTo(canvas.width / 2 - 0.5, 0);
	ctx.lineTo(canvas.width / 2 + 5.5, 10.5);

	ctx.moveTo(canvas.width, canvas.height / 2 - 0.5);
	ctx.lineTo(canvas.width - 10.5, canvas.height / 2 - 5.5);
	ctx.moveTo(canvas.width, canvas.height / 2 - 0.5);
	ctx.lineTo(canvas.width - 10.5, canvas.height / 2 + 5.5);

	ctx.stroke();

	ctx.fillStyle = color;

    //y = x^2
	if (graph == 1){                     
		for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01){
			y = canvas.height / 2 - 40 * Math.pow(x / 40, 2);
			ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
		}
    }
    //y = x^3
	if (graph == 2){
		for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01){
			y = canvas.height / 2 - 40 * Math.pow(x / 40, 3);
			ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
		}
    }
    //y = sin(x)
	if (graph == 3){
		for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01){
			y = (canvas.height / 2 - 40 * Math.sin(x / 40));
			ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
		}
    }
    //y = cos(x)
	if (graph == 4){
		for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01){
			y = canvas.height / 2 -  40 * Math.cos(x / 40);
			ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
		}
	}
	document.body.appendChild(canvas);
}