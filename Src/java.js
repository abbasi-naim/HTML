alert("Wilkommen auf meiner Seite!")
var myAge = 33;
var myName = 'Naim';
var myLastName = "Abbasi Darab";
var num1 = 33;
var num2 = 29;
var adult = (myAge<35)?"I am young" :"too old";
var stringA="I am learning";
var stringB="Java Script";

/*if (num1>num2) {
    document.write(num1 + "is greater than " + num2)
}*/

/*if (num1<num2) {
    alert(num2 +"is greater than" + num1);
}
    else {
        document.write("Else scope will execute!");
    }*/
    // var day = 1;

    // switch (day) {
    //     case 1:
    //         document.write("Montag");
    //         break;
    //     case 2:
    //         document.write("Dienstag");   
    //     default:
    //         document.write("Anderen Tag");
    //         break;
    // }

    // for (i=1; i<=5; i++) {
    //    document.write(i + "<br/>");  
    // }
    // var i=1
    // for (;i<3; i++) {
    //     document.write(i + "<br/>");
        
    // }
//the while loop
// var i = 0
// while (i<=10) {
//     document.write(i + "<br/>");
//     i++
// }
// do while loop

/*var i=3;
do {
    document.write("Do While Loop /")
    i++;
} while (i<=5);*/

/*for (i = 0; i<=5; i++) {
    if (i==2) {
        break;
        
    }
    document.write(i + "<br/>");
}*/

//for with continue  and condition will not print. it means number 2 will not be printed.
/*for (i = 0; i<=5; i++) {
    if (i==2) {
        continue; 
    }
    document.write(i + "<br/>");
}*/

//defining a function in java script
/*var land = 1
function country() {
    switch (land) {
        case 1:
            document.write("Deutschland");
            break;
        default:
            document.write("ein anderes Land")
            break;
    }
    
}*/
//caling function
//country();
/*country.call();*/

/*function sayHello(name) {
    document.write("Hello "+ name);
}

sayHello("Liebe/lieber besucher!");*/

// function hello(name,age) {
//     document.write(name + " is " + age + " years old!");
    
// }

// hello(myName,num1);

/*function calculate(a,b) {
    return a * b ;
}

var result = calculate(2,3);
document.write("the result is " + result);*/

function sum(x,y) {
    z=x+y;
    return z;   
}
document.write("sum is "+ sum(3,4));

