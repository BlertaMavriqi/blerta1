<?php
try{
$pdo = new PDO("mysql:host=localhost;dbname=db2", "root", "");

$username = "Jack";
$password = password_hash("mypassword", PASSWORD_DEFAULT);

$sql = "INSERT INTO users(username,password) VALUES ('$username', '$password')";

$pdo->exec($sql);

echo "New record created";
}catch(Exception $e){
    echo $e->getMessage();
}
?>