//Pop-up Messages for each of the homepages
function blogHome() {
alert("This is a list of all my blog posts.");
}

function designHome() {
alert("Click on the preferred image to open the each section of the Design Process.");
}

function essaysHome() {
alert("Click on the preferred image to open the essay.");
}

function portfolioHome() {
alert("Click on the preferred image to find out more about me in my Profile and Portfolio sections.");
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


  
