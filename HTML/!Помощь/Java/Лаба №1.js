function zadanie1() {
   alert('Вас приветствует учебный центр');
     x = prompt('Введите Ваше имя:', 'Имя');
   alert('Здравствуйте, '+ x);
	x = confirm('Хотите стать Web-дизайнером?');
	if (x == 1)
		alert('Учите стили CSS и Java Script!');
	else
		alert('Вы тратите своё время');
}
function zadanie2(){ 
	var n = prompt ('Выберите действие: 1 - сложение 2 чисел; 2 - сложение 2 строк; 3 - сложение строки и числа; 4 - сложение строки и числа; 5 - итог')
	switch(n){
		case '1' : {
		var a = prompt ('Введите число a = ');
		var b = prompt ('Введите число b = ');
		var s = Number(a) + Number(b);
		document.write ("<span style = 'font-family: fantasy;color:red;font-size: 30px'>  Результат сложения </span> а и б = " + s);
		break;
		}
		case '2' : {
		var a = prompt ('Введите строку a: ','');
		var b = prompt ('Введите строку b: ','');
		var s = a + b;
		alert('результат сложения = '+ s)
		break;
		}
		case '3' : {
		var a = prompt ('Введите строку a: ','');
		var b = prompt ('Введите число b: ');
		var s = a + b;
		alert('результат сложения = '+ s)
		break;
		}
		case '4' : {
		var a = prompt ('Введите число a: ');
		var b = prompt ('Введите строку b: ','');
		var s = a + b;
		alert('результат сложения = '+ s)
		break;
		}
		case '5' : {
		alert('Результатом сложения строки и числа всегда будет строка')
		break;
		}
    }
}
	function zadanie3(){
		var per1 = prompt ('Введите переменную per1 = ');
		var per2 = prompt ('Введите переменную per2 = ');
		var v1 = (35*per2 -25*per1)/5 + 232;
		var v2 = (8*per2)/per1 + (5*per1)/per2;
        alert('Значение выражения 1 = ' + v1 + '\n' + 'Значения выражения 2 = ' +v2)
        var ost = v1 % v2;
        alert('Остаток от деления первого выражения на второе = ' + ost)
        document.write ("Остатко от деления первого выражение на второе = " + ost);
    }
    function zadanie4(){
        var chislo = prompt ('Введите любое число = ');
        if ((chislo < 20 || chislo > 40) && chislo != 15 && chislo % 5 == 0)
        alert ('Правильное значение')
        else
        alert ('Неправильное значение')
    }
    function zadanie5(){
        var perem1 = new Number (prompt ('Введите первое число = '));
        var perem2 = new Number (prompt ('Введите второе число = '));
        if (perem1 > perem2)
        alert ('Первое число больше второго')
        else
        alert ('Второе число больше первого') 
        var otvet = prompt ('Сколько будет 200 делить на 5 ? ');
        (otvet == 40) ? alert ('You so good') : alert('Пересчитай')
	}
	function zadanie6(){
		var n = prompt('Какой сегодня день недели?','')
		switch(n){
			case 'Понедельник' : {
				alert ('Сегодня понедельник. В понедельник чихнешь - подарок на неделю.')
				break;
			}
			case 'Вторник' : {
				alert ('Сегодня вторник. Вторники и субботы - легки.')
				break;
			}
			case 'Среда' : {
				alert ('Сегодня среда. Середа да пятница четвергу не указчица.')
				break;
			}
			case 'Четверг' : {
				alert ('Сегодня четверг. Не суйся, пятница, наперед четверга.')
				break;
			}
			case 'Пятница' : {
				alert ('Сегодня пятница. Кто в пятницу дело начинает, у того оно будет пятиться.')
				break;
			}
			case 'Суббота' : {
				alert ('Сегодня суббота. От субботней расправы уйду — воскресенье переживу.')
				break;
			}
			case 'Воскресенье' : {
				alert ('Сегодня воскресенье. Воскресенье — свято.')
				break;
			}
		}
	}
		function zadanie7(){
			var lal = prompt('Код с ошибкой - 1; Код без ошибки - 2')
			switch (lal){
			case '1' : {
			try {
				alert('Начнём код')  		  
				lalalal; // ошибка, переменная не определена			  	  
			  } catch(e) {  
				alert ('Если в коде внутри try есть ошибки то выведется это окно')
				alert('Ошибка : ' + e.name) 
			  }
			  break;
			}
			  case '2' : {
				try {
					alert('Начнём код')  		  
					var lalala = prompt('Введите любую переменную');			    
				  } catch(e) {  
					alert ('Если в коде внутри try есть ошибки то выведется это окно')
					alert('Ошибка : ' + e.name) 
				  }
				  break;
				}
			  }
			}
    