let pie = $("#Pie");
let pie2 = $("#Pie2");
let pie3 = $("#Pie3");
let pie4 = $("#Pie4");
let pieArray = [pie, pie2, pie3, pie4];
let where = ["left", "right"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
    pieArray.forEach((d, i) => new Chart(d, {
        type: 'pie',
        data: {
            labels: countries,
            datasets: [
                {
                    data: data[i],
                    backgroundColor: [
                        `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.3)`,
                        `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.3)`,
                    ],
                }
            ]
        },

        options: {
            plugins: {
                legend: {
                    display: true,
                    position: where[[Math.floor(Math.random() * where.length)]],
                }
            }
        }
    }));



