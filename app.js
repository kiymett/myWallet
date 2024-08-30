// selectors

const paymentForm = document.getElementById('payment-form')

const addForm = document.getElementById('add-form')
const incomeInput = document.getElementById('income-input')


// table selectors

const incomeTd = document.getElementById('income')
const expensesTd = document.getElementById('expenses')
const remaining = document.getElementById('remaining')
const remainingTh = document.getElementById('remainingTh')

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
        paymentOfMod: paymentOfMod.value,
        quantity: quantity.value,
    }

    console.log(payments)
    paymentForm.reset()
    paymentList.push(payments)
    console.log(paymentList)
    localStorage.setItem("paymentss", JSON.stringify(paymentList))
    paymentWriteDOM(payments)
    calculateAndUpdate()

})

// Window first loaded

window.addEventListener('load', () => {
    income = Number(localStorage.getItem('incomes')) || 0
    incomeTd.innerText = income
    date.valueAsDate = new Date()
    payment = JSON.parse(localStorage.getItem('paymentss')) || []
    payment.forEach((pay) => paymentWriteDOM(pay))
    calculateAndUpdate()

})


// Payment Area

const paymentWriteDOM = ({ id, date, quantity, paymentOfMod }) => {

    paymentBody.innerHTML += `
    <tr>
    <td>${date}</td>
    <td>${paymentOfMod}</td>
    <td>${quantity}</td>
    <td> <i id=${id} class="fa-solid fa-trash-can text-danger" type="danger" >
    </i>
    </td>
    </tr>
    `
}

// Calculate and Update 


const calculateAndUpdate = () => {

    incomeTd.innerText = income;

    const expenses = paymentList.reduce(
        (toplam, pay) => toplam + Number(pay.quantity), 0
    )

    expensesTd.innerText = expenses
    remaining.innerText = (income - expenses)

    const debtor = income - expenses < 0;
    remaining.classList.toggle('text-danger', debtor)
    remainingTh.classList.toggle('text-danger', debtor)



    paymentBody.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.classList.contains("fa-trash-can")) {
            e.target.parentElement.parentElement.remove()
        }

        const id = e.target.id
        console.log(id)

        // deleted output ist deleted from the list 

        paymentList = paymentList.filter(pay => pay.id != id)
        console.log(paymentList)

        localStorage.setItem('paymentss', JSON.stringify(paymentList))

        calculateAndUpdate()
    })
}