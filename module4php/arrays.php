<?php
$sport1="football";
$sport2="basketball";
$sport3="handball";
$sport4="voleyball";

$sports= array('football', 'basketball', 'handball', 'voleyball');
$sportss= ['football', 'basketball', 'handball', 'voleyball'];

echo $sportss[1];

echo end($sports);

echo count($sportss);

$len= count($sports);

 for($i=0 ; $i<$len ; $i++){
    echo $sports[$i], "\n" ;
 }


?>
