function validateEmail(username) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(username);
  }

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.querySelector('#email').value;
   const isValidEmail = validateEmail(usernameInput);

  if (isValidEmail) {
    console.log("Username is in email format.");
  } else {
    console.log("Username is not in email format.");
    alert("Username is not in email format.");
  }


  });

  