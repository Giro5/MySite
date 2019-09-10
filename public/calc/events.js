for (let cell of document.getElementsByTagName("td")) {
    cell.onclick = function (e) {
        // console.log(e);
        let b = e.target.innerText,
            text = document.getElementById("inputer");
        if (b == "=") {
            text.value = Solution(text.value);
        }
        else if (b == "C") {
            text.value = "";
        }
        else if (b == "←") {
            text.value = text.value.slice(0, text.value.length - 1);
        }
        else if (b == "." && !text.value.split(" ")[text.value.split(" ").length - 1].includes(".")) {
            text.value += ".";
        }
        else if (e.target.className == "nums") {
            text.value += b;
        }
        else if (e.target.className == "opers" && text.value != "") {
            if (text.value[text.value.length - 1] == " ")
                text.value = text.value.slice(0, text.value.length - 3) + ` ${b} `;
            else
                text.value += ` ${b} `;
        }

    };
}