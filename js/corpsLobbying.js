const topCorpLobby = document.getElementById("topCorpLobby");
const highestBooking = document.getElementById("highestBooking");

// ----------- Top Corp Lobby Chart Data Start --------- //
new Chart(topCorpLobby, {
  type: "bar",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
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
    title: {
      display: true,
      text: "Recent Senator Trades",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barPercentage: 0.5, // Set the width of the bars to 50% of the available space
    categoryPercentage: 0.7,
  },
});
// ----------- Top Corp Lobby Chart Data End --------- //


// ----------- Highest booking Chart Data Start --------- //
new Chart(highestBooking, {
  type: "bar",
  data: {
    labels: ["label1", "labe2", "label3", "label4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 209, 39, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [100, 49, 30, 5],
        backgroundColor: "rgba(0,0,255,0.5)",
        borderWidth: -2,
      },
    ],
  },

  options: {
    title: {
      display: true,
      text: "Recent Senator Trades",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barPercentage: 0.5, // Set the width of the bars to 50% of the available space
    categoryPercentage: 0.7,
  },
});
// ----------- Highest booking Chart Data End --------- //



//// ----------------- Bills with Highest Backing and Firm backing script -----------//

// varaibles
const lobbyingListData = document.getElementById("lobbyingListData");
const firmBackingsList = document.getElementById("firmBackings");

// Main Array of highest backing and firms
const corpLobbying_BillsArray = [
  {
    type: "S",
    firms: {
      "3M COMPANY": "S. 379",
      "AMGEN, INC.": "S379",
      "ILLUMINA, INC.": "S. 379",
      "MEDTRONIC, INC.": "S. 379",
      "CARDINAL HEALTH, INC.": "S.379",
      "EDWARDS LIFESCIENCES, LLC": "S.379",
      "BAXTER HEALTHCARE CORPORATION": "S.379",
      "BOSTON SCIENTIFIC CORPORATION": "S.379",
      "THERMO FISHER SCIENTIFIC INC.": "S. 379",
      "REGENERON PHARMACEUTICALS, INC": "S. 379",
      "JOHNSON \u0026 JOHNSON SERVICES, INC.": "S 379",
      "VERTEX PHARMACEUTICALS INCORPORATED": "S. 379",
      "TAKEDA PHARMACEUTICALS AMERICA, INC.": "S. 379",
      "GENERAL ELECTRIC COMPANY (INCLUDING SUBSIDIARIES)": "S 379",
      "MCKESSON CORPORATION AND ITS AFFILIATE U.S. ONCOLOGY (FORMERLY MCKESSON CORP.)":
        "S. 379",
    },
    title:
      "A bill to amend the Fair Labor Standards Act of 1938 to prevent employers from using non-compete agreements in employment contracts for certain non-exempt employees.",
    updateDate: "2023-02-10",
    type_number: ["S379", "S 379", "S.379", "S. 379"],
    latestAction: {
      text: "Read twice and referred to the Committee on Health, Education, Labor, and Pensions.",
      actionDate: "2023-02-09",
    },
  },
  {
    type: "S",
    firms: {
      "REGENERON PHARMACEUTICALS, INC": "S. 379",
      "JOHNSON \u0026 JOHNSON SERVICES, INC.": "S 379",
      "VERTEX PHARMACEUTICALS INCORPORATED": "S. 379",
      "TAKEDA PHARMACEUTICALS AMERICA, INC.": "S. 379",
      "GENERAL ELECTRIC COMPANY (INCLUDING SUBSIDIARIES)": "S 379",
      "2M COMPANY": "S. 379",
      "AMGEN, INC.": "S379",
      "ILLUMINA, INC.": "S. 379",
      "MEDTRONIC, INC.": "S. 379",
      "CARDINAL HEALTH, INC.": "S.379",
      "EDWARDS LIFESCIENCES, LLC": "S.379",
      "BAXTER HEALTHCARE CORPORATION": "S.379",
      "BOSTON SCIENTIFIC CORPORATION": "S.379",
      "THERMO FISHER SCIENTIFIC INC.": "S. 379",
      "MCKESSON CORPORATION AND ITS AFFILIATE U.S. ONCOLOGY (FORMERLY MCKESSON CORP.)":
        "S. 379",
    },
    title:
      "A bill to amend the Fair Labor Standards Act of 1938 to prevent employers from using non-compete agreements in employment contracts for certain non-exempt employees.",
    updateDate: "2023-02-10",
    type_number: ["S379", "S 379", "S.379", "S. 379"],
    latestAction: {
      text: "Read twice and referred to the Committee on Health, Education, Labor, and Pensions.",
      actionDate: "2023-02-09",
    },
  },
  {
    type: "S",
    firms: {
      "MEDTRONIC, INC.": "S. 379",
      "CARDINAL HEALTH, INC.": "S.379",
      "EDWARDS LIFESCIENCES, LLC": "S.379",
      "BAXTER HEALTHCARE CORPORATION": "S.379",
      "REGENERON PHARMACEUTICALS, INC": "S. 379",
      "JOHNSON \u0026 JOHNSON SERVICES, INC.": "S 379",
      "VERTEX PHARMACEUTICALS INCORPORATED": "S. 379",
      "AMGEN, INC.": "S379",
      "ILLUMINA, INC.": "S. 379",
      "BOSTON SCIENTIFIC CORPORATION": "S.379",
      "TAKEDA PHARMACEUTICALS AMERICA, INC.": "S. 379",
      "GENERAL ELECTRIC COMPANY (INCLUDING SUBSIDIARIES)": "S 379",
      "2M COMPANY": "S. 379",
      "THERMO FISHER SCIENTIFIC INC.": "S. 379",
      "MCKESSON CORPORATION AND ITS AFFILIATE U.S. ONCOLOGY (FORMERLY MCKESSON CORP.)":
        "S. 379",
    },
    title:
      "A bill to amend the Fair Labor Standards Act of 1938 to prevent employers from using non-compete agreements in employment contracts for certain non-exempt employees.",
    updateDate: "2023-02-10",
    type_number: ["S379", "S 379", "S.379", "S. 379"],
    latestAction: {
      text: "Read twice and referred to the Committee on Health, Education, Labor, and Pensions.",
      actionDate: "2023-02-09",
    },
  },
  {
    type: "S",
    firms: {
      "JOHNSON \u0026 JOHNSON SERVICES, INC.": "S 379",
      "TAKEDA PHARMACEUTICALS AMERICA, INC.": "S. 379",
      "GENERAL ELECTRIC COMPANY (INCLUDING SUBSIDIARIES)": "S 379",
      "2M COMPANY": "S. 379",
      "REGENERON PHARMACEUTICALS, INC": "S. 379",
      "BAXTER HEALTHCARE CORPORATION": "S.379",
      "AMGEN, INC.": "S379",
      "BOSTON SCIENTIFIC CORPORATION": "S.379",
      "THERMO FISHER SCIENTIFIC INC.": "S. 379",
      "ILLUMINA, INC.": "S. 379",
      "MEDTRONIC, INC.": "S. 379",
      "CARDINAL HEALTH, INC.": "S.379",
      "VERTEX PHARMACEUTICALS INCORPORATED": "S. 379",
      "EDWARDS LIFESCIENCES, LLC": "S.379",
      "MCKESSON CORPORATION AND ITS AFFILIATE U.S. ONCOLOGY (FORMERLY MCKESSON CORP.)":
        "S. 379",
    },
    title:
      "A bill to amend the Fair Labor Standards Act of 1938 to prevent employers from using non-compete agreements in employment contracts for certain non-exempt employees.",
    updateDate: "2023-02-10",
    type_number: ["S379", "S 379", "S.379", "S. 379"],
    latestAction: {
      text: "Read twice and referred to the Committee on Health, Education, Labor, and Pensions.",
      actionDate: "2023-02-09",
    },
  },
];

