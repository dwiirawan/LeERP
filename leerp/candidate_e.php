<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
session_start();
include("connect.php");
if(!isset($_SESSION['id'])){
header("location:index.php?e=1");
}
$le_user_id = $_SESSION['id'];

$sql="SELECT * FROM candidates where id=". $_POST['id'];
$result=mysql_query($sql);
$row = mysql_fetch_object($result);

echo "<h1 class='title'>edit candidate information</h1><br/>";

echo "
<table>
<tr>
	<td>First Name:</td>
	<td>&nbsp;</td>
	<td><input type='text' style='width:300px;' id='fname' value='".$row->f_name."'></td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>Last Name:</td>
	<td>&nbsp;</td>
	<td><input type='text' style='width: 300px;' id='lname' value='".$row->l_name."'></td>
</tr>
<tr><td colspan='9'>&nbsp;</td></tr>
<tr>
	<td style='text-align: right;'>Phone:</td>
	<td>&nbsp;</td>
	<td><input type='text' style='width: 300px;' id='phone'  value='".$row->phone."'></td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>Email:</td>
	<td>&nbsp;</td>
	<td><input type='text' style='width: 300px;' id='email'  value='".$row->email."'></td>
</tr>
<tr><td colspan='9'>&nbsp;</td></tr>
<tr>
	<td  style='text-align: right;'>Twitter:</td>
	<td>&nbsp;</td>
	<td><input type='text' style='width: 300px;' id='twitter' value='".$row->twitter."'></td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>Position:</td>
	<td>&nbsp;</td>
	<td><select id='positionee'>
		";
$sql2="SELECT * FROM structure";
$result2=mysql_query($sql2);
while($row2 = mysql_fetch_object($result2)){
	$sql3= "SELECT * FROM info_jobs where id_structure=" . $row2->id;
	$result3=mysql_query($sql3);
	if(mysql_num_rows($result3) == 0){
		if($row->position_to_reach == $row2->id)
			echo "<option value='".$row2->id."' selected='selected'>".$row2->posicion."</option>";		
		else
			echo "<option value='".$row2->id."'>".$row2->posicion."</option>";
	}
}
echo "
		</select>	
	</td>
</tr>
<tr><td colspan='9'>&nbsp;</td></tr>
<tr>
	<td  style='text-align: right;' valign='top'>Picture:</td>
	<td>&nbsp;</td>
	<td>
		<div id='file-uploader-demo1'>		
			<noscript>			
				<p>Please enable JavaScript to use file uploader.</p>
				<!-- or put a simple form for upload here -->
			</noscript>         
		</div>
	</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td>&nbsp;&nbsp;&nbsp;</td>
	<td valign='top'>Resume:</td>
	<td>&nbsp;</td>
	<td>
		<div id='file-uploader-demo2'>		
			<noscript>			
				<p>Please enable JavaScript to use file uploader.</p>
				<!-- or put a simple form for upload here -->
			</noscript>         
		</div>
	</td>
</tr>
<tr><td colspan='9'>&nbsp;</td></tr>
<tr><td colspan='9'><center><input type='button' value='Save' onclick='update_candidate(".$row->id.");'/></center></td></tr>
</table>";


?>
