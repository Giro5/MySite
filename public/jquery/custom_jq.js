//receive element and save it into variable
let $test = $(".test");
//watch on info that stored in memory
console.dir($test);
console.log("first element text: " + $test.text());
//text() - receive and changing content in element
$test.text("123");//jq
//$test.innerText = "123";//jq+js
console.log("changed element text: " + $test.text());

//analog .text() -> .html() executing tags
$test.html("<b>123</b>");
//removing element
$test.remove();

//searching element as storage
let $body = $("body");
console.dir($body);

//create new element
let $newElem = $("<div class=\"newElem\">");

//including new element
$body.prepend($newElem);//in start
$body.append($newElem);//in end

//css
//add one property:value;
$newElem.css("width", "100px");
//add few properties
$newElem.css({
    "height": "100px",
    "background": "red",
    "border": "2px solid black"
});

//events
//on() - base method to add events
$newElem.on("click", function () {
    if ($newElem.css("background-color") == "rgb(255, 0, 0)")
        $newElem.css("background-color", "rgb(0, 0, 0)");
    else if ($newElem.css("background-color") == "rgb(0, 0, 0)")
        $newElem.css("background-color", "rgb(0, 0, 255)");
    else if ($newElem.css("background-color") == "rgb(0, 0, 255)")
        $newElem.css("background-color", "rgb(0, 255, 0)");
    else if ($newElem.css("background-color") == "rgb(0, 255, 0)")
        $newElem.css("background-color", "rgb(255, 255, 255)");
    else if ($newElem.css("background-color") == "rgb(255, 255, 255)")
        $newElem.css("background-color", "rgb(255, 0, 0)");
});
// $newElem.on("click", function () {
//     $newElem.css("height", "200px");
// });

// $newElem.on({
//     "dblclick": function () {
//         alert("double click");
//     },
//     "contextmenu": function () {
//         alert("rigth click");
//     }
// });

//animation
$newElem.animate({
    "width": "+=1000"
}, {
        duration: 5000,
        easing: "linear",
        complete: function () {
            $newElem.css("width", "100px");
        }
    });