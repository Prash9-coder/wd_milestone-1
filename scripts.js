fetch('https://www.dummyserver.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// script.js

function validateForm() {
    let valid = true;
  
    // Clear previous error messages
    document.getElementById("nameError").style.visibility = 'hidden';
    document.getElementById("emailError").style.visibility = 'hidden';
    document.getElementById("passwordError").style.visibility = 'hidden';
  
    // Validate name
    const name = document.forms["registrationForm"]["name"].value;
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      document.getElementById("nameError").style.visibility = 'visible';
      valid = false;
    }
  
    // Validate email
    const email = document.forms["registrationForm"]["email"].value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      document.getElementById("emailError").style.visibility = 'visible';
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email address.";
      document.getElementById("emailError").style.visibility = 'visible';
      valid = false;
    }
  
    // Validate password
    const password = document.forms["registrationForm"]["password"].value;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  
    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required.";
      document.getElementById("passwordError").style.visibility = 'visible';
      valid = false;
    } else if (!passwordPattern.test(password)) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters long, and include letters, numbers, and special characters.";
      document.getElementById("passwordError").style.visibility = 'visible';
      valid = false;
    }
  
    if (valid) {
      alert("Registered successfully!");
      // Simulate form submission
      return true;
    }
  
    return false;
  }
  