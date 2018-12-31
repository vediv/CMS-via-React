<?php
    error_reporting (E_ALL);
    ini_set('display_errors', 1);
header ('Access-Control-Allow-Origin: *');
include ("database.php");
include ("categoryDB.php");
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
echo json_encode(array('status' =>1,'data' =>"thanks"));
}
else
{
  echo json_encode(array('status' =>0));
}
break;
case "sidebar":

$parentKey=$_POST['parent_id'];
    function membersTree($parentKey)
     {
       global $con_category_db;
       $sql_main = "SELECT c_id, c_name,url,icon,date_of_c,status from  categories where parent_id='$parentKey'";
       $resultq = mysqli_query($con_category_db,$sql_main);
       //echo "santosh".$totalRow = mysqli_num_rows($resultq);
       while($value = mysqli_fetch_array($resultq)){
        $id = $value['c_id'];
        $row1[$id]['name'] = $value['c_name'];
        $row1[$id]['url'] = $value['url'];
        $row1[$id]['icon'] = $value['icon'];
        $row1[$id]['date'] = $value['date_of_c'];
        $row1[$id]['status'] = $value['status'];
        $sql_main_child = "SELECT * from  categories where parent_id='$id'";
        $resultchild = mysqli_query($con_category_db,$sql_main_child);
        $totalChild = mysqli_num_rows($resultchild);
        if($totalChild>0){
           $row1[$id]['children'] = array_values(membersTree($id));
          }

       }
      return $row1;
    }
    $sql = "SELECT * FROM categories where status=1";
    //$totalRow= db_totalRow($conn, $sql);
    $resultq = mysqli_query($con_category_db,$sql);
  $totalRow = mysqli_num_rows($resultq);

    if($totalRow > 0)
    {
      //echo "parentid==".$parentKey;
      $data =membersTree('0');
      }else{
       $data=["category_id"=>"0","cat_name"=>"No category present in list","text"=>"No category is present in list","nodes"=>[]];

    }
  echo json_encode(array('items'=>array_values($data)));

    // echo json_encode(array_values($data));
    break;
case "category":

    $parentKey=$_POST['parent_id'];
    $limit=$_POST['limit']; $offset=$_POST['offset'];
    $sql = "SELECT * FROM categories ";
    $resultq = mysqli_query($con_category_db,$sql);
    $totalRow = mysqli_num_rows($resultq);
     $sql_main = "SELECT c_id, c_name,url,icon,date_of_c,status from  categories  limit $offset,$limit";
     $resultq = mysqli_query($con_category_db,$sql_main);
           while($value = mysqli_fetch_array($resultq)){
            $id = $value['c_id'];
            $row1[$id]['id'] = $value['c_id'];
            $row1[$id]['name'] = $value['c_name'];
            $row1[$id]['url'] = $value['url'];
            $row1[$id]['icon'] = $value['icon'];
            $row1[$id]['date'] = $value['date_of_c'];
            $row1[$id]['status'] = $value['status'];
            $data=$row1;
           }
       echo json_encode(array('items'=>array_values($data),'totalRecord'=>$totalRow));
       mysqli_close($con_category_db);
        break;
case "category-data":
    $parentKey=$_POST['parent_id'];
        $sql = "SELECT * FROM categories";

        $resultq = mysqli_query($con_category_db,$sql);
      $totalRow = mysqli_num_rows($resultq);
        if($totalRow > 0)
        {
          $data =membersTree('0');
          }else{

    echo json_encode(array('size'=>'error'));
        }
      echo json_encode(array('size'=>$totalRow));
        // echo json_encode(array_values($data));
        break;
  case "category1":

        $sql = "SELECT * FROM categories where status='1'";
        $resultq = mysqli_query($con_category_db,$sql);
        $totalRow = mysqli_num_rows($resultq);
         $sql_main = "SELECT c_id,parent_id, c_name,icon from  categories ";
         $resultq = mysqli_query($con_category_db,$sql_main);
               while($value = mysqli_fetch_array($resultq)){
                $id = $value['c_id'];
                $row1[$id]['label'] = $value['c_name'];
                $row1[$id]['icon'] = $value['icon'];
                $data=$row1;}
               echo json_encode(array('items'=>array_values($data)));
                break;
