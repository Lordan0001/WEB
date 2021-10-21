function print() {
    let text = document.forms[0].elements[0].value;
    let win = window.open();
    let title = document.createElement('h1');
    title.innerHTML = text;
    title.style.textDecoration = 'underLine';
    title.style.textAlign = 'center';
    win.document.body.appendChild(title);
    let h2 = document.createElement('h2');
    let surname = document.forms[0].elements[1].value;
    let spec = document.forms[0].elements[3].value;
    let kurs = document.forms[0].s.value;
    h2.innerHTML = " " + surname + ' специальность ';
    h2.innerHTML += spec + ' курс ' + kurs; 
    h2.innerHTML += ' должен сдавать следующие предметы: ' + '<ol>';
    h2.style.textIndent = '50px';
    for (let i = 0; i < 5; i++){
        if (document.forms[0].f[i].checked)
            h2.innerHTML += "<li>" + document.forms[0].f[i].value + "</li>"
    }
    h2.innerHTML += "</ol>" 
    win.document.body.appendChild(h2);
}   
function task4(){
    document.getElementById("new").innerHTML = '<form><fieldset><legend> Новая форма </legend>Предметы <select id = "newf"></select></fieldset></form>';
    for(i = 0; i < 5; i++){
        if(document.forms[0].f[i].checked)
            document.getElementById("newf").innerHTML += "<option>" + document.forms[0].f[i].value + "</option>"
    }
}   