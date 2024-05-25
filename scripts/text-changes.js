//Welcome Message
//When you open the website, the first text "Hi There!" will change to this after 2 seconds
setTimeout(() => {
    const heading = document.getElementById("Message");
    if (heading) {
        heading.textContent = "Welcome To My Website!";
    }
  }, 2000);