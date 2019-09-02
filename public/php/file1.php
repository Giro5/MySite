<?php
session_start();

if(isset($_GET['a'])){
    $_SESSION['a'] = $_GET['a'];

    echo "params've been saved";
}
else {
    echo "params hasn't been saved";
}