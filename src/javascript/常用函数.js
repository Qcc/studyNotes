// 添加事件
// 添加事件方法函数,兼容IE浏览器以及其他浏览器
addEvent(对象, 事件名称, 函数, 是否捕获时触发)

function addEvent(obj, type, fn, capture) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, capture);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, fn);
    }
}
// 移除事件
// 移除事件方法函数,兼容IE浏览器以及其他浏览器
removeEvent(对象, 事件名称, 函数, 是否捕获时触发)

function removeEvent(obj, type, fn, capture) {
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, capture);
    } else if (obj.detachEvent) {
        obj.detachEvent("on" + type, fn);
    }
}
// 阻止默认行为
// 阻止对象默认行为
preDef(Event对象)

function preDef(ev) {
    var ev = ev || window.event;
    if (ev.preventDefault) {
        ev.preventDefault();
    } else {
        ev.returnValue = false;
    }
}
// 获取触发事件目标
// 获取触发事件的节点
getTarget(Event对象)

function getTarget(ev) {
    var ev = ev || window.event;
    if (ev.target) {
        return ev.target;
    } else if (window.event.srcElement) {
        return window.event.srcElement;
    }
}
// 获取滚动条位置
// 获取滚动条的位置，即滚动距离，返回的结果是一个对象

function getSP() {
    return {
        top: document.documentElement.scrollTop || document.body.scrollTop,
        left: document.documentElement.scrollLeft || document.body.scrollLeft
    }
}
// 获取可视化窗口大小
// 获取可视化窗口大小

function getWindow() {
    if (window.innerWidth !== void 0) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}
// 获取屏幕坐标
// 获取鼠标的位置信息,该位置为鼠标在整个页面的位置，而不是可视化窗口的位置

function getMouse(ev) {
    if (ev.pageX !== void 0) {
        return { x: ev.pageX, y: ev.pageY };
    }
    return {
        x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y: ev.clientY + document.body.scrollTop - document.body.clientTop
    }
}
js拖拽效果(目标相对定位)
    // 实现JS的拖拽效果,利用相对定位实现
onDrop(dom节点)

function onDrop(ele) {
    if (ele.nodeType === 1) {
        ele.style.position = "relative";
        ele.onmousedown = function(ev) {
            var ev = ev || window.event;
            var diffX = ev.clientX - parseInt(ele.style.left + "0"),
                diffY = ev.clientY - parseInt(ele.style.top + "0");
            document.onmousemove = function(e) {
                var e = e || window.event;
                ele.style.left = e.clientX - diffX + "px";
                ele.style.top = e.clientY - diffY + "px";
            };
            document.onmouseup = function(e) {
                var e = e || window.event;
                this.onmousemove = null;
                this.onmouseup = null;
            };
        }
    }
}
// 判断类型
// 判断数据类型，返回首字母大写的字符串

function getType(ob) {
    return ({}).toString.call(ob).match(/(\w+)]$/)[1];
}
// 数组去重
// 返回没有重复值的新数组(多个NaN也视为重复)
// ES6最简 [...new Set([1,2,3,1,2,1,4])]
// ES5最简 [1,2,3,1,4,1,2,1].filter(function(e,i,arr){return i===arr.indexOf(e)})

function unique(arr) {
    var a = [],
        hasNaN = false;
    for (var i = 0; i < arr.length; i++) {
        if (a.indexOf(arr[i]) == -1) {
            if (arr[i] !== arr[i]) {
                if (hasNaN) {
                    continue;
                }
                hasNaN = true;
            }
            a.push(arr[i]);
        }
    }
    return a;
}
// 深度克隆
// 实现深度克隆对象

function clone(ob) {
    if (typeof ob === "object") {
        var newOb = ({}).toString.call(ob) === "[object Array]" ? [] : {};
        for (var name in ob) {
            newOb[name] = typeof ob[name] === "object" ? clone(ob[name]) : ob[name];
        }
        return newOb;
    } else {
        return ob;
    }
}
// 获取时间
// 返回格式化后的时间,str为格式化样式,默认为(yyyy-MM-dd HH:mm:ss),date为时间对象，默认为当前时间

