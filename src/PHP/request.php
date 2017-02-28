<!DOCtype html>
<html>
<head>
    <meta charset ="utf-8">
    <title>title</title>
    <style>
    .error{
        color:red;
    }
    </style>
</head>
<body>
    <?php
    $ok = true;
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    $repwd = $_POST['repwd'];
    $color = $_POST['color'];
    $terms = $_POST['terms'];
    if(empty($email)){
        print "<p class=error>请输入邮箱。</p>";
        $ok=false;
    }
    if(empty($pwd)){
        print "<p class=error>请输入密码。</p>";
        $ok=false;
    }
    if(is_numeric($_POST['born'])){
        $age = 2017 - $_POST['born'];
    }else{
        print "<p class=error>年龄不正确。</p>";
        $ok=false;
    }



    if($ok){
        print "成功~~~";
    }

    ?>
</body>
</html>