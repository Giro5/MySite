for (let i = 0; i < 9; i++) {
    document.getElementsByTagName("td")[i].onclick = function (e) {
        console.log(e.target.innerText);
    };
}

function Solution(text) {

}