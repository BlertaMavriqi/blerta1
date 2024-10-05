<?php

$my_file = fopen('ds.txt','w');//w per write
$my_text = "digital school\n";

fwrite($my_file,$my_text);

?>