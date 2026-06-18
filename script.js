function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(element) {
    var startX = 0;
    var startY = 0;
    var initialLeft = 0;
    var initialTop = 0;
    var header = document.getElementById(element.id + "header");

    if (!element.style.left) {
        element.style.left = element.offsetLeft + "px";
    }
    if (!element.style.top) {
        element.style.top = element.offsetTop + "px";
    }

    if (header) {
        header.onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        document.body.style.overflow = "hidden";
        e = e || window.event;
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = parseInt(element.style.left, 10);
        initialTop = parseInt(element.style.top, 10);
        document.onmousemove = doDrag;
        document.onmouseup = stopDragging;
    }

    function doDrag(e) {
    e = e || window.event;
    e.preventDefault();
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;

    var newLeft = initialLeft + dx;
    var newTop = initialTop + dy;

    newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - element.offsetWidth));
    newTop = Math.max(0, Math.min(newTop, window.innerHeight - element.offsetHeight));

    element.style.left = newLeft + "px";
    element.style.top = newTop + "px";
}
    function stopDragging() {
        document.body.style.overflow = "";
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
