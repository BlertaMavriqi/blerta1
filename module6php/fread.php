<?php

$my_filename = 'ds.txt';
$my_file = fopen($my_filename, 'r');//r eshte per read only mood
$my_size = filesize($my_filename);
$my_filedata = fread($my_file,$my_size);

?>