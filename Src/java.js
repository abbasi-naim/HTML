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

/*function sum(x,y) {
    z=x+y;
    return z;   
}
document.write("sum is "+ sum(3,4));*/

/*var name = prompt("please enter your name");
alert(name+", Wilkommen auf meiner Seite");*/

/*var message = confirm("Do you realy want to leave the page?");
if (message == true) {
    alert("thank you for visiting us");
    
} else {
    alert("thank you for staying with us!");
    
}*/

//defining object
// var person={
// myname:"Naim" , age:33,
// color:green , height:193
// };

// document.write(person.myname);

/*var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
   };
   var x = person.age;
   var y = person['age'];
   var z = person.name;

   document.write(x + "<br/>");
   
   document.write(z.length);*/

   //object constructor
   /*function myPerson (name,age,height) {
       this.name = name;
       this.age = age;
       this.height = height;
       
   };

   var x1 = new myPerson("naim",33,195);
   document.write(x1.name);*/

  /* function car(name,color){
       this.name = name;
       this.color = color;
       this.changeColor = function(color){
       this.color = color;
       }
   }

   var car1 = new car ("BMW","Red");
   car1.changeColor("black");
   document.write(car1.color);*/
// defining method 
   
/*function newPerson(name,age) {
       this.name = name;
       this.age= age;
       this.yearOfBirth = birthday;
       
    }

    function birthday() {
        return 2020 - this.age;
        
    }

    var per = new newPerson("Naim",33);
    document.write(per.yearOfBirth());*/
    
    //defining Array 

    var courses = new Array ("Computer","Industrial","Electronic");
    courses[2]=("Englisch");
    document.write(courses[1]);