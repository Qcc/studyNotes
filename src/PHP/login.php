 <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>页头</title>
 
</head>

<body>
 <?php
    $mysqli = new mysqli('localhost','root','','dbname');
    $query='SELECT sku,name,price FROM products ORDER by name';
    $result=$mysqli->query($query,MYSQLI_STORE_RESULT);

    printf("一共查询到了%s行。<br />",$result->num_rows);
    while(list($sku,$name,$price) = $result->fetch_row())
        printf("(%s) %s:\$%s <br />",$sku,$name,$price);

  ?>

</body>

</html>