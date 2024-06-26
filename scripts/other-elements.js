//Pop-up message 

/*This message notifies the user that the homepage cards are clickable.
  The message only appears once. This is so that it doesn't show up again when the page is reopened.*/
window.addEventListener("DOMContentLoaded", (event) => {
    const messageShown = localStorage.getItem("messageShown");
    if (!messageShown && window.location.pathname.includes("/blogs/index.html")) {
        alert("This page has images that animate when you hover on them. When you click on an image, it takes you to another page.");
        localStorage.setItem("messageShown", true);
    }
});

//Animate images when I hover over them
//Changes the scale of the image when the cursor is on it for 0.2seconds
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





  
