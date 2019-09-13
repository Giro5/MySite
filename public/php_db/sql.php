<meta charset="UTF-8">
<?php
//PHP и SQL
//mysql_connect();
//new MySQLi();
//PDO();

//Подключение через mysql_connect(ост,юзер,пароль,бд[,порт])
//сохранить ссылку подключения к бд ($link = mysql_connect(ост,юзер,пароль,бд[,порт]);)
//Проверить подключение ($link != false)
//Осуществление запрос (mysql_query($link,sql-запрос);)
//Передать результат запроса в контейнер;
//результат != false
//Выполнить обработку результата и преобразование в массив(для SELECT)

//Для работы с бд используется phpMyAdmin

//Пример подключчения
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "site_php";

$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$link) {
    die(mysqli_connect_errno() . " " . mysqli_connect_error());
} else {
    echo ("SITE WORKING!" . "<br>");
}

//убрать отображение ошибок
// error_reporting(0);
// ini_set("display_errors",0);

//SELECT
$layout = function () use ($query, $link) {
    $query = mysqli_query($link, "SELECT * FROM users");
    //var_dump($query);
    echo "users:";
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Login</th></tr>";
    $cache = [];
    while ($row = mysqli_fetch_assoc($query)) {
        //вывод после преобразования в массив
        echo "<tr><td>" . $row['id'] . "</td><td>" . $row['login'] . "</td></tr>";
        //кеширование данных таблицы
        $cache[] = $row;
    }
    echo "</table>";
};
$layout();

//INSERT
$user_pass = md5('tester');
$query = mysqli_query($link, "INSERT INTO users (id,login) VALUES (NULL,'tester')");
if (!$query) {
    echo "Добавить нового пользователя не возможно";
}
echo "insert success " . $query;
$layout();

//UPDATE
$query = mysqli_query(
    $link,
    "UPDATE users SET login='newTester' WHERE login='tester'"
);
if (!$query) {
    echo "Обновление не возможно!";
}
echo "update success " . $query;
$layout();

//DELETE
$query = mysqli_query(
    $link,
    "DELETE FROM users WHERE login='newTester'"
);
echo "delete success " . $query;
$layout();

//ЗАКРЫТИЕ БД(не обязательно)
mysqli_close($link);
