document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Basic validation
    if (username === "" || password === "" || email === "" || phoneNumber === "") {
        alert("All fields must be filled out");
        event.preventDefault();
    } else if (!isValidPhoneNumber(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number");
        event.preventDefault();
    }
});

function isValidPhoneNumber(phoneNumber) {
    // Simple check for a 10-digit number
    return /^\d{10}$/.test(phoneNumber);
}
