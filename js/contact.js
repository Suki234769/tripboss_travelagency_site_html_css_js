

document.addEventListener('DOMContentLoaded', () => {
    // Select the form and its elements
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Check if elements are correctly selected
    console.log('Form:', form);
    console.log('Name Input:', nameInput);
    console.log('Email Input:', emailInput);
    console.log('Message Input:', messageInput);

    if (!form || !nameInput || !emailInput || !messageInput) {
        console.error('One or more form elements are missing. Check your HTML and JavaScript.');
        return;
    }

    // Add an event listener for form submission
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Get the form values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Log form values for debugging
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Check if all fields are filled
        if (name && email && message) {
            // Create a contact object to store in local storage
            const contact = {
                name: name,
                email: email,
                message: message
            };

            // Retrieve existing contacts from local storage or initialize an empty array
            let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

            // Add the new contact to the array
            contacts.push(contact);

            // Store the updated contacts array in local storage
            localStorage.setItem('contacts', JSON.stringify(contacts));

            // Clear the form fields
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';

            // Provide feedback to the user
            alert('Your message has been sent and stored!');
        } else {
            // Alert the user if any field is missing
            alert('Please fill out all fields before submitting.');
        }
    });
});
