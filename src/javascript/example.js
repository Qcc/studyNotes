// onclick //当用户点击某个对象时调用的事件句柄。	2
// oncontextmenu //在用户点击鼠标右键打开上下文菜单时触发	 
// ondblclick //当用户双击某个对象时调用的事件句柄。	2
// onmousedown //鼠标按钮被按下。	2
// onmouseenter //当鼠标指针移动到元素上时触发。	2
// onmouseleave //当鼠标指针移出元素时触发	2
// onmousemove //鼠标被移动。	2
// onmouseover //鼠标移到某元素之上。	2
// onmouseout //鼠标从某元素移开。	2
// onmouseup //鼠标按键被松开。	2

document.getElementsByTagName('body')[0].addEventListener('onclick', function(e) {
    var ele = e.target;
    console.log(ele.nodeValue + "：onclick！");
});