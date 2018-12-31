<?php
$con_category_db=mysqli_connect("localhost","test","escl1.0");
if(!$con_category_db)
{
echo "not connected to server";
}
if(!mysqli_select_db($con_category_db,'categories'))
{
echo "<br>database not selected";
}
?>
