<?php
header ('Access-Control-Allow-Origin: *');
include ("database.php");
$action=$_POST['action'];
switch($action){
case "login":
$myemailname = ($_POST['email']);
$mypassword = ($_POST['pass']);

$sql = "SELECT * FROM registration WHERE email = '$myemailname' and password = '$mypassword'";
$resultq = mysqli_query($con,$sql);
$result = array();
$rows=array();
$row = mysqli_fetch_array($resultq);
$count = mysqli_num_rows($resultq);
if($count === 1)
{
        $rows['name']=$row['name'];
        $rows['mobile']=$row['mobile'];
        $rows['email']=$row['email'];
        $rows['gender']=$row['gender'];
        $rows['password']=$row['password'];
        $rows['department']=$row['course'];
        $rows['address']=$row['address'];
        $rows['status']=$row['status'];
        $result[]=$rows;
        echo json_encode(array('status' =>1,'data' =>$result));
}
else {
  echo json_encode(array('status' =>0));
}
break;
case "register":
     $value1 = $_POST['name'];
     $value2 = $_POST['mobile'];
     $value3 = $_POST['email'];
     $value4 = $_POST['gender'];
     $value5 = $_POST['pass'];
     $value6 = $_POST['department'];
     $value7 = $_POST['city'];

      $sql = "INSERT INTO registration(name, mobile, email, gender, password, course ,address) VALUES ('$value1', '$value2',
     '$value3', '$value4', '$value5', '$value6','$value7')";

    if(mysqli_query($con,$sql))
{
echo json_encode(array('status' =>1,'data' =>"thank"));
}
else
{
  echo json_encode(array('status' =>0));
}
break;
}
?>
