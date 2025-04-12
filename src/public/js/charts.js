document.addEventListener("DOMContentLoaded", async function() {
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); // Získání ID z URL
if (!id) {
    console.error("ID not found in URL");
    return;
}
const dataRequest = await fetch(`/data/data-${id}.json`)
const dataFile = await dataRequest.json()

let labels = [] // Osa X
let temp = [] // Osa Y
let airHumidity = [] // Osa Y
let soilMosture = [] // Osa Y
let lightIntensity = [] // Osa Y
dataFile.forEach(i => {
    labels.push(i.time) // Přidání času do osy X
    temp.push(i.temperature) // Přidání teploty do osy Y
    airHumidity.push(i.airHumidity) // Přidání vlhkosti vzduchu do osy Y
    soilMosture.push(i.soilMoisture) // Přidání vlhkosti půdy do osy Y
    lightIntensity.push(i.lightIntensity) // Přidání intenzity světla do osy Y
});

Chart.defaults.color = "#909090";

const graphData = {
  labels: labels,  // Osa X
  datasets: [{
    label: 'Teplota (°C)',  // Popis dat
    data: temp,
    backgroundColor: '#85FF9E',
    borderColor: '#85FF9E',
    tension: 0.5,  // Vyhlazení křivky
    fill: false,
  },
  {
      label: 'Vlhkost vzduchu (%)',  // Popis dat
      data: airHumidity,
      backgroundColor: '#8FB8DE',
      borderColor: '#8FB8DE',
      tension: 0.5,  // Vyhlazení křivky
      fill: false
    },
    {
      label: 'Vlhkost půdy (%)',  // Popis dat
      data: soilMosture,
      backgroundColor: '#DB93B0',
      borderColor: '#DB93B0',
      tension: 0.5,  // Vyhlazení křivky
      fill: false
    },
    {
      label: 'Intenzita světla (lx)',  // Popis dat
      data: lightIntensity,
      backgroundColor: '#F5CB5C',
      borderColor: '#F5CB5C',
      tension: 0.5,  // Vyhlazení křivky
      fill: false
    }]
};

const graphConfig = {
  type: 'line',
  data: graphData,
  options: {
    scales: {
      x: {
        grid: {
          color: '#909090'
        }
      },
      y: {
        beginAtZero: false,
        grid: {
          color: '#909090'
        }
      },
    },
    responsive: true,
  },
};
const graphChart = new Chart(document.getElementById('bigGraph'), graphConfig);

const TempData = {
    labels: labels,  // Osa X
    datasets: [{
      label: 'Teplota (°C)',  // Popis dat
      data: temp,
      backgroundColor: '#85FF9E',
      borderColor: '#85FF9E',
      tension: 0.5,  // Vyhlazení křivky
      fill: false,
    }]
  };

  const TempConfig = {
    type: 'line',
    data: TempData,
    options: {
      scales: {
        x: {
          grid: {
            color: '#909090'
          }
        },
        y: {
          beginAtZero: false,
          grid: {
            color: '#909090'
          }
        },
      }
    },
  };

  const tempChart = new Chart(document.getElementById('temp'), TempConfig);

const AirHumidityData = {
    labels: labels,  // Osa X
    datasets: [{
      label: 'Vlhkost vzduchu (%)',  // Popis dat
      data: airHumidity,
      backgroundColor: '#8FB8DE',
      borderColor: '#8FB8DE',
      tension: 0.5,  // Vyhlazení křivky
      fill: false
    }]
  };

  const AirHumidityConfig = {
    type: 'line',
    data: AirHumidityData,
    options: {
      scales: {
        x: {
          grid: {
            color: '#909090'
          }
        },
        y: {
          beginAtZero: false,
          grid: {
            color: '#909090'
          }
        },
      }
    },
  };
  const airHumidityChart = new Chart(document.getElementById('airHumidity'), AirHumidityConfig);

const SoilMoistureData = {
    labels: labels,  // Osa X
    datasets: [{
      label: 'Vlhkost půdy (%)',  // Popis dat
      data: soilMosture,
      backgroundColor: '#DB93B0',
      borderColor: '#DB93B0',
      tension: 0.5,  // Vyhlazení křivky
      fill: false
    }]
  };

  const SoilMoistureConfig = {
    type: 'line',
    data: SoilMoistureData,
    options: {
      scales: {
        x: {
          grid: {
            color: '#909090'
          }
        },
        y: {
          beginAtZero: false,
          grid: {
            color: '#909090'
          }
        },
      }
    },
  };
  const soilMoistureChart = new Chart(document.getElementById('soilMoisture'), SoilMoistureConfig);


const LightIntensityData = {
    labels: labels,  // Osa X
    datasets: [{
      label: 'Intenzita světla (lx)',  // Popis dat
      data: lightIntensity,
      backgroundColor: '#F5CB5C',
      borderColor: '#F5CB5C',
      tension: 0.5,  // Vyhlazení křivky
      fill: false
    }]
  };

  const LightIntensityConfig = {
    type: 'line',
    data: LightIntensityData,
    options: {
      scales: {
        x: {
          grid: {
            color: '#909090'
          }
        },
        y: {
          beginAtZero: false,
          grid: {
            color: '#909090'
          }
        },
      }
    },
  };
  const lightIntensityChart = new Chart(document.getElementById('lightIntensity'), LightIntensityConfig);


})