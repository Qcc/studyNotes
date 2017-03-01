 <?php
 session_start();
 ob_start();
 define('TITLE','Login');
 include("temp/header.html");

 if($_SERVER['REQUEST_METHOD'] == 'POST'){
     if((strtolower($_POST['email']) == 'kevin@kouton.com')
     &&($_POST['password'] == '123456')){
         print "登录成功";
         setcookie("name","kevin");
         echo $_COOKIE['name'];
 
     }else{
         print "用户名或密码错误！";
     }
 }else{
     print "<form action='login.php' method='POST'>
        用户名：<input type='email' name='email'><br/>
        密码：<input type='password' name='password'><br />
        <input type='submit' value='提交'>
     </form>";
 }
 include("temp/footer.html");
 ob_end_flush();
 ?>
 