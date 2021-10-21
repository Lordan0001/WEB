function processFiles(files) {
    let file = files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        let xml = e.target.result;
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(xml, "text/xml");
        let div = document.getElementById("div2");
        let surname = xmlDoc.getElementsByTagName("surname")[0].innerHTML;
        let name = xmlDoc.getElementsByTagName("name")[0].innerHTML;
        let patronymic = xmlDoc.getElementsByTagName("patronymic")[0].innerHTML;
        let birthday = xmlDoc.getElementsByTagName("birthday")[0].innerHTML;
        div.style.border = "3px solid red";
        div.innerHTML = `Фамилия: ${surname}<br>`;
        div.innerHTML += `Имя: ${name}<br>`;
        div.innerHTML += `Отчество: ${patronymic}<br>`;
        div.innerHTML += `Дата Рождения: ${birthday}<br><br>`;
    };
    reader.readAsText(file);
}