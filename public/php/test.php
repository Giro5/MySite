<?php
session_start();
echo $_SESSION["test"];


$_SESSION["test"] = "test2";

// echo "hi, i am file of test connect";
