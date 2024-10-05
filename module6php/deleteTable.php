<?php
try{
$pdo = new PDO("mysql:host=localhost;dbname=db2", "root", "");

$sql = "DROP TABLE products";

$pdo->exec($sql);

echo "Table was dropped";
}catch(Exception $e){
    echo $e->getMessage();
}
?>