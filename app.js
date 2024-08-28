// selectors

const paymentForm = document.getElementById('payment-form')

const addForm = document.getElementById('add-form')
const incomeInput = document.getElementById('income-input')


// table selectors

const incomeTd = document.getElementById('income')
const expensesTd = document.getElementById('expenses')
const remaining = document.getElementById('remaining')

// variable

let income = 0;

//Add Income

addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    income = income + Number(incomeInput.value)
    console.log(income)
    localStorage.setItem("incomes", income)
    incomeTd.innerText = income;
    addForm.reset()
})

//Payment Form

