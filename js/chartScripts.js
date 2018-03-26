// Scripts for chart

// Function that ...well... generates the chart
const generateChart = () => {

    let myChart = document.getElementById('myChart').getContext('2d');

    Chart.defaults.global.animation.duration = 1200;

    let skillChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels:['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Python'],
            datasets:[{
            label: 'Languages',
            data: [
                80,
                70,
                70,
                60,
                70,
                60,
                100
            ],
            backgroundColor: '#2F4E6F'
            }]
        },
        options: {
            legend: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// When the enter image is clicked on the front page, this appends the canvas to the html and generates the chart (the generateChart is needed since without, the tech slide won't show the graph for a split second)
$('#enter-image').on('click', () => {
    $('.p-last').append('<canvas id="myChart" width="100%"></canvas>');
    generateChart();
})

// Simply generates the chart when the carousel slides. This makes the animation live when the slide is shown
$('#myCarousel').on('slid.bs.carousel', () => {
    generateChart();
})

// On a timeout, will remove the canvas. Linked to when the 'closing' icon is clicked (this is so the chart doesnt disappear if the tech page is active and the closing is pressed)
$('#exit').click(() => {
    setTimeout(function() {
    $('canvas').remove();
    }, 1400);
})
