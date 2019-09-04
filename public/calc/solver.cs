using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace MAFbrief
{
    public partial class Solver
    {
        const string Mul = "*";//константа строки умножения
        const string Plus = "+";//константа строки плюса
        const string Minus = "-";//константа строки минуса
        const string Div = "/";//константа строки деления

        const char mul = '*';//константа символа умножения
        const char plus = '+';//константа символа плюса
        const char minus = '-';//константа символа минуса
        const char div = '/';//константа символа деления

        readonly string[][] ranks = new[] { new[] { Plus, Minus }, new[] { Mul, Div, "Mod" }, new[] { "^", "yroot" } };//создание рангов операций

        private double Solution(string text)
        {
            double Result = 0;
            text = text.TrimStart().TrimEnd();
            text = string.Join(
                " ",
                text.Split(),
                0,
                (new[] { Plus, Minus, Mul, Div, "Mod", "^", "yroot" }
                    .Any(x => x == text.Split().Last())
                        ? text.Split().Length - 1 : text.Split().Length)//вырезает операцию из уравнения т.к. не задан второй операнд
            );
            try//если решать ничего не нужно
            {
                Result = Convert.ToDouble(text);
            }
            catch//решаем...
            {
                if (text.Contains("("))//handler brackets
                {
                    int ibegin = -1, iend = -1;//временные данные
                    text += new string(')', text.Count(x => x == '(') - text.Count(x => x == ')'));//выравнивание скобок
                    while (text.Contains("("))
                    {
                        for (int i = 0; i < text.Length; i++) //поиск последней левой скобки
                            if (text[i] == '(')
                                ibegin = i;
                        for (int j = ibegin + 1; j < text.Length; j++)//поиск первой правой скобки, после последней левой скобки
                            if (text[j] == ')')
                            {
                                iend = j;
                                break;
                            }
                        if (ibegin > 0 && text[ibegin - 1] != ' ')//получение функции
                        {
                            for (int i = ibegin - 1; i >= 0 && text[i] != ' ' && text[i] != '('; i--)
                                ibegin--;
                            Result = SolutionFunc(text.Remove(iend).Remove(0, ibegin) + ")");//и отправление ее на решение
                        }
                        else//получение строки внитри скобок
                            Result = Solution(text.Remove(iend).Remove(0, ibegin + 1));//и отправление ее на решение(рекурсия)
                        text = text.Remove(ibegin, iend - ibegin + 1).Insert(ibegin, Result.ToString());//заменяет скобку на ее решение
                    }
                }
                string[] txt = text.Split();//разделение строки на подстроки типа: число, операция, число, ...
                if (txt.Length < 3)//because the method is recursive can come number
                {
                    Result = Convert.ToDouble(text);
                    return Result;
                }
                int rank = 0;
                for (int i = txt.Length - 1; i > 0; i--)//check from the end
                {
                    if (ranks[rank].Any(x => x == txt[i]))//если на актуальном ранге есть совпадение операций
                    {
                        double num1 = Solution(string.Join(" ", txt, 0, i));//рекурсия для выявления первого операнда
                        double num2 = Solution(string.Join(" ", txt, i + 1, txt.Length - i - 1));//рекурсия для выявления второго операнда
                        if (rank == 0)//разделение вычислений на ранги
                            Result = ranks[rank][0] == txt[i] ? num1 + num2 : num1 - num2;//+ or -
                        else if (rank == 1)
                            Result = ranks[rank][0] == txt[i] ? num1 * num2 : (ranks[rank][1] == txt[i] ? num1 / num2 : num1 % num2);//× or ÷ or mod
                        else if (rank == 2)
                            Result = ranks[rank][0] == txt[i] ? Math.Pow(num1, num2) : Math.Pow(num1, 1.0 / num2);//^ or yroot
                        else//overflow of rank
                        {
                            MessageBox.Show("Code #2:\n" + $@"""{text}""" + "\n...\nOverflow Of Rank Error\nFor continued press OK.", "Error");
                            //buttonCancel.PerformClick();
                        }
                        break;//если нашли хоть одно совпадение оперций - это конечная, дальше дело за рекурсией
                    }
                    if (i == 1)//повышение ранга
                    {
                        i = txt.Length;
                        rank++;
                    }
                }
            }
            return Result;
        }

        private double SolutionFunc(string text)
        {//решение функций(а то в Solution'е итак много всякого) 
            if (text[0] == ' ')
                text = text.Remove(0, 1);
            int ibegin = 0, iend = 0;
            for (int i = 0; i < text.Length; i++)
                if (text[i] == '(')
                {
                    ibegin = i;
                    break;
                }
            for (int j = ibegin + 1; j < text.Length; j++)
                if (text[j] == ')')
                    iend = j;
            string tmp = text.Remove(iend);
            tmp = tmp.Remove(0, ibegin + 1);
            double Result = Solution(tmp);//рекурсия ^^
            string func = text.Remove(ibegin);
            //все что вверху было, да-да это обработка функции для решения
            switch (func)
            {//решение огромного кол-во фун.
                case "fact"://факториал
                    for (double i = Result - 1.0; i > 1.0; i--)
                        Result *= i;
                    if (Result == 0)
                        Result = 1;
                    break;
                case "!":
                    goto case "fact";
                case "10^"://10 в степени (много не ставить, а то даже кальк винды ругается)
                    Result = Math.Pow(10.0, Result);
                    break;
                case "sqrt"://квадратный корень
                    Result = Math.Sqrt(Result);
                    break;
                case "sqr"://квадрат
                    Result = Math.Pow(Result, 2.0);
                    break;
                case "1/":
                    Result = 1.0 / Result;
                    break;
                case "cube":
                    Result = Math.Pow(Result, 3.0);
                    break;
                case "lg"://десятичный логарифм
                    Result = Math.Log10(Result);
                    break;
                case "ln"://натуральный логарифм
                    Result = Math.Log(Result);
                    break;
                case "e^"://возведение в экспаненту
                    Result = Math.Exp(Result);
                    break;
                case "-":
                    Result = -Result;
                    break;
                case "abc":
                    Result = Math.Abs(Result);
                    break;
                //trigonometry func
                case "sin":
                    Result = Math.Sin(Result);
                    break;
                case "cos":
                    Result = Math.Cos(Result);
                    break;
                case "tan":
                    Result = Math.Tan(Result);
                    break;
                case "tg":
                    Result = Math.Tan(Result);
                    break;
                case "cot":
                    Result = 1 / Math.Tan(Result);
                    break;
                case "ctg":
                    Result = Math.Cos(Result) / Math.Sin(Result);
                    break;
                //arc trigonometry func
                case "asin":
                    Result = Math.Asin(Result);
                    break;
                case "arcsin":
                    Result = Math.Asin(Result);
                    break;
                case "acos":
                    Result = Math.Acos(Result);
                    break;
                case "arccos":
                    Result = Math.Acos(Result);
                    break;
                case "atan":
                    Result = Math.Atan(Result);
                    break;
                case "arctan":
                    Result = Math.Atan(Result);
                    break;
                case "arcctg":
                    Result = Math.PI / 2 - Math.Atan(Result);
                    break;
                case "acot":
                    Result = Math.PI / 2 - Math.Atan(Result);
                    break;
                //hyperbolic trigonometry func
                case "sinh":
                    Result = Math.Sinh(Result);
                    break;
                case "sh":
                    Result = Math.Sinh(Result);
                    break;
                case "cosh":
                    Result = Math.Cosh(Result);
                    break;
                case "ch":
                    Result = Math.Cosh(Result);
                    break;
                case "tanh":
                    Result = Math.Tanh(Result);
                    break;
                case "th":
                    Result = Math.Tanh(Result);
                    break;
                case "coth":
                    Result = 1 / Math.Tanh(Result);
                    break;
                case "cth":
                    Result = 1 / Math.Tanh(Result);
                    break;
                //arc hyperbolic trigonometry func
                case "asinh":
                    Result = Math.Log(Result + Math.Sqrt(Math.Pow(Result, 2.0) + 1.0));
                    break;
                case "acosh":
                    Result = Math.Log(Result + Math.Sqrt(Math.Pow(Result, 2.0) - 1.0));
                    break;
                case "atanh":
                    Result = 0.5 * Math.Log((1.0 + Result) / (1.0 - Result));
                    break;
                case "acoth":
                    Result = 0.5 * Math.Log((Result + 1.0) / (Result - 1.0));
                    break;
            }
            return Result;
        }

        private void AutoY_CheckedChanged(object sender, EventArgs e)
        {
            if (AutoY.Checked)
            {
                YMin.Enabled = false;
                YMax.Enabled = false;
            }
            else
            {
                YMin.Enabled = true;
                YMax.Enabled = true;
            }
        }
    }
}
