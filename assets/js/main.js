var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;

$on('mousemove', function (e) {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0;
var y = void 0;
var dx = void 0;
var dy = void 0;
var tx = 0;
var ty = 0;
var key = -1;

var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);

    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    } else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;

        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        } else {
            x += dx;
            y += dy;
        }
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
};




