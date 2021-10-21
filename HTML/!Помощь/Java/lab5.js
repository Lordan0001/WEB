function fun1(){
    for(let i=0; i<document.all.length; i++)
    {
        alert(document.all[i].tagName + " ["+i+"] " + document.documentElement.nodeType);
    }
}
function fun2(){
    for (let i = 0;i < document.body.children.length; i++)
    {
        let child = document.body.children[i];
        alert(child.tagName);
    }
}
function fun3(){
    for (let i = 0; i < document.all.length; i++)
    {
        let spanFirst = document.all[i];
        if (spanFirst.tagName == 'SPAN')
        {
            alert(spanFirst.innerHTML);
            break;
        }
    }
        alert(document.getElementsByTagName("span")[0].innerHTML);
        alert(document.getElementById("span1").innerHTML);
}
function fun4(){
    let add = document.getElementById("vlad");
    let average = (parseFloat(document.getElementById("m1").innerHTML) +
    parseFloat(document.getElementById("m2").innerHTML) +
    parseFloat(document.getElementById("m3").innerHTML) +
    parseFloat(document.getElementById("m4").innerHTML) +
    parseFloat(document.getElementById("m5").innerHTML))/5;
    add.append(" ",average);
}