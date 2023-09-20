//alert("yoo");
var myName = "chirag";
//alert(myName);
let b = 20;
b = 30;
var a = 20;
var c = 40;
//if we want to swap
var d = a;
a = c;
c = d;
document.write(b);
var yourName = prompt("What is your name?");
document.write(yourName);
document.write("my name is " + yourName + ",nice to meet you and the value of b is " + b + "<br>");
var d = 16 + 4 + "volvo";
let e = "hi" + 16 + 4;
document.write("<br>"+e.length + d.length);
document.write(d + "<br>"+ e);
/*
var para = prompt("enter a para");
var len = para.length;
document.write("you have entered" + len + "characters and remaining" + (140-len) +"characters are there <br>")
*/
//document.write("<br>" + d.length + "out of 180 " + 180-(d.length) + "characters left");
x = 10;
if (true)
{
    x = 20;
}
console.log(x);
num = 10;
sum = 0;
//this is hoisting
for (var i = 0; i<num; i++)
{
    var sum = sum + i;
}

document.write(sum + "<br>" + num);

function add(a,b)
{
    return a+b;
}
var x = add(2,5);
console.log(x);

//arrow function
var add = (a,b) => {
    return a+b;
}
var y = add(232,333);
console.log(y);     

//camel casing is yourName.
//now if i delete the declarationo of the variables also, it will display the same.
//let b = 30; no redeclaration
//creates a data container whose name is myName where the semicolon acts as a lid to that container.
//Ctrl+K will clear the console.
/*
a=10
b=20 will work
but a = 10 b = 20 wont work as it is in the same line.
*/

var arr = [1,"11",22,34,44];
const fruits = ['banana',"guava","apple"];
console.log(typeof(arr));//object
console.log(typeof(arr[0]))//number
console.log(typeof(arr[1]))//string

let size = fruits.length;
document.write("<br>"+fruits+"<br>")
document.write("<br>"+size+"<br>")
fruits.length = 8;
document.write("<br>"+size+"<br>")//3 only

//join
let text = fruits.join(" and ");
document.write(text + "<br>");

fruits.push("Mango");
document.write(fruits+"<br>");
fruits.pop();
document.write(fruits+"<br>");
fruits.shift();
document.write(fruits+"<br>");
fruits.unshift("Papaya");
document.write(fruits+"<br>");

//concat
var t1 = ["a","b"];
var t2 = ["c","d"];

var t3 = t1.concat(t2);
document.write(t3 + "<br>");
document.write(t2.concat(t1) + "<br>");

//splice
fruits.splice(2,0,"lemon");//(position,number of elements you want to delete,what you want to insert at that particular position)
document.write(fruits+"<br>")


//slice
fruits.slice(1);
document.write(fruits + "<br>");

delete fruits[2];
document.write(fruits +"<br>")
/*
//setTimeout
var myTimeout = setTimeout(myGreeting,5000);

function myGreeting(){
    document.write("Hello there!");
}

//setInterval
setInterval(function()
{
    document.write("wuxx goood");
},1000)
*/
//Method 2:function inside object
var item = {
    "name" : "Chirag",
    "roll_no" : 60,
    "show" : function(){
        document.write(this.name + " " + this.roll_no + "<br>");
    }
};
item.show();
//method 1:object literals
//item.show = function() {
    //document.write(this.name + " " + this.roll_no + "<br>");
//};
//item.show();


function item3(name,price,quality) {
    this.name = name;
    this.price = price;
    this.quality = quality;
    this.show = function() {
        document.write(this.name + " " + this.price + " " + this.quality + "<br>");
    }
};

let item1 = new item3("Nike",2000,"good");
let item2 = new item3("Reebok",5000,"bad");
item1.show();
item2.show();

class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const car1 = new Car("Alto",2009);
const car2 = new Car("Maruti",2012);

document.write(car1.name + " " + car1.year + "<br>");

function Person() {
    this.name = 'Chirag';
    this.age = 20;
}

const Person1 = new Person();
const Person2 = new Person();

Person.prototype.gender = 'male';
document.write(Person1.gender + " " + Person2.gender + "<br>");

let student1 = {
    name: "chirag",
    age : 20,
    marks : 100,
    show() {
        document.write("Name:",this.name);
    }
};
let student2 = Object.create(student1);
student2.name = "rahul";
student2.show();
//if age or marks is displayed, it will display the details of student1