//所有主流浏览器都支持 Attr 对象和 NamedNodeMap 对象。
attr.isId //如果属性是 ID 类型，则 isId 属性返回 true，否则返回 false。
attr.name //返回属性名称
attr.value //设置或者返回属性值
attr.specified //如果属性被指定返回 true ，否则返回 false

nodemap.getNamedItem() //从节点列表中返回的指定属性节点。
nodemap.item() //返回节点列表中处于指定索引号的节点。
nodemap.length //返回节点列表的节点数目。
nodemap.removeNamedItem() //删除指定属性节点
nodemap.setNamedItem() //设置指定属性节点(通过名称)