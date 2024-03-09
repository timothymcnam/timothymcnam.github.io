const ctx = document.getElementById('myChart');
const incomeBox = document.getElementById('income');
const button = document.getElementById('button');

incomeBox.value = 100000;
button.addEventListener("click", doughnutChart);

const taxesExpenseMap = new Map();
taxesExpenseMap.set('Health Care', 22);
taxesExpenseMap.set('Social Security', 20);
taxesExpenseMap.set('Defense', 20);
taxesExpenseMap.set('Safety Net', 13);
taxesExpenseMap.set('Veterans', 7);
taxesExpenseMap.set('Interest', 6);
taxesExpenseMap.set('Transportation', 3);
taxesExpenseMap.set('Education', 2);
taxesExpenseMap.set('Research', 2);
taxesExpenseMap.set('Foreign Aid', 1);
taxesExpenseMap.set('Other', 4);

var totalExpenses = 0
taxesExpenseMap.values().forEach( num => {
  totalExpenses = totalExpenses + num;
});

const incomeMultiplierMap = new Map();
taxesExpenseMap.keys().forEach( k => {
  const v = taxesExpenseMap.get(k);
  const multiplier = v/totalExpenses;
  incomeMultiplierMap.set(k, multiplier);
});

function doughnutChart() {

  const income = Number(incomeBox.value);

  const spentIncomeMap = new Map();
  incomeMultiplierMap.keys().forEach( k => {
    const v = incomeMultiplierMap.get(k);
    const spent = income*v;
    spentIncomeMap.set(k, spent);
  });

  console.log(spentIncomeMap.values());

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Array.from(spentIncomeMap.keys()),
      datasets: [{
        label: '$',
        data: Array.from(spentIncomeMap.values()),
        borderWidth: 3
      }]
    },
    options: {
    }
  });
}

function BarGraph() {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

