

document.getElementById('loan-form').addEventListener('submit', function(e){
  
    // Show results
    document.getElementById('results').style.display = 'none';

    // Hide loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

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
        
        
        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide loader
        document.getElementById('loading').style.display = 'none';
    }else {
       showError();
    }

}

function showError(error='please check your amount') {
    // create Div
    const errorDiv = document.createElement("div");

    // get elemenents
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class to the div 
    errorDiv.className = "alert alert-danger";
    
    // create a text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert errer above heading
    card.insertBefore(errorDiv, heading);

    // clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}