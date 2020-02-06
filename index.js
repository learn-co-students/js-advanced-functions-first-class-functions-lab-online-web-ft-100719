const returnFirstTwoDrivers = function (drivers) {
  const firstTwo = []
  firstTwo.push(drivers[0])
  firstTwo.push(drivers[1])
  return firstTwo
}

const returnLastTwoDrivers = function (drivers) {
  const lastTwo = []
  lastTwo.push(drivers[drivers.length - 2])
  lastTwo.push(drivers[drivers.length - 1])
  return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return multiplier * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, f) {
  return f(arrayOfDrivers)
}