// import Two from 'https://cdn.skypack.dev/two.js@latest';

var elem = document.getElementById('draw-animation');

var centerX = 0;
var centerY = 0;
var offsetY = elem.offsetTop;

window.onresize = function (event) {
    two.update();
    // centerX = elem.clientWidth / 2;
    // centerY = elem.clientHeight / 2;
    // orbitA = two.makeCircle(centerX, centerY, 50);
};

window.addEventListener("DOMContentLoaded", function () {
    // do stuff
}, false);

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

        // var osc = Math.sin(- frameCount / (Math.PI * 8));

        // if (holes > 0) {
        //     dots[i].translation.y += 0.001 * -frameCount;
        // }
        // else {
        //     dots[i].translation.y = frameCount + two.height / 2;
        // }

        // dots.forEach((element) => {
        //     if (element.position.x < 200) {
        //     }
        // })


        dots.forEach((element) => {
            if (element.position.x <= 200) {
                element.position.x += 1;
            }
        })
        
        for (var j = 0; j < i; j++) {
            if (holes[j - 1] == 0 && dots[j].position.x <= 200) {
                dots[j].position.y -= 0.2;
            }
            else if (dots[j].position.x <= 200) {
                dots[j].position.y += 0.2;
            }
        }
        // list.forEach((element) => {
        //     element.translation.x += 1;
        // })
        // }
        // if (osc >= 0.9 && isBackground) {
        //     foreground.add(earth);
        //     isBackground = false;
        // }
        // if (osc <= - 0.9 && !isBackground) {
        //     background.add(earth);
        //     isBackground = true;
        // }

        // earth.translation.y = - osc * two.height / 4 + two.height / 2;

        // if (sun.rotation >= TWO_PI - 0.0625) {
        //     sun.rotation = 0;
        // }

        // sun.rotation += (TWO_PI - sun.rotation) * 0.0625;

    })
    .play();

document.getElementById("Sphere").onclick = function () {

    dots.push(two.makeCircle(50, centerY, 5));
    holes.push(intRange(0, 1));
    i++;
};


// var elementNames = [
//     "",
//     "Hydrogen",
//     "Helium",
//     "Lithium",
//     "Beryllium",
//     "Boron",
//     "Carbon",
//     "Nitrogen",
//     "Oxygen",
//     "Fluorine",
//     "Neon"
// ];

// var styles = {
//     alignment: "center",
//     size: 36,
//     family: "Lato"
// };

// var nucleusCount = 10;
// var nucleusArray = Array();

// var electronCount = 10;
// var electronArray = Array();

// var protonColor = two.makeRadialGradient(
//     0,
//     0,
//     1,
//     new Two.Stop(0, "red", 1),
//     new Two.Stop(1, "black", 1)
// );

// var neutronColor = two.makeRadialGradient(
//     0,
//     0,
//     1,
//     new Two.Stop(0, "blue", 1),
//     new Two.Stop(1, "black", 1)
// );

// for (i = 0; i < nucleusCount; i++) {
//     nucleusArray.push(two.makeCircle(intRange(-10, 10), intRange(-10, 10), 8));
// }

// nucleusArray.forEach(function (nucleus, index) {
//     if (index % 2 == 0) {
//         nucleus.fill = protonColor;
//     }
//     if (index % 2 == 1) {
//         nucleus.fill = neutronColor;
//     }
//     nucleus.noStroke();
// });

// for (var i = 0; i < 10; i++) {
//     if (i < 2) {
//         var shellRadius = 50;
//         var angle = i * Math.PI;
//         electronArray.push(
//             two.makeCircle(
//                 Math.cos(angle) * shellRadius,
//                 Math.sin(angle) * shellRadius,
//                 5
//             )
//         );
//     }
//     if (i >= 2 && i < 10) {
//         var shellRadius = 80;
//         var angle = (i - 2) * Math.PI / 4;
//         electronArray.push(
//             two.makeCircle(
//                 Math.cos(angle) * shellRadius,
//                 Math.sin(angle) * shellRadius,
//                 5
//             )
//         );
//     }
// }





// var text = two.makeText("", centerX, 100, styles);

// nucleusArray.forEach(function (nucleus, index) {
//     nucleus.opacity = 0;
// });

// electronArray.forEach(function (electron, index) {
//     electron.opacity = 0;
// });

// visible = 0;

// document.addEventListener("click", function (event) {
//     if (visible < nucleusArray.length) {
//         nucleusArray[visible].opacity = 1;
//         electronArray[visible].opacity = 1;
//         visible++;
//         text.value = elementNames[visible];
//     }
//     else {
//         nucleusArray.forEach(el => el.opacity = 0);
//         electronArray.forEach(el => el.opacity = 0);
//         visible = 0;
//         text.value = elementNames[0];
//     }
// });  