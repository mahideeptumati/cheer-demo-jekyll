const ctx = document.getElementById("myChart").getContext("2d");

const pieChartInfo = {
  labels: [],
  datasets: [
    {
      label: "Points",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      data: [],
      hoverOffset: 4,
    },
  ],
};

let myChart = new Chart(ctx, {
  type: "pie",
  data: pieChartInfo,
  options: {
    animation: {
      animateScale: true,
    },
  },
});

function createPie(information) {
  myChart.data = information;
  myChart.update(); //= console.log(information);
}
