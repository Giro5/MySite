// window
// alert("hello world");
// console
console.log("hello console");
// counter
var i = 0;
setInterval(function () {
    i++;
    console.log("step: " + i);
    if (i === 10) {
        i = 0;
    }
}, 1000);
