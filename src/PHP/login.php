 <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>页头</title>
 
</head>

<body>
 <?php
  $search_dir = '.';
$contents = scandir($search_dir);
print '<h2>目录</h2><ul>';
foreach($contents as $item){
    if((is_dir($search_dir . '/' . $item)) && (substr($item,0,1) != '.')){
        print "<li>$item</li>\n";
    }
}
print "</ul>";
print '<hr /><h2>所有文件</h2>
<table cellpadding="2" cellspacing = "2" align="left">
<tr>
<td>文件名</td>
<td>大小</td>
<td>修改时间</td>
</tr>';

foreach($contents as $item){
    if((is_file($search_dir . "/" . $item)) && (substr($item,0,1) !='.')){
        $fs =filesize($search_dir . '/'. $item);
        $lm = date('F j,Y',filemtime($search_dir . '/' . $item));
        print "<tr>
        <td>$item</td>
        <td>$fs bytes</td>
        <td>$lm</td>
        </tr>\n";
    }
}
print "</table><br />";
 
$ceil=array("a1","a2","a3");
 
print in_array("a3",$ceil);
  ?>

</body>

</html>