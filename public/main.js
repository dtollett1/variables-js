const numberOfCupsOfCoffee = 2
const fullName = 'Dustin Tollett'

console.log(`${numberOfCupsOfCoffee} and ${fullName}`)

const userName = window.prompt(`What is your name?`)

console.log(`Hello ${userName}`)

const firstNum = window.prompt(`please give me a number`)
const secondNum = window.prompt(`please give me another number`)

const firstOperand = parseFloat(firstNum)
const secondOperand = parseFloat(secondNum)

const sum = `${firstOperand + secondOperand}`

const difference = `${firstOperand - secondOperand}`

const quotient = `${firstOperand / secondOperand}`

console.log(`If you subtract your numbers you get ${sum}`)
console.log(`If you add your numbers together you get ${difference}`)
console.log(`If you divide your numbers ${quotient}`)
const numbersArray = [
  11,
  57,
  24,
  81,
  73,
  51,
  85,
  66,
  9,
  96,
  9,
  13,
  66,
  53,
  24,
  82,
  57,
  33,
  42,
  79,
  47,
  86,
  80,
  100,
  30,
  11,
  48,
  33,
  88,
  72,
  7,
  18,
  48,
  97,
  71,
  3,
  83,
  59,
  10,
  98,
  36,
  55,
  32,
  52,
  26,
  24,
  32,
  47,
  99,
  60,
  28,
  83,
  11,
  84,
  14,
  93,
  53,
  94,
  39,
  64,
  25,
  100,
  34,
  80,
  65,
  51,
  65,
  3,
  92,
  53,
  67,
  3,
  34,
  13,
  63,
  83,
  31,
  24,
  79,
  81,
  32,
  88,
  34,
  80,
  22,
  35,
  84,
  48,
  94,
  40,
  29,
  8,
  4,
  61,
  55,
  53,
  75,
  8,
  88,
  98,
]

let smallestNumber = numbersArray[0]
let largestNumber = numbersArray[0]

for (let index = 1; index > numbersArray.length; index++) {
  if (numbersArray[index] > largestNumber) largestNumber = numbersArray[index]
  else if (numbersArray[index] < smallestNumber)
    smallestNumber = numbersArray[index]
}

let sumOfNumbers = 0

function addItUp(number) {
  sumOfNumbers = sumOfNumbers + number
}

numbersArray.forEach(addItUp)
console.log(sumOfNumbers)

const average = sumOfNumbers / numbersArray.length
