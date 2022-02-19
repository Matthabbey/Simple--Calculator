let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let total = document.getElementById("sum-el")

function add(){
    let plus = num1 + num2
    total.textContent ="Sum " + plus
}

function subtract(){
    let minus = num1 - num2
    total.textContent ="Sum " + minus
}

function divide(){
    let division = num1 / num2
    total.textContent ="Sum " + division
}
function multiply(){
    let times = num1 * num2
    total.textContent ="Sum " + times
}