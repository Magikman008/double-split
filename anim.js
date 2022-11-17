var elem = document.getElementById('draw-animation');
var refresh = window.setInterval(add, 1000 / document.getElementById("range").value);

clearInterval(refresh);

var color = "black"

function styleLine(line) {
    line.fill = "transparent";
    line.linewidth = 2;
    line.stroke = color;
}

var two = new Two({ fitted: true }).appendTo(elem);

var centerY = 350;


var serifs = Array();
function make_serifs(){
    styleLine(linewhole);

    for (var i = 0; i <= 40; i++) {
        styleLine(serifs[i]);
    }
}

var lineup = two.makeLine(200, 0, 200, centerY - 40 + L / 3);
var linecenter = two.makeLine(200, centerY - 20 + L / 3, 200, centerY + 20 - L / 3);
var linedown = two.makeLine(200, centerY + 40 - L / 3, 200, centerY * 2);
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
            if (dots[j].position.x < 200) {
                if (holes[j] == 1) {
                    dots[j].position.x += 5;
                    dots[j].position.y = 350 + (15 - L / 6) * Math.sin(Math.PI * ((dots[j].position.x - 50) / 150 - 1 / 2)) + 15 - L / 6;
                }
                else {
                    dots[j].position.x += 5;
                    dots[j].position.y = 350 - (15 - L / 6) * Math.sin(Math.PI * ((dots[j].position.x - 50) / 150 - 1 / 2)) - 15 + L / 6;
                }
            }
            else if (dots[j].position.x < dict_poins[String(j)][0] + 850 - y) {
                if (holes[j] == 1) {
                    dots[j].position.x += 5;
                    dots[j].position.y = 380 - L / 3 - (cords[j] - 330) * Math.sin(Math.PI * ((dots[j].position.x - 200) / 1400));
                }
                else {
                    dots[j].position.x += 5;
                    dots[j].position.y = 320 + L / 3 + (cords[j] - 330) * Math.sin(Math.PI * ((dots[j].position.x - 200) / 1400));
                }
            }
        }

        lineup.remove();
        linecenter.remove();
        linedown.remove();

        lineup = two.makeLine(200, 0, 200, centerY - 40 + L / 3);
        linecenter = two.makeLine(200, centerY - 20 + L / 3, 200, centerY + 20 - L / 3);
        linedown = two.makeLine(200, centerY + 40 - L / 3, 200, centerY * 2);

        styleLine(linecenter);
        styleLine(lineup);
        styleLine(linedown);
    })
    .play();

document.getElementById("Sphere").onclick = add;

var y = 100
var x = 650

// var last_id = 0
var eps = 0.001


// ввод параметров
var d_del_lambda = 5;
var L = 5;
var distance = 80;

function add() {
    dots.push(two.makeCircle(50, centerY, 2));
    var slot = Math.round(1 - 0.5 + Math.random() * (2));
    if (slot == 1)
        cords.push(interfernce_pattern_generator(1, x - distance, i));
    else
        cords.push(interfernce_pattern_generator(1 + distance, x, i));

    holes.push(slot);
    // cords.push(interfernce_pattern_generator(1, 650, i));
    i++;
};

document.getElementById("clear").onclick = function () {
    dots.forEach(element => {
        element.remove();
    });
    
    dots.length = 0;
    holes.length = 0;
    cords.lengs = 0;
    dict_poins.lengs = 0;
    i = 0;
};

document.getElementById("start").onclick = function () {
    clearInterval(refresh);
    refresh = window.setInterval(add, 1000 / document.getElementById("range").value);
};

document.getElementById("stop").onclick = function () {
    clearInterval(refresh);
};

document.getElementById("range").oninput = function () {
    clearInterval(refresh);
    rangeValue.innerText = this.value
    refresh = window.setInterval(add, 1000 / this.value);
}

document.getElementById("range2").oninput = function () {
    rangeValue2.innerText = this.value
    distance = this.value
}

document.getElementById("range3").oninput = function () {
    rangeValue3.innerText = this.value
    d_del_lambda = this.value
}

document.getElementById("range4").oninput = function () {
    rangeValue4.innerText = this.value
    L = Number(this.value);
}

const theme = document.querySelector("#theme-link");
document.getElementById("Theme").addEventListener("click", function() {
  if (theme.getAttribute("href") == "light-theme.css") {
    theme.href = "dark-theme.css";
    color = "white";
    make_serifs();
  } else {
    theme.href = "light-theme.css";
    color = "black";
    make_serifs();
  }
});
