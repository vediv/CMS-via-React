<?php
$con_category_db=mysqli_connect("localhost","root","escl10.0");
if(!$con)
{
echo "not connected to server";
}
if(!mysqli_select_db($con_category_db,'categories'))
{
echo "<br>database not selected";
}
?>
