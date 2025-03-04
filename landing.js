// Redirect to Patient Sign In
document.getElementById('patientSignInBtn').addEventListener('click', function() {
    window.location.href = 'patient_auth.html#signin-form';
});

// Redirect to Patient Sign Up
document.getElementById('patientSignUpBtn').addEventListener('click', function() {
    window.location.href = 'patient_auth.html#signup-form';
});

// Redirect to Doctor Sign In
document.getElementById('doctorSignInBtn').addEventListener('click', function() {
    window.location.href = 'doctor_auth.html#signin-form';
});

// Redirect to Doctor Sign Up
document.getElementById('doctorSignUpBtn').addEventListener('click', function() {
    window.location.href = 'doctor_auth.html#signup-form';
});