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

//Payment Body

const paymentBody = document.getElementById('payment-body')

// variables

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
    paymentWriteDOM(payments)
})

// Window first loaded

window.addEventListener('load', () => {
    income = Number(localStorage.getItem('incomes')) || 0
    incomeTd.innerText = income

})


// Payment Area

const paymentWriteDOM = ({ id, date, quantity, paymentOfMod }) => {

    paymentBody.innerHTML += `
    <tr>
    <td>${date}</td>
    <td>${quantity}</td>
    <td>${paymentOfMod}</td>
    <td> <i id=${id} class="fa-solid fa-trash-can text-danger" type="danger" >
    </i>
    </td>
    </tr>
    `
}

