document.querySelector(".contact-form").addEventListener("submit", function(event) {
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    if (!emailField.value.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }

    if (messageField.value.length < 10) {
        alert("Please enter a message with at least 10 characters.");
        event.preventDefault();
    }
});
