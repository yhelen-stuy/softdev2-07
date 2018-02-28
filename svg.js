var pic = document.getElementById("vimage");
var clearB = document.getElementById("clear");
var h = pic.getAttribute("height");
var w = pic.getAttribute("width");
var cX = -1;
var cY = -1;

var drawCircle = function(x, y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", h / 25);
    circle.setAttribute("fill", "red");
    circle.setAttribute("stroke", "black");

    pic.appendChild(circle);
}

var connect = function(x1, y1, x2, y2) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");

    pic.appendChild(line);
}

var reset = function() {
    cX = -1;
    cY = -1;
}

var clear = function(e) {
    e.preventDefault();
    pic.innerHTML = '';
    reset();
}

// Currently sets svg fill to green
var change = function(e) {
    e.preventDefault();
    this.setAttribute("fill", "green");
}

var draw = function(e) {
    e.preventDefault();
    if (e.toElement == this) {
        var x = e.offsetX;
        var y = e.offsetY;
        drawCircle(x, y);
        if (cX < 0 || cY < 0) {
            cX = e.offsetX;
            cY = e.offsetY;
        } else {
            connect(cX, cY, x, y);
            cX = x;
            cY = y;
        }
    }
}

// pic.addEventListener("click", change);
pic.addEventListener("click", draw);
clearB.addEventListener("click", clear);
