<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
session_start();
include("connect.php");
if(!isset($_SESSION['id'])){
header("location:index.php?e=1");
}

echo "<h1 class='title'>monitoring</h1><br/>";
$sql="SELECT * FROM candidates";
$result=mysql_query($sql);
echo "<table class='flexme4'>
			<thead>
				<tr>
					<th  width='150'>Action</th>
					<th  width='150'>Position</th>
					<th  width='150'>First Name</th>
					<th  width='150'>Last Name</th>
					<th  width='150'>Last Interview</th>
				</tr>
			</thead><tbody>";	
	while($row = mysql_fetch_object($result)){
		$sql2="SELECT * FROM structure where id=". $row->position_to_reach;
		$result2=mysql_query($sql2);
		$row2 = mysql_fetch_object($result2);
		echo "<tr><td><center><a href='#' onclick='monitoring_add(".$row->id.");'>Add Interview</a><br /><a href='#' onclick='m_s_n(".$row->id.");'>Past interview notes</a><br /><a href='#' onclick='m_c(".$row->id.");'>Hire Now!</a></center></td>
		<td>".$row2->posicion."</td>
		<td>".$row->f_name."</td>
		<td>".$row->l_name."</td>";
		$sql3="SELECT * FROM monitoreo where candidate_id=". $row->id;
		$result3=mysql_query($sql3);
		if(mysql_num_rows($result3) == 0){
			echo "<td>No past interviews</td>";
		}else{
			while($row3 = mysql_fetch_object($result3)){
				$ultima = $row3;
			}
			echo "<td>".$ultima->i_date."</td>";
		}

echo "</tr>
		";
}
?>
