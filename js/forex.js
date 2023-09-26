const dealerIndex = document.getElementById("dealerIndex");
const assetManagerIndex = document.getElementById("assetManagerIndex");
const leverageFundIndex = document.getElementById("leverageFundIndex");
const nonCommercialIndex = document.getElementById("nonCommercialIndex");
const interestRate = document.getElementById("interestRate");
const inflationRate = document.getElementById("inflationRate");
const unemploymentRate = document.getElementById("unemploymentRate");

// ---------- Dealer Index Chart Data Start ----------- //
new Chart(dealerIndex, {
  type: "bar",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(0,0,25,0.5)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [12, 49, 30, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
        borderWidth: -2,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barPercentage: 0.5, // Set the width of the bars to 50% of the available space
    categoryPercentage: 0.7,
  },
});
// ---------- Dealer Index Chart Data End ----------- //

// ---------- Asset Manager Index Chart Data Start ----------- //
new Chart(assetManagerIndex, {
  type: "bar",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 1, 3, 5],
        backgroundColor: "rgba(0,0,25,0.5)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [12, 19, 30, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
        borderWidth: -2,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barPercentage: 0.5, // Set the width of the bars to 50% of the available space
    categoryPercentage: 0.7,
  },
});
// ---------- Asset Manager Index Chart Data End ----------- //

// ---------- Leverage Fund Index Chart Data Start ----------- //
new Chart(leverageFundIndex, {
  type: "bar",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [23, 1, 13, 5],
        backgroundColor: "rgba(0,0,25,0.5)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [17, 29, 30, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
        borderWidth: -2,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barPercentage: 0.5, // Set the width of the bars to 50% of the available space
    categoryPercentage: 0.7,
  },
});
// ---------- Leverage Fund Index Chart Data End ----------- //

// ---------- Non Commercial Index Chart Data Start ----------- //
new Chart(nonCommercialIndex, {
  type: "bar",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [23, 1, 13, 5],
        backgroundColor: "rgba(0,0,25,0.5)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [17, 29, 30, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
        borderWidth: -2,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barPercentage: 0.5, // Set the width of the bars to 50% of the available space
    categoryPercentage: 0.7,
  },
});
// ---------- Non Commercial Index Chart Data End ----------- //

// ---------- Interest Rate Chart Data Start ----------- //
new Chart(interestRate, {
  type: "line",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [23, 1, 13, 5],
        backgroundColor: "rgba(0,0,25,0.5)",
      },
      {
        label: "Dataset 2",
        data: [17, 29, 30, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    // barPercentage: 0.5, // Set the width of the bars to 50% of the available space
    // categoryPercentage: 0.7,
  },
});
// ---------- Interest Rate Chart Data End ----------- //

// ---------- Inflation Rate Chart Data Start ----------- //
new Chart(inflationRate, {
  type: "line",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [23, 1, 13, 5],
        backgroundColor: "rgba(0,0,25,0.5)",
      },
      {
        label: "Dataset 2",
        data: [17, 29, 30, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// ---------- Inflation Rate Chart Data End ----------- //

// ---------- Unemployment Rate Chart Data Start ----------- //
new Chart(unemploymentRate, {
  type: "line",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [23, 1, 13, 5],
        backgroundColor: "rgba(0,0,25,1)",
      },
      {
        label: "Dataset 2",
        data: [17, 29, 30, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// ---------- Unemployment Rate Chart Data End ----------- //

// ------------- Live Forex News Data Start -------------- ///

// News variable
const specificNews = document.getElementById("liveForexNews");

// Array for Specific News
const specificNewsArray = [
  {
    id: 1,
    title:
      "Pound Austrian Dollar Exchange Rate New: GBP/AUD Rallies on Risk-Averse",
    source: "TorFX News",
    timeAgo: "7",
  },
  {
    id: 2,
    title:
      "Pound Austrian Dollar Exchange Rate New: GBP/AUD Rallies on Risk-Averse",
    source: "TorFX News",
    timeAgo: "7",
  },
  {
    id: 3,
    title:
      "Pound Austrian Dollar Exchange Rate New: GBP/AUD Rallies on Risk-Averse",
    source: "TorFX News",
    timeAgo: "7",
  },
  {
    id: 4,
    title:
      "Pound Austrian Dollar Exchange Rate New: GBP/AUD Rallies on Risk-Averse",
    source: "TorFX News",
    timeAgo: "7",
  },
];

// Applying map over SpecificNewsArray and stores the values in divs accordingly
let specificNewHTML = specificNewsArray?.map((news) => {
  return `<div key=${news.id} id="specific-news" class='mt-2 px-2'>
            <div class="news-source-div d-flex justify-content-between">
                <p style='width: 80%; font-size: 15px'>${news.title}</p>
                <span style='font-size: 12px'>${news.source}</span>
                </div>
                <span class='text-muted'>${news.timeAgo} min Ago</span>
    </div>`;
});

// Setting the map value in News variable
specificNews.innerHTML = specificNewHTML.join("");

// ------------- Live Forex News Data End -------------- ///
