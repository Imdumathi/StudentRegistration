// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;

    if (studentName === '') {
        alert('Student Name is required.');
        return;
    }

    if (studentEmail === '' || !studentEmail.includes('@')) {
        alert('Valid Email is required.');
        return;
    }

    // If validation passes, you can process the data further
    console.log('Registration data:', { studentName, studentEmail });
    alert('Registration successful!');
    this.reset(); // Clear the form
});
