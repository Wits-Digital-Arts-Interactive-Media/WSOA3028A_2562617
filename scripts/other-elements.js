//Pop-up Messages
window.addEventListener("DOMContentLoaded", (event) => {
    alert("Click on the image to open the preferred section"); 
});

//Animate images when I hover over them
const images = document.querySelectorAll(".image");

images.forEach(image => {
    image.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.2s";
    });

    image.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.2s";
    });
});



  
