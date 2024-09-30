window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

function alertSubFunc() {
    const emailInput = document.getElementById("email");
    alert("Subscriber added: " + emailInput.value);
}