import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["January", "March", "May", "Jul", "Sep", "Nov", "Dec"],

        datasets: [
          {
            label: "Earning",
            backgroundColor: "rgba(108,98,154,255)",
            borderColor: "rgba(108,98,154,255)",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 5,
          },
          {
            label: "Rating",
            fill: false,
            backgroundColor: "rgba(168,73,211,255)",
            borderColor: "rgba(168,73,211,255)",
            data: [30, 78, 56, 34, 100, 45, 13],
            barThickness: 5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
               
                callback: function (value) {
                  return ((value / this.max) * 100).toFixed(0) + "%"; // convert it to percentage
                },
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center justify-between">
            <h6 className="text-blueGray-500  mb-1 text-xl ">
              Earning and client rating analytic
            </h6>
            <div className="w-32 relative flex space-x-3 text-white-350 flex-1 px-8 mx-4 text-xs">
              <span className="absolute w-2 h-2 left-8 top-1 rounded-full bg-blue-650"></span>
              <p className="px-2">Earning</p>
              <span className="absolute  w-2 h-2 top-1 leftpx
               rounded-full bg-blue-750"></span>
              <p className="pl-4">Rating</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white-50 shadow-md flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
