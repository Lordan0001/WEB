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
        let sorname = xmlDoc.getElementsByTagName("sorname")[0].innerHTML;
        let point = xmlDoc.getElementsByTagName("point")[0].innerHTML;
        let date = xmlDoc.getElementsByTagName("date")[0].innerHTML;
        div.style.border = "2px solid black";
        div.style.width = "200px";
        div.style.padding = "5px";
        div.innerHTML = `Фамилия: ${surname}<br>`;
        div.innerHTML += `Имя: ${name}<br>`;
        div.innerHTML += `Отчество: ${sorname}<br>`;
        div.innerHTML += `Баллы: ${point}<br>`;
        div.innerHTML += `Дата Рождения: ${date}<br><br>`;
    };
    reader.readAsText(file);
}