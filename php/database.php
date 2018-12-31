<?php
$con=mysqli_connect("localhost","test","escl1.0");
if(!$con)
{
echo "not connected to server";
}
if(!mysqli_select_db($con,'student'))
{
echo "<br>database not selected";
}
?>
