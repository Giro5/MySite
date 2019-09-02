for (let i = 0; i < 9; i++) {
    document.getElementsByTagName("td")[i].onclick = function (e) {
        document.getElementById("inputer").value = e.target.innerText;
        // console.log(e);
    };
}