case "edit":
  $id=$_POST['u_id'];
  $sql = "SELECT * FROM categories WHERE c_id = '$id'";
  $resultq = mysqli_query($con_category_db,$sql);
  $result = array();
  $rows=array();
  $row = mysqli_fetch_array($resultq);
  $rows['name']=$row['c_name'];
  $rows['url']=$row['url'];
  $rows['icon']=$row['icon'];
  $rows['date']=$row['date_of_c'];
  $result[]=$rows;
  echo json_encode(array('items' =>array_values($result)));
  break;
case "delete":

    $id=$_POST['u_id'];
    $sql = "DELETE FROM categories WHERE c_id = '$id'";
    $resultq = mysqli_query($con_category_db,$sql);
    echo json_encode(array('items' =>($id)));
    break;
case "charts":
$date=$_POST['date'];
  $sql = "SELECT COUNT(c_id) as User, MONTHNAME(date_of_c) date_time FROM categories where YEAR(date_of_c)='$date' GROUP BY MONTHNAME(date_of_c) ";
    $resultq = mysqli_query($con_category_db,$sql);
    $count = mysqli_num_rows($resultq);
    $result = array();
    $rows=array();
    while ($row = mysqli_fetch_array($resultq)) {
      $rows['user']=$row['User'];
      $rows['date']=$row['date_time'];
      $result[]=$rows;
    }
    $sql1 = "SELECT * FROM registration WHERE status = '1'";
    $resulta = mysqli_query($con,$sql1);
    $active = mysqli_num_rows($resulta);
    $sql2 = "SELECT * FROM registration WHERE status = '0'";
    $resulti = mysqli_query($con,$sql2);
    $inactive = mysqli_num_rows($resulti);
    echo json_encode(array('items' =>array_values($result),'active'=>$active,'inactive'=>$inactive,'total'=>$count));
    break;
    case "update":

        $value1 = $_POST['c_id1'];
        $value2 = $_POST['c_name1'];
        $value3 = $_POST['c_url1'];
        $value4 = $_POST['c_icon1'];
        $value5 = $_POST['c_date1'];
        $sql = "UPDATE categories SET c_name = '$value2', url= '$value3', icon= '$value4', date_of_c= '$value5' WHERE c_id= '$value1'";
        $resultq = mysqli_query($con_category_db,$sql);
        echo json_encode(array('status' =>1));
        break;

        case "dashboard_info":
            $sql = "SELECT * FROM registration";
            $resultt = mysqli_query($con,$sql);
            $total = mysqli_num_rows($resultt);
            $sql1 = "SELECT * FROM registration WHERE status = '1'";
            $resultq = mysqli_query($con,$sql1);
            $active = mysqli_num_rows($resultq);
            $sql2 = "SELECT * FROM registration WHERE status = '0'";
            $resultq = mysqli_query($con,$sql2);
            $inactive = mysqli_num_rows($resultq);
            echo json_encode(array('active'=>$active,'inactive'=>$inactive,'total'=>$total));
            break;
            case "status_update":
        $status = $_POST['Status'];
        $id = $_POST['Id'];
        $st= 1-$status;
        $sql = "UPDATE categories set status='$st' where c_id='$id'";
        if(mysqli_query($con_category_db,$sql))
        {
        echo json_encode(array('status'=>$st));
        }
        else
        {
        echo json_encode(array('status'=>"Not inserted"));
        }
        break;
        case "userlist":
            $limit=$_POST['limit']; $offset=$_POST['offset'];
            $sql = "SELECT * FROM registration ";
            $resultq = mysqli_query($con,$sql);
            $totalRow = mysqli_num_rows($resultq);
             $sql_main = "SELECT * from  registration  limit $offset,$limit";
             $resultq = mysqli_query($con,$sql_main);
                   while($value = mysqli_fetch_array($resultq)){
                    $id = $value['sno'];
                    $row1[$id]['u_id'] = $value['sno'];
                    $row1[$id]['u_name'] = $value['name'];
                    $row1[$id]['u_mobile'] = $value['mobile'];
                    $row1[$id]['u_email'] = $value['email'];
                    $row1[$id]['u_gender'] = $value['gender'];
                    $row1[$id]['u_pass'] = $value['password'];
                    $row1[$id]['u_course'] = $value['course'];
                    $row1[$id]['u_address'] = $value['address'];
                    $row1[$id]['u_status'] = $value['status'];
                    $data=$row1;
                   }
               echo json_encode(array('items'=>array_values($data),'totalRecord'=>$totalRow));
               mysqli_close($con);
                break;
                case "user_status":
            $status = $_POST['Status'];
            $id = $_POST['Id'];
            $st= 1-$status;
            $sql = "UPDATE registration set status='$st' where sno='$id'";
            if(mysqli_query($con,$sql))
            {
            echo json_encode(array('status'=>$st));
            }
            else
            {
            echo json_encode(array('status'=>"Not inserted"));
            }
            break;
            case "u_edit":
              $id=$_POST['u_id'];
              $sql = "SELECT * FROM registration WHERE sno = '$id'";
              $resultq = mysqli_query($con,$sql);
              $result = array();
              $rows=array();
              $row = mysqli_fetch_array($resultq);
              $rows['u_name']=$row['name'];
              $rows['u_mobile']=$row['mobile'];
              $rows['u_email']=$row['email'];
              $rows['u_gender']=$row['gender'];
              $rows['u_pass']=$row['password'];
              $rows['u_course']=$row['course'];
              $rows['u_add']=$row['address'];
              $result[]=$rows;
              echo json_encode(array('items' =>array_values($result)));
              break;
              case "u_update":

                  $value1 = $_POST['u_id1'];
                  $value2 = $_POST['u_name1'];
                  $value3 = $_POST['u_mobile1'];
                  $value4 = $_POST['u_email1'];
                  $value5 = $_POST['u_pass1'];
                  $value6 = $_POST['u_gender1'];
                  $value7 = $_POST['u_course1'];
                  $value8 = $_POST['u_address1'];
                  $sql = "UPDATE registration SET name = '$value2', mobile= '$value3', email= '$value4', password= '$value5', gender= '$value6', course= '$value7', address= '$value8' WHERE sno= '$value1'";
                  $resultq = mysqli_query($con,$sql);
                  echo json_encode(array('status' =>1));
                  break;
                  case "u_delete":

                      $id=$_POST['u_id'];
                      $sql = "DELETE FROM registration WHERE sno = '$id'";
                      $resultq = mysqli_query($con,$sql);
                      echo json_encode(array('items' =>($id)));
                      break;
