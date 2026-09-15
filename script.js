function calculateDiscount() {
    const amountInput = document.getElementById('amount');
    const finalPrice = document.getElementById('final-price');
    const amount = parseFloat(amountInput.value) || 0;
    if (amount > 0) {
        const discounted = (amount * 0.99).toFixed(2);
        finalPrice.innerText = `₹${discounted} (1% Instant OFF applied)`;
    } else {
        finalPrice.innerText = '₹0.00';
    }
}

function processRecharge(e) {
    e.preventDefault();
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    if(phone.length === 10 && amount > 0) {
        window.location.href = `payment.html?phone=${phone}&amount=${amount}`;
    } else {
        alert('Please enter valid details');
    }
}