// Firms Backing against specific backing List
const getFirmsFirstData = (firms) => {
  let enteries = Object.entries(firms);
  let data = enteries.map(([key, val] = entry) => {
    return `${key} ${val}`;
  });

  // Maping over data
  const firmsBackingMap = data?.map((firm) => {
    return `           <ul>
         <li>${firm}</li>
       </ul>
    `;
  });

// Here setting the map value to firmBackingList variable
  firmBackingsList.innerHTML = firmsBackingMap.join("");
};

// calling the function for first Index
getFirmsFirstData(corpLobbying_BillsArray[0].firms);

const getFirmBackings = (params, event) => {
  // remove 'active' class from previously clicked item
  const activeElements = document.querySelectorAll(".activelobbyingList");
  activeElements.forEach((elem) => {
    elem.classList.remove("activelobbyingList");
  });

  // Adding back the 'activelobbyingList' class
  event.currentTarget.classList.add("activelobbyingList");

  // here calling the same function above and passing the firms data to it
  getFirmsFirstData(params?.firms);
};

// Maping over Main List of Backing
const corpLobbying_BillsMap = corpLobbying_BillsArray?.map((list, i) => {
  return `    
    <div class='mt-2 lobbyingList p-2 ${
      i === 0 ? "activelobbyingList" : ""
    }' style='margin-top: '10px' key=${i} onClick='getFirmBackings(${JSON.stringify(
    list
  )}, event)'}>
      <div  class='d-flex justify-content-between align-items-center'>
        <span><span style='font-weight: 600'>Bill Type : </span>${
          list.type
        }</span>
       <div>
       <span style='font-weight: 600'>Updated : </span>
       <span>${list.latestAction.actionDate}</span>
       </div>
      </div>
      <h5 class='text-white mt-1' style='font-weight: 600'>Title : </h5>
      <p>${list.title}</p>
      <h5 class='text-white' style='font-weight: 600'>Latest Title : </h5>

      <p style='font-size: 12px'>${list.latestAction.text}</p>
    </div>
    `;
});

// here setting it in 'lobbyingListData' variable
lobbyingListData.innerHTML = corpLobbying_BillsMap.join("");
