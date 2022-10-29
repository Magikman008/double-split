// import Two from 'https://cdn.skypack.dev/two.js@latest';

var elem = document.getElementById('draw-animation');

var centerX = 0;
var centerY = 0;
var offsetY = elem.offsetTop;

// window.onresize = function (event) {
//     two.update();
//     centerX = elem.clientWidth / 2;
//     centerY = elem.clientHeight / 2;
//     orbitA = two.makeCircle(centerX, centerY, 50);
// };

function styleLine(line) {
    line.fill = "transparent";
    line.linewidth = 2;
    line.stroke = "black";
}

window.onload = function () {
    centerY = elem.clientHeight / 2;
    centerX = elem.clientWidth / 2;

    var lineup = two.makeLine(200, 0, 200, centerY - 40);
    styleLine(lineup);

    var linecenter = two.makeLine(200, centerY - 20, 200, centerY + 20);
    styleLine(linecenter);
    console.log(linecenter);

    var linedown = two.makeLine(200, centerY + 40, 200, centerY * 2);
    styleLine(linedown);

    var lineup = two.makeLine(900, 0, 900, centerY * 2);
    styleLine(lineup);

    for (var i = 0; i <= 40; i++) {
        var glinevert = two.makeLine(890, i * (centerY * 2 - 1) / 40, 900, i * (centerY * 2 - 1) / 40);
        styleLine(glinevert);
    }
};

function intRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var two = new Two({ fitted: true }).appendTo(elem);
var dots = Array();
var holes = Array();
var i = 0;

two
    .bind('update', function (frameCount) {
        for (var j = 0; j < i; j++) {
            if (holes[j - 1] <= 0.5 && dots[j].position.x <= 200) {
                dots[j].position.x += 1;
                dots[j].position.y = 350 + 15 * Math.sin(Math.PI * ((dots[j].position.x - 50) / 150 - 1 / 2)) + 15
            }
            else if (dots[j].position.x <= 200) {
                dots[j].position.x += 1;
                dots[j].position.y = 350 - 15 * Math.sin(Math.PI * ((dots[j].position.x - 50) / 150 - 1 / 2)) - 15
            }
        }

    })
    .play();

document.getElementById("Sphere").onclick = function () {

    dots.push(two.makeCircle(50, centerY, 5));
    holes.push(Math.random());
    i++;
};