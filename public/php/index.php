<meta charset="UTF-8">

<?php

echo "hello shit";

echo "<br>";

echo "<img src=\"/img/bg.png\">";

echo "<br>";

echo $_GET['a'] . ' и ' . $_GET['b'];

echo "<br>";

if (isset($_GET['a']) and isset($_GET['b'])) {
    echo "params updated";
}

echo "<a href='update.php'>Update</a>";
