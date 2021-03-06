// 方法	描述
// CSS属性
// addClass()	    向被选元素添加一个或多个类名
// hasClass()	    检查被选元素是否包含指定的 class 名称
// removeClass()	从被选元素移除一个或多个类
// toggleClass()	在被选元素中添加/移除一个或多个类之间切换

// 复制元素
// clone()	        生成被选元素的副本

// DOM插入包裹
// wrap()	        在每个被选元素的周围用 HTML 元素包裹起来
// wrapAll()	    在所有被选元素的周围用 HTML 元素包裹起来
// wrapInner()	    在每个被选元素的内容周围用 HTML 元素包裹起来
// unwrap()	        移除被选元素的父元素

//DOM插入现有元素内部
// append()	        在被选元素的结尾插入内容
// appendTo()	    在被选元素的结尾插入 HTML 元素
// prepend()	    在被选元素的开头插入内容
// prependTo()	    在被选元素的开头插入 HTML 元素
// html()	        设置或返回被选元素的内容
// text()	        设置或返回被选元素的文本内容

//DOM插入现有元素外部
// after()	        在被选元素后插入内容
// before()	        在被选元素前插入内容
// insertAfter()	在被选元素后插入 HTML 元素
// insertBefore()	在被选元素前插入 HTML 元素

//DOM移除
// detach()	        移除被选元素（保留数据和事件）
// empty()	        从被选元素移除所有子节点和内容
// remove()	        移除被选元素（包含数据和事件）

//DOM替换
// replaceAll()	    把被选元素替换为新的 HTML 元素
// replaceWith()	把被选元素替换为新的内容

//通用属性替换
// attr()	        设置或返回被选元素的属性/值
// prop()	        设置或返回被选元素的属性/值
// removeAttr()	    从被选元素移除一个或多个属性
// removeProp()	    移除通过 prop() 方法设置的属性
// val()	        设置或返回被选元素的属性值（针对表单元素）

//CSS属性
// css()	        为被选元素设置或返回一个或多个样式属性
// height()	        设置或返回被选元素的高度
// innerHeight()	返回元素的高度（包含 padding，不包含 border）
// innerWidth()	    返回元素的宽度（包含 padding，不包含 border）
// jQuery.cssNumber  指包含所有可以不使用单位的CSS属性的对象。
// offset()	        设置或返回被选元素的偏移坐标（相对于文档）
// offsetParent()	返回第一个定位的祖先元素
// outerHeight()	返回元素的高度（包含 padding 和 border）
// outerWidth()	    返回元素的宽度（包含 padding 和 border）
// position()	    返回元素的位置（相对于父元素）
// scrollLeft()	    设置或返回被选元素的水平滚动条位置
// scrollTop()	    设置或返回被选元素的垂直滚动条位置
// width()	        设置或返回被选元素的宽度
// $.escapeSelector()	转义CSS选择器中有特殊意义的字符或字符串
// $.cssHooks	    提供了一种方法通过定义函数来获取和设置特定的CSS值