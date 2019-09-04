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

function Solution(text) {
    text = String(text);
    text = text.trimRight().trimLeft();
    let res = Number(text);
    if (!Number.isNaN(res)) {
        res = Number(text);
    }
    else {
        let txt = text.split(" "),
            rank = 0,
            ranks = {
                0: ["+", "-"],
                1: ["*", "/", "%"],
                2: ["^"]
            };
        for (let i = txt.length - 1; i > 0; i--) {
            if (ranks[rank].some(x => x == txt[i])) {
                let num1 = Solution(txt.slice(0, i).join(" ")),
                    num2 = Solution(txt.slice(i + 1, txt.length).join(" "));
                if (rank == 0) {
                    res = ranks[rank][0] == txt[i] ? num1 + num2 : num1 - num2;
                }
                else if (rank == 1) {
                    res = ranks[rank][0] == txt[i] ? num1 * num2 : ranks[rank][1] == txt[i] ? num1 / num2 : num1 % num2;
                }
                else if (rank == 2) {
                    res = Math.pow(num1, num2);
                }
                else {
                    console.log("error" + rank);
                }
                break;
            }
            if (i == 1) {
                i = txt.length;
                rank++;
            }
        }
    }
    console.log(text + " = " + res);
    return res;
}