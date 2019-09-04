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

$a = 1; //variable

if (isset($a)) { //checking for exist
    echo $a; //echo - output operator
}

if (empty($a)) { //checking for empty value - 0 '' "" null
    echo $a;
}

echo gettype($a); //int

if (gettype($a) == "int") { //checking for data type
    echo $a;
}

//getting dump of variable memory
//doesn't include in program
var_dump($a); //decrypting - always using that function

//array
$arr1 = array();
$arr2 = array();
$arr3 = [];

//arrays are dynamic
$b = [1, "text", true, null];
$c = ["id" => 1, "login" => "text", "activated" => true, "pay" => null, 0 => 1];
echo $c["id"];

//find the key in array
if (array_key_exists("id", $c)) {
    echo $c["id"];
}

//find the value in array
$value = array_search("text", $c); //mixed - mixed (any, dynamic) data type

if (in_array("text", $c)) {
    echo "found text";
}

//multidimension arrays
$ac = array(array(), array());
$ab = [[], []];

$aca = array("a" => array(1, 2, 3));
$aba = ["a" => [1, 2, 3], "b" => [1, 2, 3]];
echo $aba["b"][2];

/*using arrays:
1. as alternative using a lot of values
2. for data sort
3. one step return big data
4. data store
*/

//functions
function foo($a)
{ //private variable, argument
    $b = 1; //just private variable
    return $b + $a;
}
foo(4);
$bb = foo(6);
echo $bb . " " . foo(3);


//anonimus functions
$anon = function ($callback) {
    return $callback();
};
echo $anon(function () {
    return 1;
}); //closure

$f = 1;
$rt = function () use ($f) {
    return $f;
};

function argsArr(...$a)
{ //array of arguments

}

//condition
if (true | false) { } else if (true & false) { } else { }

$at = 1;
switch ($at) {
    case '1':
        echo $at - 34;
        break;
    default:
        echo "not found";
        break;
}
