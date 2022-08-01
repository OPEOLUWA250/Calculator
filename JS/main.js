// javaScript begins
const calculator = document.querySelector('.calculator ')
const keys = calculator.querySelector('.calculator-keys')
const display = calculator.querySelector('.calculator-display')

 
keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return 

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const { type } = key.dataset
    const { previousKeyType } = calculator.dataset   


    // is this a number?
    if (type === 'number') {
    if (displayValue ===  '0') {

        display.textContent = keyValue

    } else if (previousKeyType === 'operator') {
        display.textContent = keyValue
    } 
    else {

        display.textContent =  displayValue + keyValue
    }
     
}

// is this an operator key?   
    if (type === 'operator') {
        const operatorkeys = keys.querySelectorAll('[data-type="operator"]')
        operatorkeys.forEach(el => el.dataset.state = '')
        key.dataset.state = 'selected'

        calculator.dataset.firstNumber = displayValue
        calculator.dataset.operator = key.dataset.key
 }

//  for equal sign
   if (type === 'equal') {
       //perform a calculation
     const firstNumber = parseInt(calculator.dataset.firstNumber)
     const operator = calculator.dataset.operator
     const secondNumber = parseInt(displayValue)                           
    //  console.log(firstNumber, operator, secondNumber)
     display.textContent = calculate(firstNumber, operator, secondNumber)
   }

   if (type === 'clear'){
        display.textContent = '0'
        delete calculator.dataset.firstNumber
        delete calculator.dataset.operator
   }

 calculator.dataset.previousKeyType = type
 
})



function calculate (firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)

   if (operator === 'plus') return firstNumber + secondNumber 
   if (operator === 'minus') return firstNumber - secondNumber 
   if (operator === 'times') return firstNumber * secondNumber 
   if (operator === 'divide') return firstNumber / secondNumber 
   
}

 
 
