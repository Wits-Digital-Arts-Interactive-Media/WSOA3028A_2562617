//Reading progress bar 

/*As the reader scrolls through a blog post page, the progress bar will move up.
  When the reader is done scrolling, the bar will be full and when they scroll up, it will move back.*/
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}