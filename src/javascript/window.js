// Window 对象属性

closed //返回窗口是否已被关闭。
defaultStatus //设置或返回窗口状态栏中的默认文本。
document //对 Document 对象的只读引用。(请参阅对象)
frames //返回窗口中所有命名的框架。该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架。
history //对 History 对象的只读引用。请参数 History 对象。
innerHeight //返回窗口的文档显示区的高度。
innerWidth //返回窗口的文档显示区的宽度。
length //设置或返回窗口中的框架数量。
location //用于窗口或框架的 Location 对象。请参阅 Location 对象。
name //设置或返回窗口的名称。
navigator //对 Navigator 对象的只读引用。请参数 Navigator 对象。
opener //返回对创建此窗口的窗口的引用。
outerHeight //返回窗口的外部高度，包含工具条与滚动条。
outerWidth //返回窗口的外部宽度，包含工具条与滚动条。
pageXOffset //设置或返回当前页面相对于窗口显示区左上角的 X 位置。
pageYOffset //设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
parent //返回父窗口。
screen //对 Screen 对象的只读引用。请参数 Screen 对象。
screenLeft //返回相对于屏幕窗口的x坐标
screenTop //返回相对于屏幕窗口的y坐标
screenX //返回相对于屏幕窗口的x坐标
screenY //返回相对于屏幕窗口的y坐标
self //返回对当前窗口的引用。等价于 Window 属性。
status //设置窗口状态栏的文本。
top //返回最顶层的父窗口。

//Window 对象方法

alert() //显示带有一段消息和一个确认按钮的警告框。
blur() //把键盘焦点从顶层窗口移开。
clearInterval() //取消由 setInterval() 设置的 timeout。
clearTimeout() //取消由 setTimeout() 方法设置的 timeout。
close() //关闭浏览器窗口。
confirm() //显示带有一段消息以及确认按钮和取消按钮的对话框。
createPopup() //创建一个 pop-up 窗口。
focus() //把键盘焦点给予一个窗口。
moveBy() //可相对窗口的当前坐标把它移动指定的像素。
moveTo() //把窗口的左上角移动到一个指定的坐标。
open() //打开一个新的浏览器窗口或查找一个已命名的窗口。
print() //打印当前窗口的内容。
prompt() //显示可提示用户输入的对话框。
resizeBy() //按照指定的像素调整窗口的大小。
resizeTo() //把窗口的大小调整到指定的宽度和高度。
scroll()
scrollBy() //按照指定的像素值来滚动内容。
scrollTo() //把内容滚动到指定的坐标。
setInterval() //按照指定的周期（以毫秒计）来调用函数或计算表达式。
setTimeout() //在指定的毫秒数后调用函数或计算表达式。