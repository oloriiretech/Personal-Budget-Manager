let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");


addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (category === "") {
    alert("please select a category");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("please enter a valid amount");
    return;
  }
  if (date === "") {
    alert("please select a date");
    return;
  }
  expenses.push({ category, amount, date })

  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  const newRow = expenseTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    console.log(expense);
    expenses.splice(expenses.indexOf(expense), 1);

    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;

    expenseTableBody.removeChild(newRow);
  })
  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn)
})
for (const expense of expenses) {

  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  const newRow = expenseTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);

    totalAmount -= expenses.amount;
    totalAmountCell.textContent = totalAmount;

    expenseTableBody.removeChild(newRow);
  })
  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn)

}


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["College fee", "Rent", "Transport", "Food", "Shopping", "Cool Drinks"],
    datasets: [{
      label: 'Category',
      data: [10, 70, 30, 75, 25, 100],
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


