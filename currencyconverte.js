// Exchange rates for different currencies

const exchangeRates = {
    CLP: 0.0012,
    ARS: 0.015,
    USD: 1.00,
    EUR: 0.85,
    TRY: 9.50,
    GBP: 0.75,
};

// Minimum allowed amounts for each currency
const minAmounts = {
    CLP: 1000,
    ARS: 50,
    USD: 10,
    EUR: 10,
    TRY: 10,
    GBP: 10,
};

// Maximum allowed amounts for each currency
const maxAmounts = {
    CLP: 1000000,
    ARS: 5000,
    USD: 1000,
    EUR: 1000,
    TRY: 3000,
    GBP: 2000,
};

// Commission rate for withdrawal
const commissionRate = 0.01;

// Function to perform currency conversion
function currencyConverter() {
    console.log("Welcome to Jess`s Currency Converter");

    do {
        let fromCurrency = prompt("Enter your initial currency:").toUpperCase();
        let toCurrency = prompt("Enter the currency you want to exhange to:").toUpperCase();
        let amount = parseFloat(prompt("Enter the amount:"));

        if (isNaN(amount) || amount <= 0) {
            console.log("Invalid amount. Please enter a valid amount.");
            continue;
        }

        if (amount < minAmounts[fromCurrency] || amount > maxAmounts[fromCurrency]) {
            console.log(`Amount must be between ${minAmounts[fromCurrency]} and ${maxAmounts[fromCurrency]}`);
            continue;
        }

        let withdrawFunds = confirm("Do you want to withdraw funds?");
        let convertedAmount = amount * exchangeRates[toCurrency];

        if(withdrawFunds) {
            let commission = convertedAmount - commissionRate;
            convertedAmount -= commission;
            
            console.log(`You will receive ${convertedAmount.toFixed(2)} ${tuCurrency} after a 1% commission.`);
        } 

        else {
            console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
        }

        let anotherOperation = confirm("Do you want to perform another operation?");

        if (!anotherOperation) {
            console.log("Thank you for using Jess`s Currency Converter!");
            break;
        }
    } 

    while (true);
}

currencyConverter();