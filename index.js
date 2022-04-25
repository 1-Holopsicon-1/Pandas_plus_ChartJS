let bar1 = $("#bar1");
let bar2 = $("#bar2");
let bar3 = $("#bar3");
let barArray = [bar1, bar2];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

barArray.forEach((d, i) => new Chart(d, {
    type: 'bar',
   data: {
            labels: names,
            datasets: [
                {
                    label: date[i],
                    data: data[i],
                    backgroundColor: [
                        `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.3)`
                    ],
                }
            ]
        },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                }
            },
        },
    }
}));

new Chart(bar3, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: date[0],
                data: data[0],
                backgroundColor: 'rgba(255, 50, 50, 0.4)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(255, 50, 50, 0.4)',
            },
            {
                label: date[1],
                data: data[1],
                backgroundColor: 'rgba(50, 255, 50, 0.3)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(50, 255, 50, 0.3)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                }
            },
        },
    }
});