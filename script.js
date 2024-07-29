function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Basic validation
    if (username === "" || password === "") {
        alert("Please enter both username and password");
        return;
    }

    // Navigate to a new page (for demonstration purposes)
    window.location.href = "register.html"; // Change this to your desired page
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                event.target.parentNode.classList.add('checked');
            } else {
                event.target.parentNode.classList.remove('checked');
            }
        });
    });
});
