export const planetChartData = {
    /*type: "line",
    data: {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: new Date().getFullYear(),
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                data: [65, 78, 66, 44, 56, 67, 75]
            },
            {
                label: new Date().getFullYear() - 1,
                backgroundColor: "#fff",
                borderColor: "#fff",
                data: [40, 68, 86, 74, 56, 60, 87],
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white",
        },
        legend: {
            labels: {
                fontColor: "white",
            },
            align: "end",
            position: "bottom",
        },
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        fontColor: "rgba(255,255,255,.7)",
                    },
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: "Month",
                        fontColor: "white",
                    },
                    gridLines: {
                        display: false,
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: "rgba(33, 37, 41, 0.3)",
                        zeroLineColor: "rgba(0, 0, 0, 0)",
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        fontColor: "rgba(255,255,255,.7)",
                    },
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: "Value",
                        fontColor: "white",
                    },
                    gridLines: {
                        borderDash: [3],
                        borderDashOffset: [3],
                        drawBorder: false,
                        color: "rgba(255, 255, 255, 0.15)",
                        zeroLineColor: "rgba(33, 37, 41, 0)",
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                    },
                },
            ],
        },
    },*/

    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [400, 500, 700, 900, 1000, 750, 500, 600, 300, 250, 120],
                backgroundColor: "#2563eb",
                // borderColor: "#2563eb",
                borderWidth: 3
            },
            {
                label: "Nescau",
                data: [500, 600, 550, 700, 950, 699, 500, 550, 500, 300, 80],
                backgroundColor: "#bfdbfe",
                // borderColor: "#bfdbfe",
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: false,
        lineTension: 1,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ]
        }
    }
};

export default planetChartData;
