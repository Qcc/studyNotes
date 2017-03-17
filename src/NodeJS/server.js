var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");
http.createServer(function(req, res) {
    // console.log(req.url);
    var pathname = __dirname + url.parse(req.url).pathname;
    if (path.extname(pathname) == "") {
        pathname += 'index.html';
    }
    if (pathname.charAt(pathname.length - 1) == "/") {
        pathname += "index.html";
    }
    console.log(pathname);
    fs.access(pathname, fs.constants.R_OK, function(err) {
        if (!err) {
            switch (path.extname(pathname)) {
                case ".html":
                    res.writeHead(200, { "Content-Type": "text/html" });
                    break;
                case ".js":
                    res.writeHead(200, { "Content-Type": "text/javascript" });
                    break;
                case ".css":
                    res.writeHead(200, { "Content-Type": "text/css" });
                    break;
                case ".gif":
                    res.writeHead(200, { "Content-Type": "image/gif" });
                    break;
                case ".jpg":
                    res.writeHead(200, { "Content-Type": "image/jpeg" });
                    break;
                case ".png":
                    res.writeHead(200, { "Content-Type": "image/png" });
                    break;
                default:
                    res.writeHead(200, { "Content-Type": "application/octet-stream" });
            }
            fs.readFile(pathname, function(err, data) {
                res.end(data);
            });
        } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Not Found</h1>");
            console.log(" 找不到页面: " + pathname);
        }
    });
}).listen(8080, "192.168.200.100");
console.log("Server running at http://127.0.0.1:8080/");