const primaryView = document.getElementById("primaryView");
const secondaryView = document.getElementById("secondaryView");

const friendButton = document.getElementById("friendButton");
const flameButton = document.getElementById("flameButton");

const yesFriendButton = document.getElementById("yesFriendButton");
const yesFlameButton = document.getElementById("yesFlameButton");
const noButton = document.getElementById("noButton");

const greetingDiv = document.getElementById("greeting");
const responseDiv = document.getElementById("response");

// Function to move button to random positions
function moveButtonRandomly(button) {
  const randomTop = Math.floor(Math.random() * 500) - 100;
  const randomLeft = Math.floor(Math.random() * 500) - 100;
  button.style.position = "relative";
  button.style.top = randomTop + "px";
  button.style.left = randomLeft + "px";
}

friendButton.addEventListener("click", function () {
  greetingDiv.innerHTML = "Hello Friend! 👋";
  responseDiv.innerHTML = "Buy me a something!!! Asshole!! 😁😁";
  yesFlameButton.style.display = "none";
  primaryView.style.display = "none";
  secondaryView.style.display = "block";
});
flameButton.addEventListener("click", function () {
  greetingDiv.innerHTML = "Hola mi amor!";
  responseDiv.innerHTML = "Do you love me?";
  yesFriendButton.style.display = "none";
  primaryView.style.display = "none";
  secondaryView.style.display = "block";
});

// Event listener for 'Yes' button
yesFlameButton.addEventListener("click", function () {
  responseDiv.innerHTML = "I Love you too! mi amor ❤️💕";
});

yesFriendButton.addEventListener("click", function () {
  responseDiv.innerHTML = "Yeah!!! You are awesome 😃👍 ";
});

noButton.addEventListener("mouseover", function () {
  moveButtonRandomly(noButton);
});
