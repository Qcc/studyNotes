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
    $arr= array(
        1=>"kevin",
        2=>"miki",
        3=>"daisy",
        4=>"clara"
    );

   

    echo "<br>";
    echo "<pre>";
    print_r($arr);
    echo "</pre>";


    $arr[]="kouton";
    $arr[]="CTBS";

    echo "<br>";
    echo "<pre>";
    print_r($arr);
    echo "</pre>";

    $count = count($arr);
    echo "<br>";
    echo "<h4>数组长度：$count</h4>"
    ?>
</body>
</html>