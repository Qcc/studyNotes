// 方法	描述
// 底层接口
// $.ajax()	执行异步 AJAX 请求
// $.ajaxPrefilter()	在每个请求发送之前且被 $.ajax() 处理之前，处理自定义 Ajax 选项或修改已存在选项
// $.ajaxSetup()	为将来的 AJAX 请求设置默认值
// $.ajaxTransport()	创建处理 Ajax 数据实际传送的对象

// 快捷方法
// $.get()	使用 AJAX 的 HTTP GET 请求从服务器加载数据
// $.getJSON()	使用 HTTP GET 请求从服务器加载 JSON 编码的数据
// $.getScript()	使用 AJAX 的 HTTP GET 请求从服务器加载并执行 JavaScript
// $.post()	使用 AJAX 的 HTTP POST 请求从服务器加载数据
// load()	从服务器加载数据，并把返回的数据放置到指定的元素中

// 全局事件处理
// ajaxComplete()	规定 AJAX 请求完成时运行的函数
// ajaxError()	规定 AJAX 请求失败时运行的函数
// ajaxSend()	规定 AJAX 请求发送之前运行的函数
// ajaxStart()	规定第一个 AJAX 请求开始时运行的函数
// ajaxStop()	规定所有的 AJAX 请求完成时运行的函数
// ajaxSuccess()	规定 AJAX 请求成功完成时运行的函数

// 辅助函数
// $.param()	创建数组或对象的序列化表示形式（可用于 AJAX 请求的 URL 查询字符串）
// serialize()	编码表单元素集为字符串以便提交
// serializeArray()	编码表单元素集为 names 和 values 的数组