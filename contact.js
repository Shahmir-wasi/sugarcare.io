// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send data to the backend
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show success message
        document.getElementById('contactForm').reset(); // Clear the form
    })
    .catch(error => console.error('Error:', error));
});