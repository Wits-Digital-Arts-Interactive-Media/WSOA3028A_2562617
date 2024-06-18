//Contact Form

/*The user can contact me by writing a message into the text field from my Portfolio page.
  This is a default response. I don't know how to use PHP code yet so I can't actually receive the message.
  I also did not want to waste time learning how to do it when it is not required for the exam. 
  However, I will learn how to use PHP when I start using my website outside of the course.*/

//This is the function for the Submit button. When it is clicked, the code will check if the user wrote something.
function submitForm() {
    const contactMessage = document.getElementById("contactMessage").value;
    const responseMessage = document.getElementById('responseMessage');

  //If nothing is written, the error message will appear in red. If something is written, the response will appear in purple.
    if (contactMessage.trim() === "") {
        responseMessage.textContent = "Please enter a message.";
        responseMessage.style.color = "red";
    } else {
        responseMessage.textContent = "Thank you for your message!";
        responseMessage.style.color = "purple";

      //Clear the text area when the messageis submitted
        document.getElementById("contactMessage").value = "";
    }
}