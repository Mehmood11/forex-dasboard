const $institutionalActivePositionsChart = document.getElementById(
  "institutionalActivePositionsChart"
);
const $institutionalNewPositionsChart = document.getElementById(
  "institutionalNewPositionsChart"
);

// -------- Fetch the institutional active and new positions -------- //
fetch("https://api.npoint.io/c189874f4d8f7c14d816")
  .then((response) => response.json())
  .then((data) => {
    // Institutional Active Positions
    const activePositions = data.activePositions.slice(0, -1);
    const activePositionsLabels = pickValueByKeyInArray(
      activePositions,
      "positions"
    );
    const activePositionsData = pickValueByKeyInArray(
      activePositions,
      "holders"
    );
    createChart(
      "Institutional Active Positions",
      activePositionsLabels,
      activePositionsData,
      $institutionalActivePositionsChart
    );

    // Institutional Active Positions
    const newPositions = data.newSoldOutPositions;
    const newPositionsLabels = pickValueByKeyInArray(newPositions, "positions");
    const newPositionsData = pickValueByKeyInArray(newPositions, "holders");
    createChart(
      "Institutional New Positions",
      newPositionsLabels,
      newPositionsData,
      $institutionalNewPositionsChart
    );
  })
  .catch((error) => {
    throw new Error(error);
  });

// ---------- Fetch the changes in active positions and net holders ------ //
fetch("https://api.npoint.io/30c0d720f90a61212b31")
  .then((response) => response.json())
  .then((data) => {
    const changeInActivePositions = Object.keys(data)
      .reduce(
        (aggregate, current) =>
          aggregate +
          Number(data[current]["Change_in_active_positions"].slice(0, -1)),
        0
      )
      .toFixed(2);

    const $institutionalActivePositionsChartChangesNumber =
      document.getElementById("institutionalActivePositionsChartChangesNumber");
    $institutionalActivePositionsChartChangesNumber.innerHTML =
      changeInActivePositions;

    const changeInNetHolders = Object.keys(data)
      .reduce(
        (aggregate, current) =>
          aggregate +
          Number(data[current]["Change_in_Net_holders"].slice(0, -1)),
        0
      )
      .toFixed(2);

    const $institutionalNetHoldersChartChangesNumber = document.getElementById(
      "institutionalNetHoldersChartChangesNumber"
    );
    $institutionalNetHoldersChartChangesNumber.innerHTML = changeInNetHolders;
  })
  .catch((error) => {
    throw new Error(error);
  });

// ---------- fetch institutional top holder -------------- //
fetch("https://api.npoint.io/b15e98da7b057152618b")
  .then((response) => response.json())
  .then((data) => {
    const $institutionalTopHolderTableBody = document.getElementById(
      "institutional-top-holder-table-body"
    );

    for (let index = 0; index < Object.keys(data).length; index++) {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>
            ${data.ownerName[index]}
          </td>
          <td>
            ${data.sharesHeld[index]}
          </td>
          <td>
            ${data.marketValue[index]}
          </td>
          `;
      $institutionalTopHolderTableBody.appendChild(row);
    }
  })
  .catch((error) => {
    throw new Error(error);
  });

// -------------- fetch Corporate lobbying ----------- //
fetch("https://api.npoint.io/1cae29b5fc8900f6cc5a")
  .then((response) => response.json())
  .then((data) => {
    const $corporateLobbyingTableBody = document.getElementById(
      "corporate-lobbying-table-body"
    );
    for (let index = 0; index < Object.keys(data).length; index++) {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>
            ${data["AAPL"][0].expenses[index]}
          </td>
          <td>
            ${data["AAPL"][0].dt_posted[index]}
          </td>
          <td>
            ${data["AAPL"][0].description[index]}
          </td>
          `;
      $corporateLobbyingTableBody.appendChild(row);
    }
  })
  .catch((error) => {
    throw new Error(error);
  });

/**
 * @function createChart
 * @param title Title of the Chart
 * @param data Labels of the Chart data
 * @param data Data of the Chart data
 * @param element HTML element reference
 * @returns chart object
 */
function createChart(title, labels, data, element) {
  var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

  return new Chart(element, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          backgroundColor: barColors,
          data,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: title,
      },
    },
  });
}

function pickValueByKeyInArray(arr, key) {
  const newArr = [];
  arr.forEach((obj) => newArr.push(obj[key]));
  return newArr;
}

// ---------- Insider Chart Data Start ----------- //
const ctx3 = document.getElementById("insiderChart").getContext("2d");

var data = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
  datasets: [
    {
      label: "Data",
      data: [10, 20, 35, 20],
      backgroundColor: "blue",
      borderColor: "black",
      borderWidth: 1,
      barThickness: 14, // Adjust the thickness value as desired
    },
  ],
};

// Set up the options
var options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Insider Chart",
    },
  },
  scales: {
    x: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    y: [
      {
        ticks: {
          reverse: true, // reverse the y-axis values
          beginAtZero: true,
        },
      },
    ],
  },
};

// Create the chart
var chart = new Chart(ctx3, {
  type: "bar",
  data: data,
  options: options,
});
// ---------- Insider Chart Data End ----------- //

// ---------- Insider Tracker Chart Data Start ----------- //
const ctx4 = document.getElementById("insiderTrackerChart");

var xValues = [];
var yValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart(ctx4, {
  type: "line",
  data: {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
    datasets: [
      {
        label: "Label 1",
        fill: false,
        pointRadius: 5,
        borderColor: "rgba(0,0,255,0.5)",
        data: [2, 10, 4, 17],
        cubicInterpolationMode: "monotone",
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "y = sin(x)",
      fontSize: 16,
    },
  },
});

function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
    75;
  }
}
// ---------- Insider Tracker Chart Data End ----------- //
