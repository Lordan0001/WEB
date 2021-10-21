function fun1(){
    nw1 = open("","win1","");
    }
    function cl1(){
    nw1.close();
    }
    function fun2(){
    nw2 = open("","win2","width=400,height=400");
    }
    function cl2(){
    nw2.close();
    }
    function fun3(){
    nw3 = open("","win3","width=400,height=400");
    }
    function cl3(){
    nw3.close();
    }
    function fun4(){
    nw1.document.write(nw1.window.name + "<br>");
    nw1.document.write("Произвольный текст 1.............");
    }
    function fun5(){
    nw2.document.write(nw2.window.name + "<br>");
    nw2.document.write("Произвольный текст 2............. ");
    }
    function fun6(){
    nw3.document.write(nw3.window.name + "<br>");
    nw3.document.write("Произвольный текст 3.............. ");
    }
function func2(){
    document.write('<table align="center" border="2">');
    document.write('<tr><td> navigator.userAgent </td><td width=1"160">' + navigator.userAgent + '</td>' + '</tr>');
    document.write('<tr><td> navigator.appVersion </td><td width=1"160">' + navigator.appVersion + '</td>' + '</tr>');
    document.write('<tr><td> navigator.appName </td><td>' + navigator.appName + '</td>' + '</tr>');
    document.write('<tr><td> navigator.appCodeName </td><td >' + navigator.appCodeName + '</td>' + '</tr>');
    document.write('<tr><td> navigator.platform </td><td>' + navigator.platform + '</td>' + '</tr>');
    document.write('<tr><td> navigator.JavaEnabled() </td><td>'+ navigator.javaEnabled() + '</td>' + '</tr>');
    document.write('<tr><td> screen.width,screen.height </td><td width=1"160">' + screen.width +"/"+screen.height+ '</td>' + '</tr>')
    document.write('<tr><td> screen.colorDepth </td><td>' + screen.colorDepth + '</td>' + '</tr>');
    document.write('<tr><td> history.length </td><td>' + history.length + '</td>' + '</tr>');
    document.write('<tr><td width="90">location.href </td><td width="100">' + location.href + '</td>' + '</tr>');
    document.write('<tr><td> location.pathnam </td><td>' + location.pathname + '</td>' + '</tr>');
    document.write('<tr><td> location.host </td><td>' + location.host + '</td>' + '</tr>');
    document.write('</table>');
}