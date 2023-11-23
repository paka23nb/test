const image = document.getElementById("image");

image.addEventListener("mouseenter", expand);
image.addEventListener("mouseleave", shrink);

function expand() {
  image.style.transform = "scale(1.5)";
}

function shrink() {
  image.style.transform = "scale(1)";
}

function sendInfo() {
  var name = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;
  var message = document.getElementById("message").value;

  let result = document.getElementById("result");

  if (!name || !mail || !message) {
    result.innerHTML = "Please fill out the form.";
  } else {
    result.innerHTML = "You've sent a message " + name + ".";
  }
}
