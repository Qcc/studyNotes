# studyNotes
studyNotes
## MarkDown语法
1. 标题
* #一级标题
* ##二级标题
* ###三级标题
* ####四级标题
* #####五级标题
* ######六级标题
2. 列表
* *无序列表
* 1.、2.、3.有序列表
3. 引用
* >大于号后面表示引用
4. 链接与图片
* [链接](http://exp.com) 
* ![图片](http:pic.png)
5. 粗体与斜体
* **粗体**
* *斜体*
6. 表格
* |表头|表头|表头|
  |---:|---:|---:|
  | 行1| 行1| 行1|
  | 行2| 行2| 行2|
7. 代码
```
Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
}
Number.method("intger", function() {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

String.method("trim", function() {
    return this.replace(/^\s+|\s+$/g, '');
});

var fibonacci = function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

var fibonacci = function() {
    var memo = [0, 1];
    var fib = function(n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();

for (var i = 0; i <= 40; i += 1) {
    console.log(i + ":" + fibonacci(i) + "\n");
}