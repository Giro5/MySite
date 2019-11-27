<?php

class MyClass
{
    public $a = 4;
    private $b = 9;

    public function __construct($a, $b)
    {
        $this->a = $a;
        $this->b = $b;
    }

    public function geta()
    {
        return $this->b;
    }

    public function getb($b)
    {
        $this->setb($b);
        return $this->b;
    }

    private function setb($b)
    {
        $this->b = $b;
    }
}

class A
{
    public $x = 1;
}

class B
{
    public function getvalue(A $a)
    {
        return $a->x;
    }
}

class C
{
    private $c = 45;

    public function __construct($c)
    {
        $this->c = $c;
        echo $this->getC();
    }

    private function getC()
    {
        return $this->c;
    }
}


$myclass = new MyClass(23, 346);
// var_dump($myclass);
echo $myclass->a;
$myclass->a = 1;
echo $myclass->a;
echo $myclass->geta();
echo $myclass->getb(7);
echo $myclass->geta();

echo "<br>";

$myA = new A();
$myB = new B();
echo $myB->getvalue($myA);

echo "<br>";

$myC = new C(6543);

echo __DIR__ . "<br><br>";

var_dump($_SERVER);

echo "<br><br>your ip: " . $_SERVER["REMOTE_ADDR"] . "<br><br>";
echo "you using the browser: " . $_SERVER["HTTP_USER_AGENT"] . "<br><br>";
echo "info recived method: " . $_SERVER["REQUEST_METHOD"] . "<br><br>";
