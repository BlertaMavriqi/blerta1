<?php

//declaring parameters
$host = 'localhost';
$user = 'root';
$pass = '';

try{
    $conn = new PDO ("mysql:host=$host", $user, $pass);
    $sql = "Create database db";
    $conn -> exec($sql);
    echo "Connected";
}catch(Exception $e){ //perdoret me catch nese ka gabim
    echo "DataBase not created, something went wrong";
}
?>