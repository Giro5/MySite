//работа с элементами в js
//1 - создать эелемнт
//2 - создать переменную в качестве хранилища инфо об элементе
var div1, div2, div3;
//3.1 - обращаемся к элемнтам по тегу
div1 = document.getElementsByTagName("div");
//3.2 - обращаемся к элемнтам по классу
div2 = document.getElementsByClassName("test1");
//3.3 - обращаемся к элемнту по идентификатору
div3 = document.getElementById("test2");
//4 - проверим содержимое элементов
console.dir(div1);
console.dir(div2);
console.dir(div3);
//5 - получить инфо из элемента\контент
//5.1 - получить все что лежит в теге
console.log(div2[0].innerText);//as text
console.log(div2[0].innerHTML);//as tag with text
//5.2 - получить все что лежит в теге
console.log(div3.innerText);//as text
console.log(div3.innerHTML);//as tag with text
//6 - добавление контента
//6.1
div2[1].innerText = "123";
div3.innerText = "456";
//6.2
div2[1].innerHTML = "<img>";
div3.innerHTML = "<div class=\"inner\">INNER DIV</div>";
var inner = document.getElementsByClassName("inner");
console.log(inner[0].innerHTML);
//work with styles
//adding style
div3.style.background = "red";
div3.style.fontSize = "20px";
div3.style.borderRadius = "10px";
//правило сокращения
var d = document;
var e = d.getElementById("test3");
var eStyle = e.style;
eStyle.background = "black";
console.log(e.innerHTML);
//создания элементов на js
//динамическое создание элементов
//1 - создание
var newElement = document.createElement("div");
//2 - добавляем параметры(свойства, атрибуты)
newElement.id = "newID";
newElement.className = "newClass";
newElement.style.background = "yellow";
newElement.innerText = "TEST new element";
//3 - создаем "родителя" нового элемента
var body = document.getElementsByTagName("body")[0];
//4 - добавляем созданный новый элемент как дочерний
body.appendChild(newElement);
//изменить класс или индификатор
console.log(newElement.className);
newElement.className += " testNewID";
console.log(newElement.className);

//arrays
//синтаксис
//var name_value = [values|array];
//виды массивов
//simple array
var arr = [1, 2, 3];
//
var arr2 = [[1, 2], [1, 2]];

var uksivt = {
    "16p1": 1,
    "16p2": 2,
    "director": 3,
}
//use as array
// console.log(uksivt["16p1"]);
//use as object
// console.log(uksivt.director);

// var group = {
//     name: "16is1",
//     students: {
//         0: "mamahin",
//         1: "kakahin",
//     }
// }
// console.dir(group.students[0]);

//function
// function test(a) {
//     a();
// }
// test(function () {
//     console.log(1);
// });

// var a = 1, b = 2, c = 3;
// var d = function (a) {
//     console.log(a);
// }
// var f = function () {
//     d = function () {
//         console.log(b);
//     }
// }
// d();//undefined
// f();//"nothing"
// d();//2

// function private1() {
//     var a = 1;
// }
// private1();
// console.log(a);

// function _return() {
//     var a = 1;
//     return a;
// }

// function Add( a, b) {
//     return a + b;
// }
// function Subtract(a, b) {
//     return a - b;
// }
// function Multiply(a, b) {
//     return a * b;
// }
// function Divide(a, b) {
//     return a / b;
// }
// console.log(Add(1, 5));
// console.log(Subtract(1, 5));
// console.log(Multiply(1, 5));
// console.log(Divide(1, 5));

//object-function
//creating f-o

//1
function newObject() {
    //private prop/values
    var priv = 1;
    //private func/methods
    var privFunc = function () {

    };
    function privFunc2() {
        var a = 1;
        console.log(priv);
    };

    //public prop/values
    this.pub = 2;
    //public func/methods
    this.pubFunc = function () {
        console.log("public func");
    };
}
var n0 = new newObject();
console.log(n0.pub);
n0.pubFunc();
//2
var newObject2 = new function () {

}
//newObject2. ...
var json = {
    pubVar: 1,
    pubFunc: function () {
        this.pubVar = 3;
        // alert("test");
    }
}
json.pubVar = 2;
console.log(json.pubVar);
json.pubFunc();
console.log(json.pubVar);
console.dir(json);

//json and Function-O
var oFaJson = new function () {
    var oJson = {
        a: 1,
        b: function () {

        }
    };
    oJson.a = 2;
    this.pub = oJson;

};
oFaJson.pub.a = 2;

//misstakes with func and json
//1 - without new
//2 - without , in json-array
//3 - without ;
//4 - неверно указано this
//5 - ошибки с областью видимости
//6 - uncorrect launched methods and properties
//7 - uncorrect using properies/values and functions/methods

//logical operations
//if-else structre
//1 - if (condition) {do}
//2 - if (condition) {do} else {do}
//3 - if (condition) {do} else if (conditon) else {do}

// var a = 1;
// if (a == 1) { }//true
// if (a != 1) { }//false
// if (a > 1) { }//false
// if (a >= 1) { }//true
// if (a != 1)/*false*/ { } else/*true*/ { }
// if (a > 1)/*false*/ { } else if (a < 1)/*false*/ { } else/*true*/ { }

//switch structre
/*switch(argument){
*     case may_value:
*         do_smth
*         break;
*     default: do;
*}*/

// var s = 1;
// switch (s) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//     default:
//         alert("default");
// }

//циклы

//для целочисленных массивов
//for(initiliaze; condition; increment/decrement) {do}

//для пошагового чтения любого массива
//for(var name_value in array) {do}

//для пошагового чтения объектов и массивов
//for(var name_value of array) {do}

//для логических операций
//while(condition) {do}

//цикл с постусловием
//do {do} while(condition);

var arr = [1, 2, 3, 4, 5];

console.log("for");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("while");
var a = 0;
while (a < arr.length) {
    console.log(arr[a]);
    a++;
}

console.log("do_while");
var a = 0;
do {
    console.log(arr[a]);
    a++;
} while (a < arr.length);

console.log("for_in");
for (var c in arr) {
    console.log(c);
}

console.log("for_of");
for (var c of arr) {
    console.log(c);
}

//многомерные массивы, вложенные циклы
var arr2 = [[1, 2, 3], [5, 6, 7]];
for (var i = 0; i < arr2.length; i++) {
    console.dir(arr2[i]);
    for (var j = 0; j < arr2[i].length; j++) {
        console.log(arr2[i][j]);
    }
    console.log();
}
//определение элементов
var arr3 = [];
for (var i = 0; i < 10; i++) {
    arr3[i] = i + 1;
}
console.dir(arr3);

var json = {
    1: 0,
    a: [1, 2, 3, 4],
    test: 1
}
console.dir(json);
// console.log(json[1]);
// for (var i = 0; i < 3; i++) {
//     if (!json[i])
//         continue;
//     console.dir(json[i]);
// }
for (var c in json) {
    console.log(c);
    console.dir(json[c]);
}

//5.4.19
