const loanCalculator = (rateOfInterest) => { 
    return [(updatedRate) => (10000*updatedRate*12)/100, () => (10000*rateOfInterest*12)/100]
} 

const homeLoan = loanCalculator(10);
const [updatRateForHomeLoan, displayhomeLoan] = homeLoan;

console.log(displayhomeLoan());
console.log(updatRateForHomeLoan(12));

const carLoan = loanCalculator(10);
const [updatRateForCarLoan, displayCarLoan] = carLoan;

console.log(displayCarLoan());
console.log(updatRateForCarLoan(19));

const educationLoan = loanCalculator(10);
const [updatRateForEducationLoan, displayEducationLoan] = educationLoan;

console.log(displayEducationLoan());
console.log(updatRateForEducationLoan(14));





