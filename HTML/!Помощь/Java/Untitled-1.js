let s = document.getElementById('l');
let table = s.createElement('table');
let tr;
let td;
for(let i = 0; i < 3;i++) {
    tr = table.createElement('tr');
    for(let j =0; j < 3; j++) {
        td = tr.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
s.appendChild(table);