// Code your solution in this file!
const returnFirstTwoDrivers = function(arrDrivers) {
    
    return (arrDrivers.slice(0,2))
}

const returnLastTwoDrivers  = function(arrDrivers) {
    
    return (arrDrivers.slice(arrDrivers.length - 2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(my_multiplier) {
    return function(fare) 
    {
        return fare * my_multiplier ;
    }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrDrivers, fun)
{
    return fun(arrDrivers)
}
