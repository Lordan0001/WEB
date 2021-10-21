function task1(){
    function Gruppa(n,spec,kolich){
        this.n = n;
        this.spec = spec;
        this.kolich = kolich;
        this.add_stud = function add_stud(k){
            this.kolich+=k;
            document.write("В группу " + this.n + " добавили " + k + " студента<br>");
            }
         this.sub_stud = function sub_stud(g){
            this.kolich -= g;
            document.write("Из группы " + this.n + " исключили " + g + " студента<br>");
            }
        }
        gr1=new Gruppa(1,"ПОИТ",27);
        gr2=new Gruppa(2,"ИСИТ",30);
        gr3=new Gruppa(3,"ПОИБМС",28);
        gr4=new Gruppa(4,"ДЭВИ",26);

        document.write(gr1.n + " " + gr1.spec + " " + gr1.kolich + " студентов"+"<br>");
        document.write(gr2.n + " " + gr2.spec + " " + gr2.kolich + " студентов"+"<br>");
        document.write(gr3.n + " " + gr3.spec + " " + gr3.kolich + " студентов"+"<br>");
        document.write(gr4.n + " " + gr4.spec + " " + gr4.kolich + " студентов"+"<br>");
        document.write("-------------------------------------------------------------------" + "<br>")  
        gr1.add_stud(3);
        gr2.add_stud(4);
        gr3.add_stud(3);
        gr4.add_stud(2);
    
        gr1.sub_stud(3);
        gr2.sub_stud(3);
        gr3.sub_stud(2);
        gr4.sub_stud(4);
    
        document.write(gr1.n+" "+gr1.spec+" "+gr1.kolich+" студентов"+"<br>");
        document.write(gr2.n+" "+gr2.spec+" "+gr2.kolich+" студент"+"<br>");
        document.write(gr3.n+" "+gr3.spec+" "+gr3.kolich+" студентов"+"<br>");
        document.write(gr4.n+" "+gr4.spec+" "+gr4.kolich+" студента"+"<br>");
    }
    
    function task2(){
        function Student(name,surname,f,m,i,n){
        this.name = name;
        this.surname = surname;
        this.f = f;
        this.m = m;
        this.i = i;
        this.n = n;
        this.mark = function mark(k){
            this.n = this.n + ((this.f + this.m + this.i)/k);
            }
        }
        me = new Student("Владислав ","Симакович ",10,10,9,0);
        me.mark(3);
        alert(me.name+me.surname);
        alert("Оценка по физике: "+me.f+"; Оценка по математике: "+me.m+"; Оценка по информатике: "+me.i+"; Средний балл: "+me.n);
    
        document.write("Другие студенты:"+"<br>"+"<br>");
    
        s1 = new Student("Мария ","Шкурко ",5,7,8,0);
        s1.mark(3);
        document.write(s1.name+s1.surname+"<br>"+"Оценка по физике: "+s1.f+"; Оценка по математике: "+s1.m+"; Оценка по информатике: "+s1.i+"; Средний балл: "+s1.n+"<br>"+"<br>");
    
        s2 = new Student("Олег ","Устьян ",6,8,7,0);
        s2.mark(3);
        document.write(s2.name+s2.surname+"<br>"+"Оценка по физике: "+s2.f+"; Оценка по математике: "+s2.m+"; Оценка по информатике: "+s2.i+"; Средний балл: "+s2.n+"<br>"+"<br>");
    
        s3 = new Student("Виталя ","Дядюк ",7,9,9,0);
        s3.mark(3);
        document.write(s3.name+s3.surname+"<br>"+"Оценка по физике: "+s3.f+"; Оценка по математике: "+s3.m+"; Оценка по информатике: "+s3.i+"; Средний балл: "+s3.n+"<br>"+"<br>");
    
        Student.prototype.spec = this.spec;
        me.spec = " ИСИТ";
        s1.spec = " ПОИТ";
        s2.spec = " ДЭВИ";
        s3.spec = " ПОИБМС";
        document.write("Специальности студентов:"+"<br>"+"<br>");
        document.write(me.name+me.surname+me.spec+"<br>");
        document.write(s1.name+s1.surname+s1.spec+"<br>");
        document.write(s2.name+s2.surname+s2.spec+"<br>");
        document.write(s3.name+s3.surname+s3.spec+"<br>");
    }
    
    
    function task3(){
        let a = Math.round(6*Math.PI*Math.PI+3*Math.exp(8));
        let b = Math.round(2*Math.cos(4)+Math.cos(12)+8*Math.exp(3));
        let c = Math.round(3*Math.sin(9)+Math.log(5)+Math.sqrt(3));
        let d = Math.round(2*Math.tan(5)+6*Math.PI+Math.sqrt(12));
        let arr = new Array(a, b, c, d);
        let str = " Симакович Владислав Витальевич ";
    
        function Gruppa(n,spec,kolich){
            this.n = n;
            this.spec = spec;
            this.kolich = kolich;}
            gr1=new Gruppa(1,"ПОИТ",27);
            function Student(name,surname,f,m,i,n){
            this.name = name;
            this.surname = surname;
            this.f = f;
            this.m = m;
            this.i = i;
            this.n = n;
        }
        s1 = new Student("Мария "," Шкурко ",5,7,8,0);
    
        /*delete*/
        document.write("Исходный массив: "+arr+"<br>");
        delete arr[2];
        document.write("Полученный массив: "+arr+"<br>"+"<br>");
    
        /*in*/
        document.write("В массиве есть элемент №2: "+(1 in arr)+"<br>");
        document.write("В массиве есть элемент №3: "+(2 in arr)+"<br>");
        document.write("У объекта Gruppa есть свойство spec: "+('spec' in gr1)+"<br>");
        document.write("У объекта Stugent есть свойство spec: "+('spec' in s1)+"<br>"+"<br>");
    
        /*instanceof*/
        document.write("Arr является объектом Array:"+(arr instanceof Array)+"<br>");
        document.write("Arr является объектом String: "+(arr instanceof String)+"<br>");
        document.write("Arr является объектом Object: "+(arr instanceof Object)+"<br>"+"<br>");
    
        /*typeof*/
        function task5(){
            let f = 5;
        }
    
        document.write("a - "+(typeof a)+"<br>");
        document.write("b - "+(typeof b)+"<br>");
        document.write("c - "+(typeof c)+"<br>");
        document.write("d - "+(typeof d)+"<br>");
        document.write("arr - "+(typeof arr)+"<br>");
        document.write("str - "+(typeof str)+"<br>");
        document.write("Gruppa - "+(typeof Gruppa)+"<br>");
        document.write("gr1.spec - "+(typeof gr1.spec)+"<br>");
        document.write("gr1.n - "+(typeof gr1.n)+"<br>");
        document.write("gr1.kolich - "+(typeof gr1.kolich)+"<br>");
        document.write("Student - "+(typeof Student)+"<br>");
        document.write("s1.name - "+(typeof s1.name)+"<br>");
        document.write("s1.surname - "+(typeof s1.surname)+"<br>");
        document.write("s1.f - "+(typeof s1.f)+"<br>");
        document.write("s1.m - "+(typeof s1.m)+"<br>");
        document.write("s1.i - "+(typeof s1.i)+"<br>");
        document.write("task5 - "+(typeof task5)+"<br>");
    }