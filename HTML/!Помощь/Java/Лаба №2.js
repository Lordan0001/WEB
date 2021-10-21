function zadanie2(){
    document.write("<table border = 1 cellspacing = 0 cellpadding = 10 align = center>");
    var a = prompt('Введите число a = ');
    var b = prompt('Введите число b = ');
    for (var i = 1; i <= a; i++){
        document.write("<tr>")
        for (var j = 1; j <= b; j++){
            document.write("<td align = center>" + (i * j) + "</td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}
function zadanie3(){
    document.write("<table border = 1 cellspacing = 0 cellpadding = 10 align = center>");
    var x = prompt('Введите начальное значение радиуса = ');
    var y = prompt('Введите конечное значение радиуса = ');
    var l = Number(x);
    document.write("<tr> <td> Радиус </td> <td> Площадь круга </td> <td> Длина окружности </td> </tr>")
    do{
        document.write("<tr>")
        document.write("<td>" + l + "</td>")
        document.write("<td>" + Math.PI*Math.pow(l,2) + "</td>")
        document.write("<td>" + 2*Math.PI*l + "</td>")
        document.write("</tr>")
        l = l +  0.3;
    }
    while(Number(l) <= y)
}
function zadanie4(){
    document.write("<table border = 1 cellspacing = 0 cellpadding = 10 align = center>");
    obj1 = new Number (34.28);
    obj2 = new Number (125);
    document.write("<tr> <td> Дробное число </td> <td> Метод </td> <td> Результат </td> <td> Описание метода </td> </tr>")
    document.write("<tr>")
    document.write("<td>" + obj1 + "</td>")
    document.write("<td> toString(16) </td>")
    document.write("<td>" + obj1.toString(16) + "</td>")
    document.write("<td> число в 16-ричной системе счисления </td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + obj1 + "</td>")
    document.write("<td> toExponential(3) </td>")
    document.write("<td>" + obj1.toExponential(3) + "</td>")
    document.write("<td> Вид числа с 3-емя цифрами после запятой </td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + obj1 + "</td>")
    document.write("<td> toFixed(4) </td>")
    document.write("<td>" + obj1.toFixed(4) + "</td>")
    document.write("<td> Представляет число в форме с фиксированным количеством цифр (4) после точки </td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + obj1 + "</td>")
    document.write("<td> toPrecision(1) </td>")
    document.write("<td>" + obj1.toPrecision(1) + "</td>")
    document.write("<td> представляет число с заданным общим количеством (1) значащих цифр </td>")
    document.write("</tr>")
    document.write("<tr> <td> Целое число </td> <td> Метод </td> <td> Результат <td> Описание мтода </td> </tr>")
    document.write("<tr>")
    document.write("<td>" + obj2 + "</td>")
    document.write("<td> toExponential(3) </td>")
    document.write("<td>" + obj2.toExponential(3) + "</td>")
    document.write("<td> Вид числа с 3-емя цифрами после запятой </td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + obj2 + "</td>")
    document.write("<td> toFixed(4) </td>")
    document.write("<td>" + obj2.toFixed(4) + "</td>")
    document.write("<td> Представляет число в форме с фиксированным количеством цифр (4) после точки </td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + obj2 + "</td>")
    document.write("<td> toPrecision(1) </td>")
    document.write("<td>" + obj2.toPrecision(1) + "</td>")
    document.write("<td> представляет число с заданным общим количеством (1) значащих цифр </td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + obj2 + "</td>")
    document.write("<td> toString(16) </td>")
    document.write("<td>" + obj2.toString(16) + "</td>")
    document.write("<td> число в 16-ричной системе счисления </td>")
    document.write("</tr>")
}
     