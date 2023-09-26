// All Vavriables
const activeTopPositionChart = document.getElementById('activeTopPositionChart');
const activeBottomPositionChart = document.getElementById('activeBottomPositionChart');
const changeInNewPositionChart = document.getElementById('changeInNewPositionChart');
const soldOutPositionChart = document.getElementById('soldOutPositionChart');
const insiderTrackerSearch = document.getElementById('insiderTrackerSearch');



// ---------- Active Top Position Chart data  Start------------- //
new Chart(activeTopPositionChart, {
    type: 'bar',
    data: {
        labels: ['label1', 'labe2', 'label3', 'label4',],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5],
            backgroundColor: "rgba(0,0,255,0.5)",
        }, {
            label: 'Dataset 2',
            data: [12, 49, 30, 5],
            backgroundColor: "rgba(0,0,255,0.5)",
        }]
    },

    options: {
        title: {
            display: true,
            text: 'Recent Senator Trades'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        barPercentage: 0.5, // Set the width of the bars to 50% of the available space
        categoryPercentage: 0.7,

    }
});
// ---------- Active Top Position Chart data End ------------- //


// ---------- Active Bottom Position Chart data Start ------------- //
new Chart(activeBottomPositionChart, {
    type: 'bar',
    data: {
        labels: ['label1', 'labe2', 'label3', 'label4',],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 39, 10, 15],
            backgroundColor: "rgba(0,0,255,0.5)",
        }, {
            label: 'Dataset 2',
            data: [12, 49, 30, 5],
            backgroundColor: "rgba(0,0,255,0.5)",
        }]
    },

    options: {
        title: {
            display: true,
            text: 'Recent Senator Trades'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        barPercentage: 0.5, // Set the width of the bars to 50% of the available space
        categoryPercentage: 0.7,

    }
});
// ---------- Active Bottom Position Chart data End ------------- //


// ---------- Change In New Position Chart data Start ------------- //
new Chart(changeInNewPositionChart, {
    type: 'bar',
    data: {
        labels: ['label1', 'labe2', 'label3', 'label4',],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 209, 39, 5],
            backgroundColor: "rgba(0,0,255,0.5)",
            borderWidth: 1
        }, {
            label: 'Dataset 2',
            data: [100, 49, 30, 5],
            backgroundColor: "rgba(0,0,255,0.5)",
            borderWidth: -2
        }]
    },

    options: {
        title: {
            display: true,
            text: 'Recent Senator Trades'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        barPercentage: 0.5, // Set the width of the bars to 50% of the available space
        categoryPercentage: 0.7,

    }
});
// ---------- Change In New Position Chart data End ------------- //


// ---------- Sold Out Position Chart data Start ------------- //
new Chart(soldOutPositionChart, {
    type: 'bar',
    data: {
        labels: ['label1', 'labe2', 'label3', 'label4',],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 39, 10, 15],
            backgroundColor: "rgba(0,0,255,0.5)",
        }, {
            label: 'Dataset 2',
            data: [12, 49, 30, 5],
            backgroundColor: "rgba(0,0,255,0.5)",
        }]
    },

    options: {
        title: {
            display: true,
            text: 'Recent Senator Trades'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        barPercentage: 0.5, // Set the width of the bars to 50% of the available space
        categoryPercentage: 0.7,

    }
});
// ---------- Sold Out Position Chart data End ------------- //


// ---------- Insider Tracker Search Chart data Start ------------- //
new Chart(insiderTrackerSearch, {
    type: 'line',
    data: {
        labels: ['label1', 'labe2', 'label3', 'label4', 'label5', 'label6', 'label7', 'label8'],
        datasets: [{
            label: 'Dataset 1',
            data: [2, 4, 1, 4, 3, 10, 3, 5],
            backgroundColor: "rgba(0,0,255,0.5)",
            fill: false,
            pointRadius: 2,
            borderColor: "rgba(0,0,255,0.5)",
            cubicInterpolationMode: 'monotone'
        }]
    },

    options: {
        title: {
            display: true,
            text: 'Insider Tracker Search'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        barPercentage: 0.5, // Set the width of the bars to 50% of the available space
        categoryPercentage: 0.7,

    }
});
// ---------- Insider Tracker Search Chart data End ------------- //

