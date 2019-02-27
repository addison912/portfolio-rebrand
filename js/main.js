new ClipboardJS("#myEmail");
new ClipboardJS("#clippy");

let myEmail = document.getElementById("myEmail");
myEmail.addEventListener("mouseup", copyEmail);
document.getElementById("clippy").addEventListener("mouseup", copyEmail);

function copyEmail() {
  let myEmail = document.getElementById("myEmail");
  myEmail.innerHTML = "<span id='copied'>Copied to clipboard!<span>";
  let reset = setInterval(() => {
    myEmail.innerHTML != "Copied to clipboard!"
      ? window.clearInterval(reset)
      : null;
    myEmail.innerHTML = "addisondrewmoore@gmail.com";
  }, 1200);
}
