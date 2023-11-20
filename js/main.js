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
  "#ff9000",
  "#ff9000",
  "#ff9000",
  "#ff9000",
  "#ff9000",
  "#ff9000",
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

// Get the button:
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
