// Good morning! Here's your coding interview problem for today.

// This problem was asked by Quora.

// Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.

// For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".


function getShortestStandardizedPath(fullPath) {
  const standardizedPathRegex = /^\/\w+\/\w+(?:\/\w+)*\/$/
  const ignorePointsRegex = /\.+/

  let shortestStandardizedPath = fullPath

  fullPath.split(ignorePointsRegex).forEach(path => {
    if (standardizedPathRegex.test(path) && path.length < shortestStandardizedPath.length) {
      shortestStandardizedPath = path
    }
  })

  return shortestStandardizedPath
}

getShortestStandardizedPath("/usr/bin/../bin/./scripts/test/../t/b/../")