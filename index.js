// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    let newDrivers1 = drivers.slice(0,2)
    return newDrivers1;
};
function returnLastTwoDrivers(drivers){
    let newDrivers2 = drivers.slice(2,4)
    return newDrivers2;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function (fareMultiplier) {
    return function(value){
        return fareMultiplier * value;
    }
}
function fareDoubler(numbers){
    let sum = numbers * 2
    return sum
};
function fareTripler(price){
    let total = price * 3
    return total
};
const selectDifferentDrivers = function (drivers,command){
    return command(drivers);
}

