for (let cell of document.getElementsByTagName("td")) {
    cell.onclick = function (e) {
        // console.log(e.target.innerText);
        let b = e.target.innerText,
            text = document.getElementById("inputer");
        if (b == "=") {
            text.value = Solution(text.value);
        }
        else if (text.value.length == 0 ||
            text.value[text.value.length - 1] == " ") {
            text.value += b;
        }
        else {
            text.value += b + " ";
        }
    };
}

function Solution(text) {
    text = String(text);
    text = text.trimRight().trimLeft();
    let res = Number(text);
    if (res != NaN || res != undefined) {
        res = Number(text);
        return res;
    }
    else {
        let txt = text.split(" "),
            rank = 0
        ranks = {
            0: ["+", "-"],
            1: ["*", "/"]
        };
        for (let i = txt.length - 1; i > 0; i--) {
            if (ranks[rank].some(x => x == txt[i])) {
                let num1 = Solution(txt.slice(0, i).join(" ")),
                    num2 = Solution(txt.slice(i + 1, txt.length - i - 1).join(" "));
                if (rank == 0) {
                    res = ranks[rank][0] == txt[i] ? num1 + num2 : num1 - num2;
                }
                else if (rank == 1) {
                    res = ranks[rank][0] == txt[i] ? num1 * num2 : num1 / num2;
                }
                else {
                    console.log(rank);
                }
                break;
            }
            if (i == 1) {
                i = txt.length;
                rank++;
            }
        }
    }
    return res;
}