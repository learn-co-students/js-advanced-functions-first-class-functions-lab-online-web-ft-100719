const returnFirstTwoDrivers = drivers => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = drivers => {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = m => {
  return n => {
    return m * n;
  };
};

const fareDoubler = fare => {
  return fare * 2;
};

const fareTripler = fare => {
  return fare * 3;
};

const selectDifferentDrivers = (arrayOfDrivers, f) => {
  return f(arrayOfDrivers);
};
