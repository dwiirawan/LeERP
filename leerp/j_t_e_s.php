<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
session_start();
include("connect.php");
if(!isset($_SESSION['id'])){
header("location:index.php?e=1");
}
if($_POST['action'] == 0){
 $sql= "INSERT INTO  `jt` (
`id` ,
`id_structure` ,
`description` ,
`notes`
)
VALUES (
NULL ,  '".$_POST['id']."',  '".$_POST['description']."',  '".$_POST['note']."'
);

";
mysql_query($sql);

}else{
$sql="UPDATE  `jt` SET  `description` =  '".$_POST['description']."' WHERE  `jt`.`id_structure` =".$_POST['id'].";"; 
$sql2="UPDATE  `jt` SET  `notes` =  '".$_POST['note']."' WHERE  `jt`.`id_structure` =".$_POST['id'].";"; 
mysql_query($sql);
mysql_query($sql2);
}

echo "<h1 class='title'>job title information: saved!</h1><br/><input type='button' value='back!' onclick=' j_e(".$_POST['id'].")'>";
?>
