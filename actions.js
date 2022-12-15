document.getElementById("Sphere").onclick = add;

var y = 100
var x = 650

// var last_id = 0
var eps = 0.001

// ввод параметров
var d_del_lambda = 5;
var L = 5;
var distance = 10;

function add() {
    dots.push(two.makeCircle(50 + L, centerY, 3));
    dots[i].fill = dot_color;
    dots[i].stroke = dot_stroke;
    var slot = Math.round(1 - 0.5 + Math.random() * (2));
    // cords.push(Math.random() * (900 - 0) + 0);
    // console.log(cords[i]);
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
    for (let i = 0; i < arr.length; i++)
        arr[i] = 0;
    my_chart.update();
};

document.getElementById("start").onclick = function () {
    clearInterval(refresh);
    refresh = window.setInterval(add, 1000 / document.getElementById("speed").value);
};

document.getElementById("stop").onclick = function () {
    clearInterval(refresh);
    my_chart.data.datasets.data = arr
    my_chart.update()
};

document.getElementById("graph").onclick = function () {
    my_chart.data.datasets.data = arr;
    my_chart.update();
};

const newEvent = new Event('enter');
act = ['enter', 'input'];

act.forEach(function (e) {
    document.getElementById("speed").addEventListener(e, function () {
        clearInterval(refresh);
        rangeSpeed.value = Math.round(this.value / 10);
        refresh = window.setInterval(add, 1000 / Math.round(this.value / 10));
    });
    document.getElementById("dist").addEventListener(e, function () {
        rangeDist.value = Math.round(this.value / 10);
        distance = this.value / 10;
    });
    document.getElementById("dlamb").addEventListener(e, function () {
        rangeDlamb.value = Math.round(this.value / 10);
        d_del_lambda = Math.round(this.value / 10);
    });
    document.getElementById("Len").addEventListener(e, function () {
        rangeL.value = Math.round(this.value / 10);
        L = Math.round(this.value / 10);
    });
});

document.getElementById("rangeSpeed").onchange = function () {
    if (validation(this, speed) == 0)
        speed.dispatchEvent(newEvent);
    else
        clearInterval(refresh);
}

document.getElementById("rangeDist").onchange = function () {
    if (validation(this, dist) == 0)
        dist.dispatchEvent(newEvent);
}

document.getElementById("rangeDlamb").onchange = function () {
    if (validation(this, dlamb) == 0)
        dlamb.dispatchEvent(newEvent);
}

document.getElementById("rangeL").onchange = function () {
    if (validation(this, Len) == 0)
        Len.dispatchEvent(newEvent);
}

function validation(numberid, rangeid) {
    if (numberid.value < numberid.min || numberid.value > numberid.max)
        return 1;
    else {
        rangeid.value = Math.floor(numberid.value) * 10;
        return 0;
    }
}