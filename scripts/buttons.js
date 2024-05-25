//Next and Back buttons
//When you click on them it gets the data target attribute from the button and changes the page
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("button[data-target]").forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = button.getAttribute("data-target");
        });
    });
});
