<?php
$host="localhost"; // Host name
$username="root"; // Mysql username
$password="hola123"; // Mysql password
$db_name="le_erp"; // Database name
mysql_connect("$host", "$username", "$password") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");
?>
