//Pop-up Messages for each of the homepages
function blogHome() {
alert("This is a list of all my blog posts.");
}

function designHome() {
alert("Click on the preferred image to open the each section of the Design Process.");
}

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


  
