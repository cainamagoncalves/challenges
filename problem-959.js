// Good morning! Here's your coding interview problem for today.

// This problem was asked by Pivotal.

// Write an algorithm that finds the total number of set bits in all integers between 1 and N.

function getNumberTotalBits(number) {
  const binaryNumberArray = []

  let quotient = number

  while (quotient > 0) {
    const divisionResult = Math.floor(quotient / 2)
    const divisionRest = quotient % 2

    if (divisionRest > 0) {
      binaryNumberArray.push(1)
    } else {
      binaryNumberArray.push(0)
    }

    quotient = divisionResult
  }

  return binaryNumberArray.reverse().join("")
}

console.log(getNumberTotalBits(1000))