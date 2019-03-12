//работа с элементами в js
//1 - создать эелемнт
//2 - создать переменную в качестве хранилища инфо об элементе
var div1, div2, div3;
//3.1 - обращаемся к элемнту по тегу
div1 = document.getElementsByTagName("div");
//3.2 - обращаемся к элемнту по классу
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

function Add(a, b) {
    return a + b;
}
function Subtract(a, b) {
    return a - b;
}
function Multiply(a, b) {
    return a * b;
}
function Divide(a, b) {
    return a / b;
}
console.log(Add(1, 5));
console.log(Subtract(1, 5));
console.log(Multiply(1, 5));
console.log(Divide(1, 5));