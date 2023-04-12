
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

const nonAlpha = /\W+/

function findItersectingNode(A, B) {
  
  const listA = A.split(nonAlpha)
  const listB = B.split(nonAlpha)

  let intersectingNode = 0

  for (let lA of listA) {
    const intersectingNodeFilter = listB.find(lb => Number(lb) === Number(lA))

    if (intersectingNodeFilter) {
      valueTest = lA
      break
    }
  }

  return intersectingNode
}

findItersectingNode('3 -> 7 -> 8 -> 10', '99 -> 1 -> 8 -> 10')