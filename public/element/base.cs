private void Solution(string text)
        {
            text = string.Join(" ", text.Split(), 0, new string[]{ Plus, Minus, Mul, Div, "Mod", "^", "yroot" }.Any(x => x == text.Split().Last()) ? text.Split().Length - 1 : text.Split().Length)
                   .Remove(0, text.Length > 0 && text[0] == ' ' ? 1 : 0);//форматирование/подготовка строки для решения
            //History.Add(text);//history maybe
            try //если решать ничего не нужно
            {
                Result = Convert.ToDouble(text);
            }
            catch//решаем...
            {
                if (text.Contains("(")) //handler brackets
                {
                    int ibegin = -1, iend = -1;//временные данные
                    text += new string(')', text.Count(x => x == '(') - text.Count(x => x == ')'));//выравнивание скобок
                    MessageBox.Show(text);
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
                            //
                            //problem solved
                            //
                            for (int i = ibegin - 1; i >= 0 && text[i] != ' ' && text[i] != '('; i--)
                                ibegin--;
                            SolutionFunc(text.Remove(iend).Remove(0, ibegin) + ")");//и отправление ее на решение
                        }
                        else//получение строки внитри скобок
                            Solution(text.Remove(iend).Remove(0, ibegin + 1));//и отправление ее на решение(рекурсия)
                        text = text.Remove(ibegin, iend - ibegin + 1).Insert(ibegin, Result.ToString());//заменяет скобку на ее решение
                    }
                }
                try
                {
                    string[] txt = text.Split();//разделение строки на подстроки типа: число, операция, число, ...
                    if (txt.Length < 3)
                    {
                        Result = Convert.ToDouble(text);
                        return;
                    }
                    string[][] ranks = new string[][] { new string[] { Plus, Minus }, new string[] { Mul, Div, "Mod" }, new string[] { "^", "yroot" } };//создание рангов операций
                    for (int i = txt.Length - 1, rank = 0; i > 0; i--)
                    {
                        if (ranks[rank].Any(x => x == txt[i]))//если на актуальном ранге есть совпадение операций
                        {
                            Solution(string.Join(" ", txt, 0, i));//рекурсия для выявления первого операнда
                            double num1 = Result;
                            Solution(string.Join(" ", txt, i + 1, txt.Length - i - 1));//рекурсия для выявления второго операнда
                            if (rank == 0)//разделение вычислений на ранги
                                Result = ranks[rank][0] == txt[i] ? num1 + Result : num1 - Result;//+ or -
                            else if (rank == 1)
                                Result = ranks[rank][0] == txt[i] ? num1 * Result : (ranks[rank][1] == txt[i] ? num1 / Result : num1 % Result);//× or ÷ or mod
                            else if (rank == 2)
                                Result = ranks[rank][0] == txt[i] ? Math.Pow(num1, Result) : Math.Pow(num1, 1.0 / Result);//^ or yroot
                            else//overflow of rank
                            {
                                MessageBox.Show("Code #2:\n" + $@"""{text}""" + "\n...\nUnknown error\nFor continued press OK.", "Error");
                                buttonCancel.PerformClick();
                            }
                            break;//если нашли хоть одно совпадение оперций - это конечная, дальше дело за рекурсиями
                        }
                        if(i == 1)//повышение ранга
                        {
                            i = txt.Length;
                            rank++;
                        }
                    }
                }
                catch //если же при решение случилась ошибка 
                {//она обрабатывается как нерешаемая
                    MessageBox.Show("Code #3:\n" + $@"""{text}""" + "\n...\nUnknown error\nFor continued press OK.", "Error");
                    buttonCancel.PerformClick();
                }
            }
        }