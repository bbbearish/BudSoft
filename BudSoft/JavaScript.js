
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo1").value;
    try {
        if(x == "")  throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 100)   throw "is too high";
        if(x < 0)    throw "is too low";
if(x%3==0 && x%5==0)throw "BudSoft";
if(x%3==0) throw"Bud";
if(x%5==0)throw"Soft";
if(x)throw "REGULAR NUMBER";
    }
    catch(err) {
        message.innerHTML = "The Input Is:" + err;
    }
    finally {
        document.getElementById("demo1").value = "";
    }
}

/* to see the full list
function myFunction2() {

var text='';

for (i = 0;i <= 100; i++) {
if(i%3==0 && i%5==0){
 document.write("BudSoft"+"<br>");
}else if(i%3==0){
 document.write("Bud"+"<br>");
}else if(i%5==0){
 document.write("Soft"+"<br>");
}else
   document.write( i + "<br>" );
}

document.getElementById("demo").innerHTML = text;
}*/


