document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const message = document.getElementById('message').value;

    if (!firstName || !lastName || !email || !company || !phone || !country) {
        alert('Please fill in all required fields.');
        return;
    }

    alert(`Thank you for your message, ${firstName} ${lastName}!`);
    document.getElementById('contactForm').reset();
});
