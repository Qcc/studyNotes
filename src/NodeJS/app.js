window.onload = function() {
    run();
}

function run() {
    var parent = document.getElementById('root');
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = 'H1javascript';
    div.appendChild(h1);
    parent.appendChild(div);
}