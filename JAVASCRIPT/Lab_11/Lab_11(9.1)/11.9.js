$("#text").click(function(){$("#text").draggable()});
$("#img1").click(function(){$("#img1").draggable()});
$("#img2").click(function(){
    $("#img2").animate({
        left: "+=1250px"},2000);
    $("#img2").animate({
        left: "-=1250px"},2000);
});

let img3 = document.getElementById("img3"), radius = 250; stat = 0, step = 2 * Math.PI / 180;

$(document).ready(setInterval(function(){
    stat += step;
    $("#img3").css("left", window.innerWidth / 2 + radius * Math.sin(stat) + 'px');
    $("#img3").css("top", window.innerHeight / 2 - img3.height / 2 + radius * Math.cos(stat) + 'px');
},20));
