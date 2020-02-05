// Code your solution in this file!

const returnFirstTwoDrivers = (driversArr) => {
        return driversArr.slice(0,2);
}

const returnLastTwoDrivers = (driversArr) => {
    return driversArr.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(int){
    const multipliedFare = (fare) => {
        return (fare * int)
    }
    return multipliedFare
}

const fareDoubler =  createFareMultiplier(2)

const fareTripler =  createFareMultiplier(3)

function selectDifferentDrivers(drivers, func){
    return func(drivers)
}