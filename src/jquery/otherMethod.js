// jQuery 杂项方法
// 方法	描述
// data()	    向被选元素附加数据，或者从被选元素获取数据
// each()	    为每个匹配元素执行函数
// get()	    获取由选择器指定的 DOM 元素
// index()	    从匹配元素中搜索给定元素
// $.noConflict()	释放变量 $ 的 jQuery 控制权
// $.param()	创建数组或对象的序列化表示形式（可在生成 AJAX 请求时用于 URL 查询字符串中）
// removeData()	移除之前存放的数据
// size()	    在版本 1.8 中被废弃。返回被 jQuery 选择器匹配的 DOM 元素的数量
// toArray()	以数组的形式检索所有包含在 jQuery 集合中的所有 DOM 元素
// pushStack()	将一个DOM元素集合加入到jQuery栈
// $.when()	    提供一种方法来执行一个或多个对象的回调函数


// jQuery 实用工具
// 方法	描述
// $.boxModel	    在版本 1.8 中被废弃。检测浏览器是否使用W3C的CSS盒模型渲染当前页面
// $.browser	    在版本 1.9 中被废弃。返回用户当前使用的浏览器的相关信息
// $.contains()	    判断另一个DOM元素是否是指定DOM元素的后代
// $.each()	    遍历指定的对象和数组
// $.extend()	将一个或多个对象的内容合并到目标对象
// $.fn.extend()	为jQuery扩展一个或多个实例属性和方法
// $.globalEval()	全局性地执行一段JavaScript代码
// $.grep()	    过滤并返回满足指定函数的数组元素
// $.inArray()	在数组中查找指定值并返回它的索引值（如果没有找到，则返回-1）
// $.isArray()	判断指定参数是否是一个数组
// $.isEmptyObject()	检查对象是否为空（不包含任何属性）
// $.isFunction()	    判断指定参数是否是一个函数
// $.isNumeric()	    判断指定参数是否是一个数字值
// $.isPlainObject()	判断指定参数是否是一个纯粹的对象
// $.isWindow()	    判断指定参数是否是一个窗口
// $.isXMLDoc()	    判断一个DOM节点是否位于XML文档中，或者其本身就是XML文档
// $.makeArray()	将一个类似数组的对象转换为真正的数组对象
// $.map()	    指定函数处理数组中的每个元素(或对象的每个属性)，并将处理结果封装为新的数组返回
// $.merge()	合并两个数组内容到第一个数组
// $.noop()	    一个空函数
// $.now()	    返回当前时间
// $.parseHTML()	将HTML字符串解析为对应的DOM节点数组
// $.parseJSON()	将符合标准格式的JSON字符串转为与之对应的JavaScript对象
// $.parseXML()	    将字符串解析为对应的XML文档
// $.trim()	    去除字符串两端的空白字符
// $.type()	    确定JavaScript内置对象的类型
// $.unique()	在jQuery 3.0中被弃用。对DOM元素数组进行排序，并移除重复的元素
// $.uniqueSort()	对DOM元素数组进行排序，并移除重复的元素
// $.data()	    在指定的元素上存取数据，并返回设置值
// $.hasData()	确定一个元素是否有相关的jQuery数据
// $.sub()	    创建一个新的jQuery副本，其属性和方法可以修改，而不会影响原来的jQuery对象
// $.speed	    创建一个包含一组属性的对象用来定义自定义动画
// $.htmlPrefilter()	通过jQuery操作方法修改和过滤HTML字符串
// $.readyException()	处理包裹在jQuery()中函数同步抛出的错误


// jQuery 回调对象
// jQuery 1.7 版本中新增的 jQuery.Callbacks() 函数,返回一个多功能对象，此对象提供了一种强大的方法来管理回调列表。它能够增加、删除、触发、禁用回调函数。
// 方法	描述
// $.Callbacks()	    一个多用途的回调列表对象，用来管理回调函数列表
// callbacks.add()	    在回调列表中添加一个回调或回调的集合
// callbacks.disable()	    禁用回调列表中的回调函数
// callbacks.disabled()	    确定回调列表是否已被禁用
// callbacks.empty()	    从列表中清空所有的回调
// callbacks.fire()	    传入指定的参数调用所有的回调
// callbacks.fired()	确定回调是否至少已经调用一次
// callbacks.firewith()	    给定的上下文和参数访问列表中的所有回调
// callbacks.has()	    判断回调列表中是否添加过某回调函数
// callbacks.lock()	    锁定当前状态的回调列表
// callbacks.locked()	判断回调列表是否被锁定
// callbacks.remove()	从回调列表中的删除一个回调或回调集合


// jQuery 延迟对象
// 在jQuery 1.5中介绍了 Deferred 延迟对象，它是通过调用 jQuery.Deferred() 方法来创建的可链接的实用对象。它可注册多个回调函数到回调列表，调用回调列表并且传递异步或同步功能的成功或失败的状态。
// 延迟对象是可链接的，类似于一个 jQuery 对象可链接的方式，区别于它有自己的方法。在创建一个 Deferred 对象之后，您可以使用以下任何方法，直接链接到通过调用一个或多个的方法创建或保存的对象。
// 方法	描述
// $.Deferred()	        返回一个链式实用对象方法来注册多个回调
// deferred.always()	当Deferred（延迟）对象被受理或被拒绝时，调用添加的处理程序
// deferred.done()	    当Deferred（延迟）对象被受理时，调用添加的处理程序
// deferred.fail()	    当Deferred（延迟）对象被拒绝时，调用添加的处理程序
// deferred.isRejected()	从jQuery1.7开始已经过时，确定 Deferred 对象是否已被拒绝
// deferred.isResolved()	从jQuery1.7开始已经过时，确定 Deferred 对象是否已被解决
// deferred.notify()	    给定一个参数，调用正在延迟对象上进行的回调函数( progressCallbacks )
// deferred.notifyWith()	给定上下文和参数，调用正在延迟对象上进行的回调函数( progressCallbacks )
// deferred.pipe()	        过滤 and/or 链式延迟对象的工具方法
// deferred.progress()	    当Deferred（延迟）对象生成进度通知时，调用添加处理程序
// deferred.promise()	    返回 Deferred(延迟)的 Promise 对象
// deferred.reject()	    拒绝 Deferred（延迟）对象，并根据给定的参数调用任何 failCallbacks 回调函数
// deferred.rejectWith()	拒绝 Deferred（延迟）对象，并根据给定的 context 和 args 参数调用任何 failCallbacks 回调函数
// deferred.resolve()	    解决Deferred（延迟）对象，并根据给定的参数调用任何 doneCallbacks 回调函数
// deferred.resolveWith()	解决Deferred（延迟）对象，并根据给定的context 和 args 参数调用任何 doneCallbacks 回调函数
// deferred.state()	    确定一个Deferred（延迟）对象的当前状态
// deferred.then()	    当Deferred（延迟）对象解决，拒绝或仍在进行中时，调用添加处理程序
// .promise()	        返回一个 Promise 对象，观察某种类型被绑定到集合的所有行动，是否已被加入到队列中