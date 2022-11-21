// подключить библиотеки


// объявить параметры, ввод которых не требуется
var y = 100
var x = 650

// var last_id = 0
var eps = 0.001


// ввод параметров
var d_del_lambda = 5
var L = 5
var distance = 80


// var count = 100


// объявление словаря и массива
let arr = new Array(x)
for (let i = 0; i < arr.length; i++)
    arr[i] = 0
console.log(arr)

var dict_poins = new Object()



// предварительные вычисления





// генератор интерференционной картины
function interfernce_pattern_generator(min, max, id)
{
    A = L / (Math.PI ** 2 * d_del_lambda)
    // получение рандомного числа из встроенного генератора рандомных чисел
    var xx = Math.floor(Math.random() * (max - min + 1))

    // рассчет y_X
    var y_X = (A / xx ** 2) * (Math.sin(L / (Math.PI * d_del_lambda * xx))) ** 2


    // домножить на коэффициент 
    var x_center = (max - min + 1) / 2
    var k = x_center / A * (max - min + 1) ** 2 * 10000

    y_X *= k

    // обработать знак относительно центра входных данных
    var sign = Math.round(1 - 0.5 + Math.random() * (2))
    
    var ans = 0
    if (sign == 1)
        ans = -y_X + x_center
    else
        ans = y_X + x_center

    ans += min

    // обработать выход за границу
    if (ans < 0 + eps)
        ans = interfernce_pattern_generator(min, max, id)

    if (ans > x - eps)
        ans = interfernce_pattern_generator(min, max, id)

    // увеличить в массиве значение соответствующего числа x
    arr[ Math.floor(ans) ] += 1
    
    // рандом для y встроенный
    var yy = Math.floor(Math.random() * (y + 1))

    // добавить в словарь x

    dict_poins[String(id)] = [yy, ans]
    // console.log(dict_poins[String(id)][0], dict_poins[String(id)][1])
    // вернуть значение
    return ans
}


// цикл с счётчиком
// while (last_id < count)  
// {
//     // обработать рандомный выбор отверстия
//     var slot = Math.round(1 - 0.5 + Math.random() * (2))
//     if (slot == 1)
//         interfernce_pattern_generator(1, x - distance, last_id)
//     else
//         interfernce_pattern_generator(1 + distance, x, last_id)

//     console.log(dict_poins[String(last_id)][0], dict_poins[String(last_id)][1])
//     last_id++
// }
// отрисовать точки


// построить график


let arr_labels = new Array(x)
for (let i = 0; i < arr_labels.length; i++)
    arr_labels[i] = i

// добавить гауссовское распределение с установленным счётчиком
document.addEventListener('DOMContentLoaded', () => { // структура документа загружена   
  
    my_chart = new Chart( // инициализируем плагин
      document.querySelector('.chart'), // первым параметром передаем элемент canvas по селектору
      // вторым параметром передаем настройки в виде объекта
      { 
        options: { rotation: 90 },
        type: 'line', // тип графика, в данном случае линейный
        data: { // общие данные графика в виде объекта
          labels: arr_labels, // метки по оси X
          datasets: [ // набор данных, который будет отрисовываться в виде массива с объектами
            { 
                // labels: arr_labels,
                data: arr, // данные в виде массива с числами, количество должно совпадать с количеством меток по оси X
                cubicInterpolationMode: 'monotone' //сглаживание
            }
          ]
        },
        // options: {
        //     scales: {
        //         xAxes: [{
        //           gridLines: {
        //             display: false
        //           }
        //         }],
        //         yAxes: [{
        //           gridLines: {
        //             display: false
        //           }
        //         }]
        //     },
            
        //     rotation:90
        // } // дополнительные опции для графика в виде объекта, если не нужны - передаем пустой объект
      }
    );
  
  })


