// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// You are given an array of nonnegative integers. Let's say you start at the beginning of the array and are trying to advance to the end. 

// You can advance at most, the number of steps that you're currently on. Determine whether you can get to the end of the array.

// For example, given the array [1, 3, 3, 2, 0, 1], we can go from indices 0 -> 1 -> 3 -> 5, so return true.

// Given the array [1, 2, 1, 0, 0], we can't reach the end, so return false.


function canAdvance(array) {
  let result = true
  for (let i = 0; i < array.length - 1; i++) {
    let nextIndex = 0

    nextIndex = i + array[i]

    i = nextIndex

    if (array[nextIndex] === 0 && nextIndex !== array.length) {
      while (nextIndex > 0) {
        let current = array[nextIndex]

        if (current !== 0 && array[nextIndex + current] !== 0) {
          nextIndex = nextIndex
          break
        }

        nextIndex--
      }

      if (nextIndex === 0) {
        result = false
      }
    }
  }
  return result
}


canAdvance([1, 3, 4, 0, 0, 1])