// Toggle between Sign In and Sign Up forms
document.getElementById('switch-to-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signin-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('switch-to-signin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signin-form').style.display = 'block';
});

// Handle Sign In Form Submission
document.getElementById('doctorSignInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/doctors/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = 'doctor_dashboard.html'; // Redirect to dashboard
    })
    .catch(error => console.error('Error:', error));
});

// Handle Sign Up Form Submission
document.getElementById('doctorSignUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const specialization = document.getElementById('specialization').value;

    fetch('/api/doctors/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, specialization })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = 'doctor_dashboard.html'; // Redirect to dashboard
    })
    .catch(error => console.error('Error:', error));
});