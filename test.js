// document.addEventListener('DOMContentLoaded', () => { // структура документа загружена   
  
//     new Chart( // инициализируем плагин
//       document.querySelector('.chart'), // первым параметром передаем элемент canvas по селектору
//       // вторым параметром передаем настройки в виде объекта
//       { 
//         type: 'line', // тип графика, в данном случае линейный
//         data: { // общие данные графика в виде объекта
//           labels: ['April', 'May', 'June', 'July', 'August'], // метки по оси X
//           datasets: [ // набор данных, который будет отрисовываться в виде массива с объектами
//             { 
//                 label: 'Books read', // название для определенного графика в виде строки
//                 data: [3, 6, 2, 7, 4] // данные в виде массива с числами, количество должно совпадать с количеством меток по оси X
//             }
//           ]
//         },
//         options: {rotation:90} // дополнительные опции для графика в виде объекта, если не нужны - передаем пустой объект
//       }
//     );
  
//   })