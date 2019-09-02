<?php
session_start();

if(!empty($_SESSION['a'])){
    echo "got the params: ".$_SESSION['a'];
}