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
    //literal Array
    /*var courses = new Array ("Computer","Industrial","Electronic");
    courses[2]=("Englisch");
    document.write(courses[2]);*/

    //other way of defining Array
/*
    var courses = new Array(3);
    courses[0]= "Computer";
    courses[1] = "Industrial";
    courses[2] = "Electronic";

    document.write(courses[1] + "<br/>");
    //length of Array
    document.write(courses.length);*/
/*
    //Array Concatination
    var course = ["Deutsch" , "Civil"]

    var newCourses = courses.concat(course);
    document.write(newCourses);*/

    /*
    // Associative Array 
    var personal = [];
    personal["name"] = "Naim";
    personal["age"] = "33";
    document.write(personal["age"]);
    document.write(personal.length);*/

    /*
    //Math Object
    document.write(Math.PI + " ");
    document.write(Math.E + " ");

    document.write(Math.sqrt(4));

     var getUserInput = prompt("please put even number" + "");
     var calculate = Math.sqrt(getUserInput);
     alert("You put number " + getUserInput + " And the sqrt is " + calculate);*/

     //Date Object
/*
     function myInterval() {
         alert("Rahayi az deghdegheha");
         
     }
     setInterval(myInterval,3000);*/
/*
     var dateTime = new Date();
     var month = dateTime.getMonth();
     document.write(month);

     function myDateTime() {
         var d = new Date();
         var h = d.getHours();
         var m = d.getMinutes();
         var s = d.getSeconds();
         document.body.innerHTML = h + ":" + m + ":" + s + ":" ;
         
     }
     setInterval(myDateTime,1000);
     */
// document.getElementById
/*
     var id = document.getElementById(id);
     var name = document.getElementsByName(name);
     var className = document.getElementsByClassName(name);*/

     //Change color of <p> tag name
function myFunction() {
  var x = document.getElementsByTagName("P");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
  }
}

function undo() {
    var y =document.getElementsByTagName("P");
    for (i= 0; i< y.length; i++) {
        y[i].style.backgroundColor= "white";
        
    }
    
}

//change the src image 
var el = document.getElementById("myimage");
el.src = "..//Html-Sololearn/Assets/pix2.jpg";

//change a href 

var hRef = document.getElementsByTagName("a");
hRef[0].href = "www.google.com";


window.onload = function() {
    var xx = document.getElementById("demo");
    xx.style.color = '#6600FF';
    xx.style.width = '100px';
};


//creating Element
window.onload = function(){
var parag = document.createElement("p");
var chilD = document.createTextNode("Create Text by Element!!");
parag.appendChild(chilD);

var div = document.getElementById("demo2");
div.appendChild(parag);
}

//removing Element

var demParent = document.getElementById("demo");
var p1Child = document.getElementById("p1");
demParent.removeChild(p1Child);


//Replacing Element 

var pNew = document.createElement("p");
var txt = document.createTextNode("Some Text");
pNew.appendChild(txt);

var par = document.getElementById("demo");
var newpar = document.getElementById("p1");
par.replaceChild(pNew,newpar);

//Creating Animation
window.onload = function() {
    var pos = 0; 
   //our box element
   var box = document.getElementById('box');
   var t = setInterval(move, 10);
 
   function move() {
       if(pos >= 150) {
           clearInterval(t);
       }
       else {
           pos += 1;
           box.style.left = pos+'px';
       }
   }
};

//Handling Events
function showEvent() {
    alert("this is index page!");   
}

//Event Handler assigning to elements

window.onload = function() {
    var x = document.getElementById('demo');
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
};

function funcChange() {
    var na = document.getElementById("name");
    na.value = na.value.toUpperCase();
};

window.onload = function() {
var btn = document.getElementById("eva");
btn.addEventListener("click" , myFunc());

function myFunc(){
    alert(Math.random());
    btn.removeEventListener("click",myFunc());
}};

//Capturing propagation 
btn.addEventListener("click" , myFunc() , true)

//Bubbling propagation -- useCapture is not written the value is False for it
btn.addEventListener("click" , myFunc() , false)

//creating image slider 
var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
    ];
    var num = 0;
  
  function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
      num = 0;
    }
    slider.src = images[num];
    }
  
  function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
      num = images.length-1;
    }
    slider.src = images[num];
  }

  function validate() {
      var email1 = document.getElementById("email1");
      var email2 = document.getElementById("email2");
      if (email1.value !="" && email2.value !="") {
          if (email1.value == email2.value) {
              return true;
              
          }
          
      } else {
          alert("the values should be equel and not blank");
          return false;
          
      }
      
  }

  //defining variable with let and it generate an error due to scope
  if (true) {
      let name = "Naim"; 
  }
  alert(name);

  //One of the best uses for let is in loops
  for (let i = 0; i < array.length; i++) {
      document.write("Naim");
      
  }

  // const variable cant reassign  it is immutable
