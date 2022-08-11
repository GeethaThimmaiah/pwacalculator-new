const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', 'X', '÷', '%', 'C', '=']

let firstValue = ''
let secondValue = ''
let symbol  = ''
let result = ''

const calculate = () => {

  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)

  if (symbol === '+') result = firstValue + secondValue
  if (symbol === '-') result = firstValue - secondValue
  if (symbol === 'X') result = firstValue * secondValue
  if (symbol === '÷') result = firstValue / secondValue
  if (symbol === '%') result = firstValue % secondValue

  display.innerText = result
  firstValue = result

  secondValue = ''

}

const del = () => {
const val = display.innerText
const delData = val.substr(0,val.length-1)
display.innerText = delData;
 
}

for (let button of controlButtons) {
  button.addEventListener('click', () => {
    const { innerText: btnValue } = button
    const btnValueIsSymbol = allSymbols.includes(btnValue)

    if (!secondValue && btnValue === '=') return null

    if (btnValue === 'C') {
      firstValue = secondValue = symbol = ''
      return display.innerText = ''
    }

    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate()
      symbol = btnValue
    }
    else if (!symbol) firstValue += btnValue
    else if (symbol) secondValue += btnValue
    if (btnValue !== '=')
     display.innerText += btnValue
  })
}