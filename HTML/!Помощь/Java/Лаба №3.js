function task1(){
    let num = 1, min ;
    let ind1 = 0;
    let ind2 = 0;
    let Arr = new Array();
    Arr[0] = 6*Math.pow(Math.PI,2) + 3*Math.exp(8);
    Arr[1] = 2*Math.cos(4) + Math.cos(12) + 8*Math.exp(3);
    Arr[2] = 3*Math.sin(9) + Math.log(5) + Math.sqrt(3);
    Arr[3] = 2*Math.tan(5) + 6*Math.PI + Math.sqrt(12);
    for (let i = 0; i <= 3; i++){
        document.write(num + '. ' + Arr[i] + '<br />');
        num++;
    }
    min = Arr[0];
    max = Arr[0];
    for(let j = 0; j <= 3; j++){
        if (min > Arr[j]){
            min = Arr[j];
            ind1 = j;
        }
        else if(max < Arr[j]){
            max = Arr[j];
            ind2 = 0;
        }
    }
    document.write('Минимальное значение массива = ' + min + ' Элемента массива: ' + ind1 + '<br />' )
    document.write('Максимальное значение массива = ' + max + ' Элемента массива: ' + ind2 +'<br />')    
    document.write('Количество элементов массива: ' + Arr.length)
}
function task2(){
    let Ar = new Array("pow", "pop", "push", "shift", "round", "floor", "sline", "sort");
    let Ar1 = new Array();
    let Ar2 = new Array(), i1 = 0, i2 = 0;
    document.write(Ar +'<br />');
    for(let i = 0; i < Ar.length; i++){
        if (Ar[i] in Math ){
            Ar1[i1] = Ar[i];
            i1++;
        }
        else{
            Ar2[i2] = Ar[i];
            i2++;
        }
    }
    document.write('Методы функции Math: ' + Ar1 + '<br />');
    document.write('Методы функции Array: ' + Ar2 +'<br />');
    document.write('Длинна массива Ar: ' + Ar.length + '<br />');
    document.write('Длинна массива Ar1: ' + Ar1.length + '<br />');
    document.write('Длинна массива Ar2: ' + Ar2.length + '<br />');
}
function task3(){
    str = new String ("Симакович Владислав Витальевич");
    str1 = str.toUpperCase(); 
    str2 = str.toLowerCase();
    document.write('Исходная строка: ' + str + '<br />' + 'Длина строки : ' + str.length);
    document.write('<br />' + 'Полученная строка 1: ' + str1);
    document.write('<br />'+ 'Полученная строка 2: ' + str2);
    document.write('<br />' + 'Полученная строка 3: '+ str.concat(str1,str2));
    document.write('<br />' + 'Полученная строка 4: ' + str.replace(str,'С.В.В.'));
}
function task4(){
    let data = new Date;
    document.write('<table border = 1 cellspacing = 0 cellpadding = 10 align = center>');
    document.write('<tr> <td> Год </td> <td>' + data.getFullYear() + '</td> </tr>');
    document.write('<tr> <td> Месяц </td> <td> ' + (1 + data.getMonth()) + '</td> </tr>');
    document.write('<tr> <td> День </td> <td>' + data.getDate() + '</td> </tr>');
    document.write('<tr> <td> Час </td> <td>' + data.getHours() + '</td> </tr>');
    document.write('<tr> <td> Минуты </td> <td>' +data.getMinutes() + '</td></tr>');
    document.write('<tr> <td> Секунды </td> <td>' + data.getSeconds() + '</td> </tr>');
}