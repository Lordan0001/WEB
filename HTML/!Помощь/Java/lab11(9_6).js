$("#menu1").mouseover(function(){$("#submenu1").css("display","block");});
$("#menu1").mouseout(function(){$("#submenu1").css("display","none");});
$("#menu2").mouseover(function(){$("#submenu2").css("display","block");});
$("#menu2").mouseout(function(){$("#submenu2").css("display","none");});
$("#menu3").mouseover(function(){$("#submenu3").css("display","block");});
$("#menu3").mouseout(function(){$("#submenu3").css("display","none");});
$("#menu1").mouseover(function(){
    $("#submenu1").animate({height: "20%"},2000)
    $("#submenu1").animate({height: "130%"},2000)
});
$("#menu2").mouseover(function(){
    $("#submenu2").animate({width: "20%"},2000)
    $("#submenu2").animate({width: "120%"},2000)
}); 
$("#menu3").mouseover(function(){
    $("#submenu3").animate({opacity: 0},2000)
    $("#submenu3").animate({opacity: 1},2000)
}); 