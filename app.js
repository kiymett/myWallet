// selectors

const paymentForm = document.getElementById('payment-form')

const addForm = document.getElementById('add-form')
const incomeInput = document.getElementById('income-input')


// table selectors

const incomeTd = document.getElementById('income')
const expensesTd = document.getElementById('expenses')
const remaining = document.getElementById('remaining')

//Payment selectors

const date = document.getElementById('date')
const quantity = document.getElementById('quantity')
const paymentOfMod = document.getElementById('payment-area')

// variable

let income = 0;
let paymentList = []

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

paymentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log('add payment')
    const payments = {
        id: new Date().getTime(),
        date: date.value,
        quantity: quantity.value,
        paymentOfMod: paymentOfMod.value
    }

    console.log(payments)
    paymentForm.reset()
    paymentList.push(payments)
    console.log(paymentList)
    localStorage.setItem("payments", JSON.stringify(paymentList))
})

// Window first loaded

window.addEventListener('load', () => {
    income = Number(localStorage.getItem('incomes')) || 0
    incomeTd.innerText = income

})

