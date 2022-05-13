<?php
header("Access-Control-Allow-Origin: *");
$files = scandir(".");
array_shift($files);
array_shift($files);
echo json_encode($files);

?>
