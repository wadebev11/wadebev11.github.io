function calculateSavings() {
    var term = 0, pAndI = 0, solarPayment = 0, ltv = 0, monthlyPayment = 0, homeValue = 0, interestRate = 0, firstMortgagePayoff = 0, solarPayoff = 0, closingCosts = 0, newLTV = 0, newPayment = 0, monthlySavings = 0, yearlySavings = 0, fiveYearSavings = 0, tenYearSavings = 0;
    term = parseInt(document.getElementById("term").value);
    pAndI = parseInt(document.getElementById("p&i").value);
    solarPayment = parseInt(document.getElementById("extra-payment").value);
    homeValue = parseInt(document.getElementById("home-value").value);
    interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
    firstMortgagePayoff = parseInt(document.getElementById("1st-mortgage-payoff").value);
    solarPayoff = parseInt(document.getElementById("rolled-payoff").value);
    closingCosts = parseInt(document.getElementById("closing-costs").value);
    ltv = firstMortgagePayoff / homeValue * 100;
    monthlyPayment = pAndI + solarPayment;
    newLTV = (firstMortgagePayoff + solarPayoff + closingCosts) / homeValue * 100;
    /*newPayment = (((interestRate / 12) * ((1 + interestRate / 12) ^ term))/((1 + interestRate / 12) ^ term - 1)) * (firstMortgagePayoff + solarPayoff + closingCosts);*/
    newPayment = (((interestRate / 12) * Math.pow((1 + interestRate / 12), term)) / (Math.pow((1 + interestRate / 12), term) - 1)) * (firstMortgagePayoff + solarPayoff + closingCosts);
    
    monthlySavings = monthlyPayment - newPayment;
    yearlySavings = monthlySavings * 12;
    fiveYearSavings = yearlySavings * 5;
    tenYearSavings = fiveYearSavings * 2;
    
    document.getElementById("ltv").innerHTML = "Loan-to-Value:&nbsp;" + ltv.toFixed(0) + "%";
    document.getElementById("monthly-payment").innerHTML = "Monthly Payment: $" + monthlyPayment.toFixed(2);
    document.getElementById("newltv").innerHTML = "New Loan-to-Value:&nbsp" + newLTV.toFixed(0) + "%";
    document.getElementById("new-payment").innerHTML = "New Payment: <b>$" + newPayment.toFixed(2) + "</b>";
    document.getElementById("monthly-savings").innerHTML = "Monthly Savings: <b>$" + monthlySavings.toFixed(2) + "</b>";
    document.getElementById("yearly-savings").innerHTML = "Yearly Savings: $" + yearlySavings.toFixed(2);
    document.getElementById("5-year-savings").innerHTML = "5 Year: $" + fiveYearSavings.toFixed(2);
    document.getElementById("10-year-savings").innerHTML = "10 Year: $" + tenYearSavings.toFixed(2);
    
}
