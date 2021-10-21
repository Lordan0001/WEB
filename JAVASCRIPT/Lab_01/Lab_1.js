// ////////////////////   1    //////////////
alert('Вас приветствует учебный центр');
var name;
name = prompt("Введите ваше имя");
alert("Добро пожаловать на наши курсы," + name);

if(confirm("Хотите стать Web-дизайнером?")){
  alert("Учите стили CSS и JavaScript!")
}
else{
  alert("Упускаете время!")
}

//////////////////   2    //////////////
var x =10;
var y =5;
document.write("<br>" + x + y);

var x = "10";
var y = "5";
document.write("<br>" + x + y);

var x =22;
var y ="5";
document.write("<br>" + x + y);

var y ="5";
var x =22;
document.write("<br>" + y + x);

 alert("Результатом сложения строки и числа всегда будет");

//////////////////   3    //////////////
var x = 500;
var y = 10;
var i=(35*y-25*x)/5 +232;
var p=(8*y/x*5*x/(y-43))*6;
document.write(i+"<br>");
document.write(p+"<br>");
document.write("<br>"+i%p);

//////////////////   4    //////////////
var a = prompt("Введите число для проверки");
if(a < 20 || a > 40 && !15 && a % 5== 0){
  alert("Правильное значение")
}
else{
  alert("Не правильное значение")
}

var x = 6;
var y = 5;
if (x>y){
  document.write("<br>"+"ВЕРНО")
}
else if (x == y) {//дополнительная проверка
  document.write("ELSEIF")
}
else {
  document.write("<br>"+"НЕ ВЕРНО")
}


//////////////////   5    //////////////
A = prompt("Введите число А", '');
B = prompt('Введите число В', '');

if (A == B)
   alert("Числа равны(А = В)"); else
if (A > B)
   alert("Число А больше числа B (А > В)");  else
if (A < B) alert("Число А меньше числа В (А<B)");

var x = 5;
var y = 6;
x > y? document.write("<br>"+"YES") : document.write("<br>"+"NO")


//////////////////   6    //////////////

var z;

z = prompt("Введите цифру дня недели: ");

switch (z) {
  case '1': document.write("<br>"+"Сегодня понедельник");    break;
      case '2': document.write("<br>"+"Сегодня вторник");    break;
        case '3': document.write("<br>"+"Сегодня среда");    break;
          case '4': document.write("<br>"+"Сегодня четверг");    break;
            case '5': document.write("<br>"+"Сегодня пятница");    break;
              case '6': document.write("<br>"+"Сегодня суббота");    break;
                case '7': document.write("<br>"+"Сегодня воскресенье");    break;


  default:
  alert("<br>"+"принимаются только значения от 1-го до 7-ми");
}

