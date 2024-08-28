// selectors

const paymentForm = document.getElementById('payment-form')

const addForm = document.getElementById('add-form')
const incomeInput = document.getElementById('income-input')


// variable

let income = 0;

//Add Income

addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    income = income + Number(incomeInput.value)
    console.log(income)
})