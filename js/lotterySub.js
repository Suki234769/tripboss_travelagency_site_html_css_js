document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('email');
    const messageElement = document.getElementById('message');
    
    // Retrieve used emails from local storage or initialize an empty array
    let usedEmails = JSON.parse(localStorage.getItem('usedEmails')) || [];

    if (subscribeForm && emailInput) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = emailInput.value.trim(); // Get and trim the email

            // Check if the email has already been used
            if (usedEmails.includes(email)) {
                messageElement.textContent = 'This email has already been used. Please enter a different email.';
                messageElement.style.color = 'orange';
                return; // Exit if the email is already used
            }

            // Lower the chances of winning to 1 out of 10 (10% chance)
            const isWinner = Math.random() < 0.1; // 10% chance of winning

            if (isWinner) {
                messageElement.textContent = 'Congrats, you won!';
                messageElement.style.color = 'green';
                console.log(`Email: ${email} - Congrats, you won!`);
            } else {
                messageElement.textContent = 'Sorry, better luck next time.';
                messageElement.style.color = 'red';
                console.log(`Email: ${email} - Sorry, better luck next time.`);
            }

            // Add the email to the used emails array
            usedEmails.push(email);
            localStorage.setItem('usedEmails', JSON.stringify(usedEmails)); // Store in local storage

            // Clear email input and disable the form
            emailInput.value = '';  // Clear email field
            emailInput.disabled = true;  // Disable email input
            subscribeForm.querySelector('.btn').disabled = true;  // Disable submit button

            // Optionally, add a message that the user needs to refresh to try again
            const refreshMessage = document.createElement('p');
            refreshMessage.textContent = 'Please refresh the page to try again.';
            messageElement.appendChild(refreshMessage);
        });
    } else {
        console.error('Form or email input not found');
    }
});
