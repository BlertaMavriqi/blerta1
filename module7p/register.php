<?php

include_once('config.php');
if(isset($_POST['submit'])){
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$email = $_POST['email'];
    $username = $_POST['username'];
    $tempPass = $_POST['password'];
    $password = password_hash($tempPass, PASSWORD_DEFAULT);
    
    if(empty($name) || empty($surname) || empty($username) || empty($email) || empty($password) ||){
        echo "You need to fill all these fields";
    }
    else{
        $sql = "SELECT username FROM user WHERE username=:username";
        $tempSQL= $conn->prepare($sql);
        $tempSQL->bindParame(':username', $username);
        $tempSQL-> execute();

        if($tempSQL->rowCount()>0){
            echo "Username exists";
            header("refresh:2, url=signup.php");
        }
        else{
            //me insert po shtojna ne database te dhena
            $sql = "INSERT into user(name, surname, username, email, password) values (:name, :surname, :username, :email, :password)";
            // ibojna gati me hi ne sql
            $insertSql = $conn->prepare($sql);

            //bindparam tregon ku ka me shku ne sql shembull name tek name
            $insertSql->bindParam(':name', $name);
            $insertSql->bindParam(':surname', $surname);
            $insertSql->bindParam(':username', $username);
            $insertSql->bindParam(':email', $email);
            $insertSql->bindParam(':password', $password);
            
            $insertSql->execute();

            echo "Data saved succsessfully";
            header("refresh:2; url=login.php");
        }

    
    
    
    }


}

?>