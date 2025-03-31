document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Аты:", name);
    console.log("Email:", email);
    console.log("Хабарлама:", message);
    
    alert("Хабарламаңыз жіберілді!");
});
