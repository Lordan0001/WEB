function task4_5(){$(function(){
	event.preventDefault();
	
	if(document.getElementById("canvas"))//Удаление старого холста
	document.getElementById("canvas").remove();
	
	let canvas = document.createElement("canvas"),
	color = document.getElementById("select").value,
	ctx = canvas.getContext('2d');
	
	let list = (document.getElementById('choose')).getElementsByTagName('input');
	for (let i = 0; i < list.length;i++)
		if (list[i].checked)
			var graph = i;
	
	canvas.width = 700;
	canvas.height = 400;
	canvas.style.position = "absolute";
	canvas.id = "canvas";
	
	ctx.lineWidth = 1;//Нанесение системы координат
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
	
	if (Number(graph) == 0) {//y = x^2
	for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01)
	{
		y = canvas.height / 2 - 40 * Math.pow(x / 40, 2);
		ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
	}
	}
	
	if (Number(graph) == 1) {//y = x^3
	for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01)
	{
		y = (canvas.height / 2 - 40 * Math.pow(x / 40, 3));
		ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
	}
	}
	
	if (Number(graph) == 2) {//y = sin(x)
	for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01)
	{
		y = (canvas.height / 2 - 40 * Math.sin(x / 40));
		ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
	}
	}
	
	if (Number(graph) == 3) {//y = cos(x)
	for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01)
	{
		y = canvas.height / 2 - 40 * Math.cos(x / 40);
		ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
	}
	}
	
	document.body.appendChild(canvas);
});
};