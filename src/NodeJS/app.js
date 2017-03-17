window.onload = function() {
    run();
}

function run() {
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = 'javascript';
    div.appendChild(h1);
    document.appendChild(div);
}