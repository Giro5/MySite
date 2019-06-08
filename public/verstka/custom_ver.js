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