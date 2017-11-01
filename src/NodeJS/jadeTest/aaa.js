function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "aaa.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (jadeHtml) {
jade_debug.unshift(new jade.DebugItem( 0, "aaa.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "aaa.jade" ));
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "aaa.jade" ));
buf.push("<html lang=\"zh-cn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "aaa.jade" ));
buf.push("<head>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "aaa.jade" ));
buf.push("<title>" + (jade.escape(null == (jade_interp = jadeHtml) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "aaa.jade" ));
buf.push("<body>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "aaa.jade" ));
buf.push("<h1>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("first jade");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "aaa.jade" ));
buf.push("<p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
buf.push("second jade p ");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}.call(this,"jadeHtml" in locals_for_with?locals_for_with.jadeHtml:typeof jadeHtml!=="undefined"?jadeHtml:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(lang=\"zh-cn\")\n  head\n    title=jadeHtml\n  body\n   h1 first jade\n   p second jade p \n");
}
}