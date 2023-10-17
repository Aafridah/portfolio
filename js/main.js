var xValues = [
  "jQuery",
  "SQL Server",
  "C#",
  "JavaScript",
  "Bootstrap",
  ".netCore",
];
var yValues = [70, 80, 60, 70, 60, 50];
var barColors = [
  "#3F556F",
  "#d5c7ba",
  "#2b283d",
  "#bc724f",
  "#7e3934",
  "#7b86a4",
];
/*[
  "#e2bef1",
  "#f5cdde",
  "#f9ded7",
  "#fbf7d5",
  "#c6f8e5",
  "#cce1f2",
];*/

new Chart("skillChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    responsive: true,
    legend: { display: false },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100,
          },
        },
      ],
    },
    title: {
      display: false,
    },
  },
});
