//Welcome Message

//When the user opens the website, the first text "Hi There!" will change to "Welcome To My website!" after 2.5 seconds
setTimeout(() => {
    const heading = document.getElementById("Message");
    if (heading) {
        heading.textContent = "Welcome To My Website!";
    }
  }, 2500);