// 属性和方法
element.accessKey //设置或返回accesskey一个元素
element.addEventListener() //向指定元素添加事件句柄
element.appendChild() //为元素添加一个新的子元素
element.attributes //返回一个元素的属性数组
element.childNodes //返回元素的一个子节点的数组
element.classlist //返回元素的类名，作为 DOMTokenList 对象。
element.className //设置或返回元素的class属性
element.clientHeight //在页面上返回内容的可视高度（不包括边框，边距或滚动条）
element.clientWidth //在页面上返回内容的可视宽度（不包括边框，边距或滚动条）
element.cloneNode() //克隆某个元素
element.compareDocumentPosition() //比较两个元素的文档位置。
element.contentEditable //设置或返回元素的内容是否可编辑
element.dir //设置或返回一个元素中的文本方向
element.firstChild //返回元素的第一个子节点
element.focus() //设置文档或元素获取焦点
element.getAttribute() //返回指定元素的属性值
element.getAttributeNode() //返/回指定属性节点
element.getElementsByTagName() //返回指定标签名的所有子元素集合。
element.getElementsByClassName() //返回文档中所有指定类名的元素集合，作为 NodeList 对象。
element.getFeature() //返回指定特征的执行APIs对象。
element.getUserData() //返回一个元素中关联键值的对象。
element.hasAttribute() //如果元素中存在指定的属性返回 true，否则返回false。
element.hasAttributes() //如果元素有任何属性返回true，否则返回false。
element.hasChildNodes() //返回一个元素是否具有任何子元素
element.hasfocus() //返回布尔值，检测文档或元素是否获取焦点
element.id //设置或者返回元素的 id。
element.innerHTML //设置或者返回元素的内容。
element.insertBefore() //现有的子元素之前插入一个新的子元素
element.isContentEditable //如果元素内容可编辑返回 true，否则返回false
element.isDefaultNamespace() //如果指定了namespaceURI 返回 true，否则返回 false。
element.isEqualNode() //检查两个元素是否相等
element.isSameNode() //检查两个元素所有有相同节点。
element.isSupported() //如果在元素中支持指定特征返回 true。
element.lang //设置或者返回一个元素的语言。
element.lastChild //返回的最后一个子元素
element.namespaceURI //返回命名空间的 URI。
element.nextSibling //返回该元素紧跟的一个节点
element.nodeName //返回元素的标记名（大写）
element.nodeType ///返回元素的节点类型
element.nodeValue //返回元素的节点值
element.normalize() //使得此成为一个"normal"的形式，其中只有结构（如元素，注释，处理指令，CDATA节和实体引用）隔开Text节点，即元素（包括属性）下面的所有文本节点，既没有相邻的文本节点也没有空的文本节点
element.offsetHeight //返回，任何一个元素的高度包括边框和填充，但不是边距
element.offsetWidth //返回元素的宽度，包括边框和填充，但不是边距
element.offsetLeft //返回当前元素的相对水平偏移位置的偏移容器
element.offsetParent //返回元素的偏移容器
element.offsetTop //返回当前元素的相对垂直偏移位置的偏移容器
element.ownerDocument //返回元素的根元素（文档对象）
element.parentNode //返回元素的父节点
element.previousSibling //返回某个元素紧接之前元素
element.querySelector() //返回匹配指定 CSS 选择器元素的第一个子元素
document.querySelectorAll() //返回匹配指定 CSS 选择器元素的所有子元素节点列表
element.removeAttribute() //从元素中删除指定的属性
element.removeAttributeNode() //删除指定属性节点并返回移除后的节点。
element.removeChild() //删除一个子元素
element.removeEventListener() //移除由 addEventListener() 方法添加的事件句柄
element.replaceChild() //替换一个子元素
element.scrollHeight //返回整个元素的高度（包括带滚动条的隐蔽的地方）
element.scrollLeft //返/回当前视图中的实际元素的左边缘和左边缘之间的距离
element.scrollTop //返回当前视图中的实际元素的顶部边缘和顶部边缘之间的距离
element.scrollWidth //返回元素的整个宽度（包括带滚动条的隐蔽的地方）
element.setAttribute() //设置或者改变指定属性并指定值。
element.setAttributeNode() //设置或者改变指定属性节点。
element.setIdAttribute()
element.setIdAttributeNode()
element.setUserData() //在//元素中为指定键值关联对象。
element.style //设置或返回元素的样式属性
element.tabIndex //设置或返回元素的标签顺序。
element.tagName //作为一个字符串返回某个元素的标记名（大写）
element.textContent //设置或返回一个节点和它的文本内容
element.title //设置或返回元素的title属性
element.toString() //一个元素转换成字符串

nodelist.item() //返回某个元素基于文档树的索引
nodelist.length //返回节点列表的节点数目。