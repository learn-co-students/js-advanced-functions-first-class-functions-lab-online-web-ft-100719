function returnFirstTwoDrivers(arr){
    const firstTwoDrivers = function(driverArr){
       return driverArr.slice(0,2)
    }
    return firstTwoDrivers(arr)
}

function returnLastTwoDrivers(arr){
    const lastTwoDrivers = function(driverArr){
        return driverArr.slice(-2)
    }
    return lastTwoDrivers(arr)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareInt){
    return (fare) =>{
        return fare * fareInt
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArr, driverFunction){
    return driverFunction(driverArr)
}