// window
// alert("hello world");

// console
// console.log("hello console");

// counter
// var i = 0;
// setInterval(function () {
//     i++;
//     console.log("step: " + i);
//     if (i === 10) {
//         i = 0;
//     }
// }, 1000);

// console.log(location.href);
// console.log(location.href.split("/"));

// console.dir(window);

// location.href = "http://" + location.href.split("/")[2];

//var i = 0;
// setInterval(function () {
//     i++;
//     console.log(i);
//     document.getElementById("btnID").style.transform = "rotate(" + i.toString() + "deg)";
//     if (i == 359)
//         return;
// }, 1);

document.getElementById("btnID").click.bind(function () {
    for (var i = 0; i < 360; i++) {
        console.log(i);
        document.getElementById("btnID").style.transform = "rotate(" + i.toString() + "deg)";
    }
});
// document.getElementById("btnID").click += rot();
console.log(document.getElementById("btnID").click);