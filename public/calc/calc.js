function Solution(text) {
    let res = Number(text);
    if (!Number.isNaN(res))
        return res;
    text = text.replace(/[ ]/g, "");//full trim
    //solution for brackets
    if (text.includes("(")) {
        let ibegin = -1,
            iend = -1;
        text += ")".repeat(text.match(/[(]/g).length - text.match(/[)]/g).length);
        console.log(text);
        while (text.includes("(")) {
            ibegin = text.lastIndexOf("(");
            iend = text.indexOf(")", ibegin + 1);
            if (ibegin > 0 && !(["+", "-", "*", "/", "%", "^", "("].some(x => x == text[ibegin - 1]))) {
                //text[i] != /\d/ &&
                for (let i = ibegin - 1; i >= 0; i--) {
                    if (["+", "-", "*", "/", "%", "^", "("].some(x => x == text[ibegin - 1]))
                        break;
                    ibegin--;
                }
                res = SolutionFunc(text.slice(ibegin, iend) + ")");
                console.log("func:\"" + text.slice(ibegin, iend) + ")\"");
            }
            else
                res = Solution(text.substring(ibegin + 1, iend));
            console.log(text.slice(0, ibegin) + res.toString() + text.slice(iend + 1, text.length));
            text = text.slice(0, ibegin) + res.toString() + text.slice(iend + 1, text.length);
        }
    }
    //finish solution
    text = text.replace(/[+-/*%/^]/g, x => ` ${x} `);
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
    console.log(text + " = " + res);
    return res;
}

function SolutionFunc(text) {
    let ibegin = text.indexOf("("),
        iend = text.lastIndexOf(")", ibegin + 1),
        txt = text.slice(ibegin + 1, iend),
        Result = Solution(txt),
        func = text.slice(0, ibegin);
    switch (func) {//решение огромного кол-во фун.
        case "!":
        case "fact"://факториал
            for (let i = Result - 1; i > 1; i--)
                Result *= i;
            if (Result == 0)
                Result = 1;
            break;
        case "10^"://10 в степени (много не ставить, а то даже кальк винды ругается)
            Result = Math.pow(10.0, Result);
            break;
        case "sqrt"://квадратный корень
            Result = Math.sqrt(Result);
            break;
        case "sqr"://квадрат
            Result = Math.pow(Result, 2.0);
            break;
        case "1/":
            Result = 1.0 / Result;
            break;
        case "cube":
            Result = Math.pow(Result, 3.0);
            break;
        case "lg"://десятичный логарифм
            Result = Math.log10(Result);
            break;
        case "ln"://натуральный логарифм
            Result = Math.log(Result);
            break;
        case "e^"://возведение в экспаненту
            Result = Math.exp(Result);
            break;
        case "-":
            Result = -Result;
            break;
        case "abc":
            Result = Math.abs(Result);
            break;
        //trigonometry func
        case "sin":
            Result = Math.sin(Result);
            break;
        case "cos":
            Result = Math.cos(Result);
            break;
        case "tan":
            Result = Math.tan(Result);
            break;
        case "tg":
            Result = Math.tan(Result);
            break;
        case "cot":
            Result = 1 / Math.tan(Result);
            break;
        case "ctg":
            Result = Math.cos(Result) / Math.sin(Result);
            break;
        //arc trigonometry func
        case "asin":
            Result = Math.asin(Result);
            break;
        case "arcsin":
            Result = Math.asin(Result);
            break;
        case "acos":
            Result = Math.acos(Result);
            break;
        case "arccos":
            Result = Math.acos(Result);
            break;
        case "atan":
            Result = Math.atan(Result);
            break;
        case "arctan":
            Result = Math.atan(Result);
            break;
        case "arcctg":
            Result = Math.PI / 2 - Math.atan(Result);
            break;
        case "acot":
            Result = Math.PI / 2 - Math.atan(Result);
            break;
        //hyperbolic trigonometry func
        case "sinh":
            Result = Math.sinh(Result);
            break;
        case "sh":
            Result = Math.sinh(Result);
            break;
        case "cosh":
            Result = Math.cosh(Result);
            break;
        case "ch":
            Result = Math.cosh(Result);
            break;
        case "tanh":
            Result = Math.tanh(Result);
            break;
        case "th":
            Result = Math.tanh(Result);
            break;
        case "coth":
            Result = 1 / Math.tanh(Result);
            break;
        case "cth":
            Result = 1 / Math.tanh(Result);
            break;
        //arc hyperbolic trigonometry func
        case "asinh":
            Result = Math.log(Result + Math.sqrt(Math.pow(Result, 2.0) + 1.0));
            break;
        case "acosh":
            Result = Math.log(Result + Math.sqrt(Math.pow(Result, 2.0) - 1.0));
            break;
        case "atanh":
            Result = 0.5 * Math.log((1.0 + Result) / (1.0 - Result));
            break;
        case "acoth":
            Result = 0.5 * Math.log((Result + 1.0) / (Result - 1.0));
            break;
    }
    return Result;
}