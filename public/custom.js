for (let i = 0; i < 9; i++) {
    document.getElementsByTagName("td")[i].onclick = function (e) {
        document.getElementById("inputer").value = e.target.innerText;
        // console.log(e);
    };
}

console.log(Math.SQRT1_2);

function dropfile(e) {
    console.dir(e);
}