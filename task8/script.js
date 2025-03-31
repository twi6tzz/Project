document.addEventListener("DOMContentLoaded", function() {
    let count = localStorage.getItem("counter") || 0;
    document.getElementById("count").textContent = count;
});

function increaseCount() {
    let countElement = document.getElementById("count");
    let count = parseInt(countElement.textContent) + 1;
    countElement.textContent = count;
    localStorage.setItem("counter", count);
}
