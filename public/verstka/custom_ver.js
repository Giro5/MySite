$body = $("body");
// $(".circle").on({
//     "click": function () {
//         $("#spirit").css("color", "red");
//     },
//     "dblclick": function () {
//         $("#spirit").css("color", "blue");
//     }
// });

$(document).on({
    "mouseover": function () {
        let $mid = $(event.target).attr("class");
        if ($mid == "middle")
            $("." + $mid).css("background", "white");
    },
    "mouseout": function () {
        let $mid = $(event.target).attr("class");
        if ($mid == "middle")
            $("." + $mid).css("background", "wheat");
    }
});

//reception access to head
let $head = $("head");
let $newCssLoadElement = $("<div class=\"cssload\">");
function cssLoad() {
    //create new el
    let $cssload = $("<link rel=\"stylesheet\" href=\"cssload.css\">");
    //add style into the begin of head
    $head.prepend($cssload);
    //create block of content for body
    //let $newCssLoadElement = $("<div class=\"cssload\">");
    //add block of content into the end of body
    $body.append($newCssLoadElement);
};

function jsLoad() {
    let $jsload = $('<script src="new_js.js" async="async"></script>');
    $head.append($jsload);
};

function test() {
    alert("hi new script");
};

$("#load").one("click", function () {
    cssLoad();
    jsLoad();
});

$("#del").one("click", function () {
    $newCssLoadElement.remove();
});

//асинхронный кросс-доменный запрос
$("#ajax").on("click", function () {
    $.ajax({
        "method": "GET", //methods - GET and POST
        "url": "ajax.json",
        "data": "",
        "success": function (response) {
            // alert("ajax");
            //var jsonajax = JSON.parse(response);
            $(".nav>div:nth-child(1)").text(response.a);
            $(".nav>div:nth-child(2)").text(response.b);
            console.dir(response);
        }
    });
});

$("#act").on("click", function () {
    let $text1 = $("#text1"), $text2 = $("#text2");
    $text2.val($text1.val());
});
$("#reset").on("click", function () {
    let $text2 = $("#text2");
    $text2.val("");
});

let $ajaxList = [
    ["1", "test2"],
    ["2", "test3"],
    ["3", "test4"],
    ["4", "test5"]
];
$("#add").on("click", function () {
    let $selectadd = $("#selectadd");
    let $list = "";
    for (let i = 0; i < $ajaxList.length; i++) {
        $list += `<option value="${$ajaxList[i][0]}">${$ajaxList[i][1]}</option>`;
    }
    $selectadd.html($list);
});

let $img = new Image();
$img.src = "http://scrawl/img/1.png"
$(".logo").html($img);