/*
  const a = "Naim";
  a = "Abbasi";
  */
 //Template Literals in ES6

 let name = "Naim";
 let last = name + "Abbasi";
 document.write(last);

 //other way of output string

 let nm = "Rana";
 let lst = `welcome ${nm}`;
 document.write(lst);

 let a = 1 ;
  let b = 3;
  let msg = `the sum is ${a+b}`;

  //Loops in ECMAScript 6 
  let arr = [1,2,3];
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      
  }
 
  let obj = {a:1 , b:2 , c:3};
  for (let v in obj) {
      console.log(v);
      
  }

  //loop  list

  let list = ["A" , "B" , "C"];
  for (let val of list) {
      console.log(val);
      
  }

  //loop character (string)

  for (let ch of "hello") {
      console.log(ch);
      
  }

  //function in javascript

  function add(x,y) {

    var sum = x+y;
    document.write(sum);      
  }

  //function in ES6

  const add  = (x,y) => {
      let sum = x+y;
      document.write(sum);
  }
// function with one parameter ES6
  const greet = x => "welcome" + x; 

  // ES6  with no parameter

  const greet = () => alert("Hi!")


  //forEach in js

  var arr = [2,3,4];
  arr.forEach(function(el){
      document.write(el*2);
  })

    //forEach in ES6

    const arr = [2,3,4];
    arr.forEach(v=> {
        document.write(v*2)
    })

    //print odd numbers

    const printOdd = (arr) => {
        arr.forEach(el => {
            if (el % 2 !=0) {
                document.write(el);
                
            }
        })
    }

    //default value in JS

    function calc(a , b=3 , c=2) {
        return a+b+c;  
    }
    document.write(calc(5));

    //default value in ES6

    const calc = (a,b=3,c=2)=>{
        return a +b +c ;
    }
    document.write(calc(5));

    //ES6 Objects


    let tree = {
        height : 10 ,
        color : 'Green',
        grow(){
            this.height +=2;
        }

    };
    tree.grow();
    document.write(tree.height);

    //Example of ES6 Object

    let car ={
        speed : 40 ,
        accelerate(){
            this.speed +=10;
        }
    };
    car.accelerate();
    car.accelerate();
    document.write(car.speed);

    //computed property name in ES6

    let prop = 'name';
    let id = '12086';
    let mobile = '9859';

    let user = {
        [prop] : 'Jack',
        [`user_${id}`] : `${mobile}`
    };

    //Example of propert name in ES6 

    var i = 0 ;
    var a = {
        ['foo' + ++i] : i ,
        ['foo' + ++i] : i,
        ['foo' + ++i] : i

    };
    document.write(a.foo1);
    document.write(a.foo2);
    document.write(a.foo3);

    //assigning object in ES6 

    let person = {
        name : 'Naim',
        age : '33',
        sex : 'male'
    };

    let student = {
        name : "Rana",
        age: "30",
        gender: "female"
    };

    let newStudent = Object.assign({},person,student);
    document.write(newStudent.name); //Rana
    document.write(newStudent.age); //30
    document.write(newStudent.gender); // female

    //Array Destructuring in ES6

    let arr = ['1', '2' , '3'];
    let [one , two , three] = arr;
    document.write(one); //1
    document.write(two); //2
    document.write(three); //3

    //Example of Destructuring in ES6

    let a = () => {
        return [1,2,3];
    };

    let [one ,two , three] = a();

    //Object Destructuring in ES6 

    let obj = {a:10 , b:true};
    let {a,b} = obj;
    document.write(a);
    document.write(b);
//Object Destructuring in ES6 -2

let a,b;
({a,b}={a:"Hello" , b:'123'});
document.write(a+b);

//Classes in ES6
class rect {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}

//create object from above classes

const ancle = new rect(5,5);

//define class with name

var square = class rectangle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
}

const recta = new square (4,3);

//define class without name 

var sqr = class{
    constructor(wi,hei){
        this.wi = wi;
        this.hei = hei;
    }
}

const recc = new sqr(5,2);
document.write(recc.wi);


//Inheritance in ES6
class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(this.name + ' barks.');
    }
  }
  let dog = new Dog('Rex');
  dog.speak(); // Rex barks.


  //ES6 Map

  let map = new Map([['k1' , 'V1'] , ['k2' , 'V2']]);
  document.write(map.size);

  //Example of Map in ES6

  let map = new Map();
  map.set('k1','v1').set('k2','v2');
  document.write(map.get('k1')); // v1
  document.write(map.has('k2')); // true

  //ES6 Set 
  let set = new Set([1,2,3,4,4,2,1]);
  document.write(set.size); //4


  //ES6 Set Example 
  let set = new Set();
set.add(5).add(9).add(59).add(9);

console.log(set.has(9)); // true

for (let v of set.values())
    console.log(v);  // 5-9-59

// setTimeOut 
 setTimeout(() => {
     document.write("end work");
     
     
 }, 1000);


 //Import und Export 
 //import the following from "util/calc.js"
 export const hit = (x, y, z) => {
    return x * y + z / 2;
  }
  export const degree = 50;

import * as calc from "util/calc";
calc.hit(1,2,calc.degree);





