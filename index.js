// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)
const returnLastTwoDrivers = drivers => drivers.slice(-2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(n){
    return fare => n * fare
};
const fareDoubler = fare => {
    return 2 * fare; 
};
const fareTripler = fare => {
    return 3 * fare;
};
const selectDifferentDrivers = (drivers, n) => n(drivers);