case "prevupload":

$valid_extensions = array('jpeg', 'jpg', 'png', 'gif', 'bmp' , 'pdf' , 'doc' , 'ppt');
$path = 'localhost/cms/upload/user/';

if(!empty($_POST['name']) || !empty($_POST['host']) || $_FILES['image'])
{
$img = $_FILES['image']['name'];
$tmp = $_FILES['image']['tmp_name'];

$ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));

$final_image = rand(1000,1000000).$img;

if(in_array($ext, $valid_extensions))
{
$path = $path.strtolower($final_image);

if(move_uploaded_file($tmp,$path))
{
$name = $_POST['name'];
$host = $_POST['host'];

  $sql = "INSERT INTO images(name, thumbnail, hostname) VALUES ('".$name."','".$host."','".$path."')";
  $result = mysqli_query($con,$sql);
    echo json_encode(array('status' =>1,'data' => 'thanks'));
}
}
else
{
  echo json_encode(array('status' =>0));
}
}
 break;

 case "upload":
  $msg = "";
  if(isset($_POST['upload'])) {
  $target="cms/upload/user".basename($_FILES['image']['name']);
  echo $image = $_FILES['image']['name'];

  ///$sql = "INSERT INTO images (thumbnail) VALUES ('$image')";
  //$result = mysqli_query($con,$sql);

  if(move_uploaded_file($_FILES['name']['tmp_name'], $target)){
    $msg = "Image uploaded successfully";
  }
  else {
    $msg = "There was a problem in uploading images";
  }
  echo json_encode(array('status' =>1,'data' =>  base64_encode($image)) );
}
  break;
}
?>