function getTime(str, date) {
    var str = str || "yyyy-MM-dd HH:mm:ss";
    var date = date || new Date();
    var obj = {
        yyyy: date.getFullYear(),
        yy: ("" + date.getFullYear()).slice(-2),
        M: date.getMonth() + 1,
        MM: ("0" + (date.getMonth() + 1)).slice(-2),
        d: date.getDate(),
        dd: ("0" + date.getDate()).slice(-2),
        H: date.getHours(),
        HH: ("0" + date.getHours()).slice(-2),
        h: date.getHours() % 12,
        hh: ("0" + date.getHours() % 12).slice(-2),
        m: date.getMinutes(),
        mm: ("0" + date.getMinutes()).slice(-2),
        s: date.getSeconds(),
        ss: ("0" + date.getSeconds()).slice(-2),
        w: "星期" + ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
    };
    return str.replace(/([a-z]+)/ig, function($1) { return obj[$1] });
}
// 随机产生颜色
// 产生16进制的颜色值

function getColor() {
    return "#" + Math.random().toString(16).substr(2, 6);
}
// 天数跟秒转换
// 天数跟秒之间的转换,适用于倒计时,秒杀..
// 例如"1天12小时12分32秒"<==>130352之间相互转换

function changeTime(t) {
    if (typeof t === "string") {
        var num = 0;
        t.replace(/(\d+)(天|小时|分|秒)/g, function(a, b, c) {
            switch (c) {
                case "天":
                    num += (+b) * 86400;
                    break;
                case "小时":
                    num += (+b) * 3600;
                    break;
                case "分":
                    num += (+b) * 60;
                    break;
                case "秒":
                    num += (+b);
                    break;
            }
        });
        return num;
    } else if (typeof t === "number") {
        var time = "",
            ob = { "天": 86400, "小时": 3600, "分": 60, "秒": 1 };
        if (t < 0) return "0秒";
        for (var name in ob) {
            var num = ob[name];
            if (t >= num) {
                time += (t / num | 0) + name;
                t %= num;
            }
        }
        return time;
    }
}
// JS千分隔位
// 每3位数加个逗号，保留两位小数
// 123456.454==>123,456.45

function separator(str) {
    if (!isNaN(+str)) {
        str = (+str).toFixed(2);
        return str.replace(/\B(?=(?:\d{3})+\.)/g, ",");
    }
}
// 获取计算后样式
// 获取某个节点计算后样式,参数为dom节点,属性名称

function getCpStyle(ele, attribute) {
    if (typeof getComputedStyle === "function") {
        return getComputedStyle(ele)[attribute];
    } else if (ele.currentStyle) {
        return ele.currentStyle[attribute];
    }
}
// 获取XMLHTTPRequest对象
// 返回一个XMLHTTPRequest对象

function getXHR() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
}
// 类名操作
// 类似jq的toggleClass,没有就添加,有就删除

function setClass(ele, className) {
    if (ele.className !== void 0) {
        var str = ele.className,
            reg = new RegExp("\\b" + className + "\\s");
        if (reg.test(str)) {
            str = str.replace(reg, "");
        } else {
            str += " " + className + " ";
        }
        ele.className = str.replace(/\s+/, " ");
    }
}
// cookie操作
// 非本人写的，从mdn拉下来的，具体的可以去mdn看

var docCookies = {
    getItem: function(sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function(sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function(sKey) {
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }
};

// Ajax对象封装
// ajax

var Ajax = {
    get: function(url, fn) {
        var obj = new XMLHttpRequest();
        obj.open('GET', url, true);
        obj.onreadystatechange = function() {
            if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) {
                fn.call(this, obj.responseText);
            }
        };
        obj.send();
    },
    post: function(url, data, fn) {
        var obj = new XMLHttpRequest();
        obj.open("POST", url, true);
        obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        obj.onreadystatechange = function() {
            if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {
                fn.call(this, obj.responseText);
            }
        };
        obj.send(data);
    }
}