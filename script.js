let operator = ""
let currentValue = ""
let previousValue = ""

let currentScreen = document.querySelector(".current-screen")
let previousScreen = document.querySelector(".previous-screen")
let numbers = document.querySelectorAll(".numbers")
let operators = document.querySelectorAll(".operator")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let deleteBtn = document.querySelector(".delete")
let decimal = document.querySelector(".decimal")

numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    handelNumber(e.target.textContent)
    currentScreen.textContent = currentValue
  })
)
operators.forEach((op) =>
  op.addEventListener("click", (e) => {
    if (currentValue !== "") {
      getOperator(e.target.textContent)
      previousScreen.textContent = previousValue + " " + operator
      currentScreen.textContent = currentValue
    }
  })
)
clear.addEventListener("click", () => {
  currentValue = ""
  previousValue = ""
  operator = ""
  updateDisplay()
})
deleteBtn.addEventListener("click", () => {
  currentValue = ""
  currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1)
  currentValue += currentScreen.textContent
})
decimal.addEventListener("click", (e) => {
  addDecimal(e.target.textContent)
})
equal.addEventListener("click", () => {
  if (currentValue !== "" && previousValue !== "") {
    calculate()
    currentScreen.textContent = previousValue
    previousScreen.textContent = ""
    currentValue = previousValue
  }
})

let handelNumber = (num) => (currentValue += num)

let getOperator = (op) => {
  operator = op
  previousValue = currentValue
  currentValue = ""
}
let updateDisplay = () => {
  currentScreen.textContent = currentValue
  previousScreen.textContent = previousValue
}
let addDecimal = (decimal) => {
  if (!currentValue.includes(".")) {
    currentValue += decimal
    currentScreen.textContent = currentValue
  }
}

let calculate = () => {
  previousValue = Number(previousValue)
  currentValue = Number(currentValue)

  operator === "+"
    ? (previousValue += currentValue)
    : operator === "-"
    ? (previousValue -= currentValue)
    : operator === "×"
    ? (previousValue *= currentValue)
    : (previousValue /= currentValue)
}
