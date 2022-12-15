var elem = document.getElementById('draw-animation');
// window.location.href = 'https://proxy.bmstu.ru:8443/cas/login?service=http://127.0.0.1:5501/';
var refresh = null;

var line_color = "black";
var dot_color = "white";
var dot_stroke = "black";

function styleLine(line) {
    line.fill = "transparent";
    line.linewidth = 2;
    line.stroke = line_color;
}

var two = new Two({ fitted: true }).appendTo(elem);

var centerY = 350;

var serifs = Array();

var lineup = two.makeLine(200, 0, 200, centerY - 20 - distance / 3);
var linecenter = two.makeLine(200, centerY + distance / 3, 200, centerY - distance / 3);
var linedown = two.makeLine(200, centerY + 20 + distance / 3, 200, centerY * 2);
var linewhole = two.makeLine(900, 0, 900, centerY * 2);

styleLine(linedown);
styleLine(linecenter);
styleLine(lineup);
styleLine(linewhole);

for (var i = 0; i <= 40; i++) {
    serifs.push(two.makeLine(890, i * (centerY * 2 - 1) / 40, 900, i * (centerY * 2 - 1) / 40));
    styleLine(serifs[i]);
}

var dots = Array();
var holes = Array();
var cords = Array();
var i = 0;

two
    .bind('update', function (frameCount) {
        for (var j = 0; j < i; j++) {
            if (dots[j].position.x < 197) {
                if (holes[j] == 1) {
                    dots[j].position.x += 4;
                    dots[j].position.y = 350 - (distance / 2 + 5) * Math.sin(Math.PI * ((dots[j].position.x - 50 - L) / (150 - L) - 1 / 2)) - distance / 2 - 5;
                }
                else {
                    dots[j].position.x += 4;
                    dots[j].position.y = 350 + (distance / 2 + 5) * Math.sin(Math.PI * ((dots[j].position.x - 50 - L) / (150 - L) - 1 / 2)) + distance / 2 + 5;
                }
            }
            else if (dots[j].position.x < 900 - dict_poins[String(j)][0]) {
                // else if (dots[j].position.x < 895) {
                if (holes[j] == 1) {
                    dots[j].position.x += 4;
                    dots[j].position.y = 340 - distance + ((340 - distance - cords[j]) / 2) * Math.sin(Math.PI * ((dots[j].position.x - 200) / (700 - dict_poins[String(j)][0]) - 1 / 2)) + (340 - distance - cords[j]) / 2;
                }
                else {
                    dots[j].position.x += 4;
                    dots[j].position.y = 360 + distance - ((360 + distance - cords[j]) / 2) * Math.sin(Math.PI * ((dots[j].position.x - 200) / (700 - dict_poins[String(j)][0]) - 1 / 2)) - (360 + distance - cords[j]) / 2;
                }
            }
        }

        lineup.remove();
        linecenter.remove();
        linedown.remove();

        lineup = two.makeLine(200, 0, 200, centerY - 20 - distance);
        linecenter = two.makeLine(200, centerY + distance, 200, centerY - distance);
        linedown = two.makeLine(200, centerY + 20 + distance, 200, centerY * 2);

        styleLine(linecenter);
        styleLine(lineup);
        styleLine(linedown);
    })
    .play();

function make_serifs() {
    styleLine(linewhole);

    for (var i = 0; i <= 40; i++) {
        styleLine(serifs[i]);
    }
}

const theme = document.querySelector("#theme-link");
document.getElementById("Theme").addEventListener("click", function () {
    if (theme.getAttribute("href") == "light-theme.css") {
        theme.href = "dark-theme.css";
        line_color = "white";
        dot_color = "black";
        dot_stroke = "white";
        make_serifs();

        for (var j = 0; j < i; j++) {
            dots[j].fill = dot_color;
            dots[j].stroke = dot_stroke;
        }
    } else {
        theme.href = "light-theme.css";
        line_color = "black";
        dot_color = "white";
        dot_stroke = "black";
        make_serifs();

        for (var j = 0; j < i; j++) {
            dots[j].fill = dot_color;
            dots[j].stroke = dot_stroke;
        }
    }
});
