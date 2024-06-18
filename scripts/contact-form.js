function submitForm() {
    const contactMessage = document.getElementById("contactMessage").value;
    const responseMessage = document.getElementById('responseMessage');

    if (contactMessage.trim() === "") {
        responseMessage.textContent = "Please enter a message.";
        responseMessage.style.color = "red";
    } else {
        responseMessage.textContent = "Thank you for your message! (This is a default response. I don't know how to use PHP code yet so I didn't actually receive your message.)";
        responseMessage.style.color = "purple";

      //Clear the text area when the messageis submitted
        document.getElementById("contactMessage").value = "";
    }
}