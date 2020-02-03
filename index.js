const returnFirstTwoDrivers = function(driversArray) {
  return [driversArray[0], driversArray[1]]
}

const returnLastTwoDrivers = function(driversArray) {
  return [driversArray[driversArray.length-2], driversArray[driversArray.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driversArray, returnDriversfunc) {
  return returnDriversfunc(driversArray)
} 