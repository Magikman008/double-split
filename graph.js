import Chart from 'chart.js/auto'
// import { getRelativePosistions } from 'chart.js/helpers'

// const chart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: 
// })

my_chart = new Chart(
    {
    type: 'line',
    data: {
        labels: ['April', 'May', 'June', 'July', 'August'],
        datasets: [
        {
            label: 'interference distribution',
            data: [3, 6, 2, 7, 4],
            borderColor: 'crimson',
            borderWidth: 5,
            backgroundColor: 'crimson',
            cubicInterpolationMode: 'monotone' // добавили сглаживание углов
        }
        ]
    },
    options: {}
    }
);
