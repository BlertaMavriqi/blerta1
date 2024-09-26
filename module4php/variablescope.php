<?php
$x=5; //global variable
function LocalVariable(){
    $y=10; // local variable
    echo $y;

}
LocalVariable();
echo "\n, $x";
?>