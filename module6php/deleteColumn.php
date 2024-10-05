<?php
try{
$pdo = new PDO("mysql:host=localhost;dbname=db2", "root", "");

$sql = "ALTER TABLE users DROP COLUMN email";

$pdo->exec($sql);

echo "Column was dropped";
}catch(Exception $e){
    echo $e->getMessage();
}
?>