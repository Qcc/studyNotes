// 方法 描述

//过滤
// eq()     返回带有被选元素的指定索引号的元素
// filter() 把匹配元素集合缩减为匹配选择器或匹配函数返回值的新元素
// first()  返回被选元素的第一个元素
// has()    返回拥有一个或多个元素在其内的所有元素
// is()     根据选择器 / 元素 / jQuery 对象检查匹配元素集合， 如果存在至少一个匹配元素， 则返回 true
// last()   返回被选元素的最后一个元素
// map()    把当前匹配集合中的每个元素传递给函数， 产生包含返回值的新 jQuery 对象
// not()    从匹配元素集合中移除元素
// slice()      把匹配元素集合缩减为指定范围的子集

//其他遍历
// add()     把元素添加到匹配元素的集合中
// addBack() 把之前的元素集添加到当前集合中
// andSelf() 在版本 1.8 中被废弃。 addBack() 的别名
// contents()   返回被选元素的所有直接子元素（ 包含文本和注释节点）
// end()    结束当前链中最近的一次筛选操作， 并把匹配元素集合返回到前一次的状态

//树遍历
// children()   返回被选元素的所有直接子元素
// closest()    返回被选元素的第一个祖先元素
// find()   返回被选元素的后代元素
// next()   返回被选元素的后一个同级元素
// nextAll()    返回被选元素之后的所有同级元素
// nextUntil()  返回介于两个给定参数之间的每个元素之后的所有同级元素
// offsetParent() 返回第一个定位的父元素
// parent()     返回被选元素的直接父元素
// parents()    返回被选元素的所有祖先元素
// parentsUntil() 返回介于两个给定参数之间的所有祖先元素
// prev()       返回被选元素的前一个同级元素
// prevAll()    返回被选元素之前的所有同级元素
// prevUntil()  返回介于两个给定参数之间的每个元素之前的所有同级元素
// siblings()   返回被选元素的所有同级元素

// each()   为每个匹配元素执行函数