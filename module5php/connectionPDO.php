<?php

//declaring parameters
$host = 'localhost';
$user = 'root';
$pass = '';

try{
    $conn = new PDO ("mysql:host"=$host, $user, $pass);
    echo "Connected";
}catch(Exception $e){ //perdoret me catch nese ka gabim
    echo "Not Connected";
}
?>