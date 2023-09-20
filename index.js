// Code your solution in this file!
const returnFirstTwoDrivers= function(firstTwodrivers) {
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
firstTwodrivers=drivers.splice(0,2);
return firstTwodrivers;
}
const returnLastTwoDrivers= function(lastTwodrivers) {
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
lastTwodrivers=drivers.splice(2,2);
return lastTwodrivers;
}
const selectingDrivers= [
    returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier= function(multiplier){
    let newFare=function(fare){
    let newfareVariable=fare*multiplier;
    return newfareVariable;
    }
   return newFare;
   }

const fareDoubler= createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);


function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    drivers=returnFirstTwoDrivers();
    return drivers;
}