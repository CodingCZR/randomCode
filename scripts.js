const buttonBox = document.getElementById("buttonBox");
const messageBox = document.getElementById("messageBox");
const gifImg = document.getElementById("gifImg");
const questionBox = document.getElementById("questionBox");

const buttonPress = document.querySelectorAll(".btn");

buttonPress.forEach(button => {
  button.addEventListener("click", () => {
    if (buttonBox) {
      buttonBox.innerHTML = "";
    }

    if (messageBox) {
      messageBox.textContent = "LETS GOOoo....hit the dms with your avaliability";
    }

    if (questionBox) {
      questionBox.textContent = ""; // Empty the content of the questionBox
    }

    // Change the source of the image
    if (gifImg) {
      gifImg.src = "letsgo.gif"; // Replace with the new source URL
    }
  });
});
