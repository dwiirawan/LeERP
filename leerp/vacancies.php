<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
session_start();
include("connect.php");
if(!isset($_SESSION['id'])){
header("location:index.php?e=1");
}
$le_user_id = $_SESSION['id'];
$info = array();
if (file_exists('g_i.xml')) {
    $string = file_get_contents('g_i.xml');
    $xml = simplexml_load_string($string);
    foreach($xml->children() as $child){
    	$info[] =  "" .$child;
    }
}
echo "<h1 class='title'>vacancies</h1><br/>";
$sql="SELECT * FROM structure";
$result=mysql_query($sql);
echo "<table><tr><td>";

echo "<table class='flexme2'>
			<thead>
				<tr>
					<th  width='390'>Job Title</th>
					<th  width='150'>Action</th>
				</tr>
			</thead><tbody>";
while($row = mysql_fetch_object($result)){
	$sql2= "SELECT * FROM info_jobs where id_structure=" . $row->id;
	$result2=mysql_query($sql2);
	if(mysql_num_rows($result2) == 0){
		echo "<tr>
		<td>".$row->posicion."</td>
		<td>";
		echo '<a href="https://twitter.com/share" class="twitter-share-button" data-url="'.$info[4].'" data-text="We need a '.$row->posicion.' here at '.$info[0].' #wearehiring">Tweet</a>';
		echo "</td>
		</tr>";
	}
}

echo "</table></td><td valign='top'>
<div class='clean-gray'>Remember that you can link this information through your website with this xml:
<br />
<br /><a href='vacancies_xml.php' target=_blank>XML</a>
</div>
</td></tr></table>";
?>
