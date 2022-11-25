

document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
    console.log('Calculating...');
    // variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');    


    // console.log(amount, interest, years, monthlyPayment,totalPayment, totalInterest);

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    console.log(amount);

    // compute the monthly payment 
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest ) / (x - 1);
    
    
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
    }else {
        console.log('Please Check your payment');
    }
    e.preventDefault();
}
