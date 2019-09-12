<?php
$link = mysqli_connect(
    $db_host,
    $db_user,
    $db_pass,
    $db_name
);

if(!$link){
    die("Страница каталога не найдена");
}