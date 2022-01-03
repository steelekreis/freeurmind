var ctx = document.getElementById('myChart');
//defining the variables for the graph
var scale = [0, 5, 7, 3, 10, 4, 2];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//defining what the graph is going to look like
var myChart = new Chart(ctx, {
    type: 'bar',
    //inserting the data for the graph
    data: {
        labels: days,
        datasets: [{
            label: 'Your daily check-in',
            data: scale,
            //added the colors from the chart.js docs
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(241, 58, 18, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 172, 28, 0.2)",
                "rgba(241, 18, 120, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(241, 58, 18, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 172, 28, 1)",
                "rgba(241, 18, 120, 1)",
            ],
             borderWidth: 1
        }]
    },
    //so it stops filling the entire screen, following steps from stanleyulili.com
    options: {
        maintainAspectRatio: false,
        responsive: false
    },
});