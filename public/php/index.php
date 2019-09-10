<?php
session_start();
// echo "hello shit";

// echo "<br>";

// echo "<img src=\"/img/bg.png\">";

// echo "<br>";

// echo $_GET['a'] . ' и ' . $_GET['b'];

// echo "<br>";

// // if (isset($_GET['a']) and isset($_GET['b'])) {
// //     echo "params updated";
// // }

// // echo "<a href='update.php'>Update</a>";

// $a = 1; //variable

// if (isset($a)) { //checking for exist
//     echo $a; //echo - output operator
// }

// if (empty($a)) { //checking for empty value - 0 '' "" null
//     echo $a;
// }

// echo gettype($a); //int

// if (gettype($a) == "int") { //checking for data type
//     echo $a;
// }

// //getting dump of variable memory
// //doesn't include in program
// var_dump($a); //decrypting - always using that function

// //array
// $arr1 = array();
// $arr2 = array();
// $arr3 = [];

// //arrays are dynamic
// $b = [1, "text", true, null];
// $c = ["id" => 1, "login" => "text", "activated" => true, "pay" => null, 0 => 1];
// echo $c["id"];

// //find the key in array
// if (array_key_exists("id", $c)) {
//     echo $c["id"];
// }

// //find the value in array
// $value = array_search("text", $c); //mixed - mixed (any, dynamic) data type

// if (in_array("text", $c)) {
//     echo "found text";
// }

// //multidimension arrays
// $ac = array(array(), array());
// $ab = [[], []];

// $aca = array("a" => array(1, 2, 3));
// $aba = ["a" => [1, 2, 3], "b" => [1, 2, 3]];
// echo $aba["b"][2];

// /*using arrays:
// 1. as alternative using a lot of values
// 2. for data sort
// 3. one step return big data
// 4. data store
// */

// //functions
// function foo($a)
// { //private variable, argument
//     $b = 1; //just private variable
//     return $b + $a;
// }
// foo(4);
// $bb = foo(6);
// echo $bb . " " . foo(3);


// //anonimus functions
// $anon = function ($callback) {
//     return $callback();
// };
// echo $anon(function () {
//     return 1;
// }); //closure

// $f = 1;
// $rt = function () use ($f) {
//     return $f;
// };

// function argsArr(...$a)
// { //array of arguments

// }

// //condition
// if (true | false) { } else if (true & false) { } else { }

// $at = 1;
// switch ($at) {
//     case '1':
//         echo $at - 34;
//         break;
//     default:
//         echo "not found";
//         break;
// }

// var_dump($GLOBALS);
// $GLOBALS["_TEST"] = [];
// var_dump($_TEST);
// $_TEST["a"] = 1;
// var_dump($_TEST);

// var_dump($_SERVER);

// echo "your ip: " . $_SERVER["REMOTE_ADDR"] . "<br>";
// echo "you using the browser: " . $_SERVER["HTTP_USER_AGENT"] . "<br>";
// echo "info recived method: " . $_SERVER["REQUEST_METHOD"] . "<br>";

// preg_match('/(YaBrowser|Chrome|MSIE).*S/', $_SERVER["HTTP_USER_AGENT"], $match);

// switch ($match[0]) {
//     case 'Chrome':
//         echo "chrome";
//         break;
//     case 'YaBrowser':
//         echo "yandex";
//         break;
//     default:
//         echo "default";
//         break;
// }

// var_dump($_POST["a"]);
// var_dump($_POST["b"]);
// 
// 
?>
<!-- <form action="" method="post">
    <input type="text" name="b" placeholder="login">
    <br>
    <input type="text" name="a" placeholder="password">
    <br>
    <input type="submit" value="GET">
</form> -->

<?php

//include "test.php";//connect a public file
//include "../../private/private.php";//connect a private file

//file system

//1. work w/ files
//1.1. detailed
//fopen(file_name, mode)

//mode: 
//r - open file for reading(pointer at start)
//r+ - open file for reading & writing(pointer at start)
//w - open file clear all & writing
//w+ - open file as just "w" mode w/ reading
//a - open file for writing(pointer at end)
//a+ - open file as "a" mode w/ reading
//the open of file include in container

// $fo = fopen("test.txt", "a+");

//manipulation w/ file
//reading
//1. linear
//2. symbolic
//3. bytes

//1 - fgets(resource, byte_length); example:
// if ($fo) {
//     while (($buffer = fgets($fo, 4096)) !== false)
//         echo $buffer . "<br>";
//     if (!feof($fo))
//         echo "error: fgets is breaked";
//     fclose($fo);
// }

//2 - fgetc(resource);
// if (!$fo)
//     echo "error while open the file " . $fo;
// while (false !== ($char = fgetc($fo)))
//     echo $char;
// fclose($fo);

//write
//fwrite(resource, text)
// $text = "\nhello";
// $fw = fwrite($fo, $text); //any mode is working besides a mode "r"
// if (!$fw) {
//     echo "error data is not writing";
// }

//remove or delete
//unlink(resource);
// unlink("test.txt");

//simple solution
//1. file_get_contents(file_path) - open/read
//2. file_put_contents(file_path, text) - open/write
//getting
// $f = file_get_contents("test.txt");
// echo implode("<br>", explode("\n", $f));
//putting
// file_put_contents("test.txt", "hello"); //rewrite
//file_put_contents("test.txt", "hello\n", FILE_APPEND);//after write

//file_exists(file_path)
// if (!file_exists("test.txt")) {
//     echo "file is missing";
// } else {
//     echo "file has found";
// }

// //get directory info
// var_dump(scandir("c:/users/"));



echo $_SESSION["test"];

$_SESSION["test"] = "test";
