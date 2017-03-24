<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = json_encode($_POST);
  echo($json);
?>
