// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
  let firstTwo = driversArray.slice(0,2);
  return firstTwo
}

const returnLastTwoDrivers = function(driversArray){
  let driver = driversArray.slice(-2);
  return driver
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function(fare){
    return fare * int
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
}
