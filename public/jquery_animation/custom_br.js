// //
// $(".test1").ready(function () {
//     console.dir(123);
// });
// //styles
// $(".test1").css("color", "red");

// $(".test1").css({
//     "box-shadow": "black 5px 0 4px",
//     "background": "green",
//     "fontSize": "30px",
//     "font-weight": "bolder"
// });
// //data
// //attribute "value"
// console.log($(".test2").val());
// //parie tags
// console.log($(".test1").text());
// console.log($(".test1").html());
// //write data
// $(".test2").val("mytext<hr>");
// $(".test1").text("mytext<hr>");
// $(".test1").html("mytext<hr>");

// console.log($(".test2").val());
// console.log($(".test1").text());
// console.log($(".test1").html());

// //adding attributes
// $("p").addClass("newP");
// //$("p").attr("class", "newP");
// $(".newP").attr("width", 100);
// $(".newP").text("new tag P");

// //removing attributes
// $("p").removeAttr("class");

// //events jquery
// //1 attribute
// //2  events js
// //mouse
// //drag'n'drop the element
// //loading file
// //moves mouse
// //input from keyboard
// $("#uniqueBtn").on({
//     click: function () {
//         alert("hello");
//     },
//     dblclick: function () {
//         alert("twice hello");
//     },
//     contextmenu: function () {
//         alert("context hello");
//     }
// });

//animation
var animeright = function () {
    $(".animate").animate({
        //css
        left: "+=800",
        top: "+=800"
    }, {
            //options animate
            duration: 3000,
            complete: function () {
                console.log("animation is finished");
                // animedown();
                animeleft();
            }
        })
};
var animedown = function () {
    $(".animate").animate({
        //css
        top: "+=500"
    }, {
            //options animate
            duration: 1080,
            complete: function () {
                console.log("animation is finished");
                animeleft();
            }
        })
};
var animeleft = function () {
    $(".animate").animate({
        //css
        left: "-=800",
        top: "-=800"
    }, {
            //options animate
            duration: 3000,
            complete: function () {
                console.log("animation is finished");
                // animeup();
                animeright();
            }
        })
};
var animeup = function () {
    $(".animate").animate({
        //css
        top: "-=500"
    }, {
            //options animate
            duration: 1080,
            complete: function () {
                console.log("animation is finished");
                animeright();
            }
        })
};
animeright();

$(".animate").on("click", function () {
    if ($(".animate").css("background-color") == "rgb(255, 0, 0)")
        $(".animate").css("background-color", "rgb(0, 0, 0)");
    else if ($(".animate").css("background-color") == "rgb(0, 0, 0)")
        $(".animate").css("background-color", "rgb(0, 0, 255)");
    else if ($(".animate").css("background-color") == "rgb(0, 0, 255)")
        $(".animate").css("background-color", "rgb(0, 255, 0)");
    else if ($(".animate").css("background-color") == "rgb(0, 255, 0)")
        $(".animate").css("background-color", "rgb(255, 255, 255)");
    else if ($(".animate").css("background-color") == "rgb(255, 255, 255)")
        $(".animate").css("background-color", "rgb(255, 0, 0)");
});