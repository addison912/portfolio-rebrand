new ClipboardJS("#myEmail");
new ClipboardJS("#clippy");
console.log("here");
let myEmail = document.getElementById("myEmail");
myEmail.addEventListener("mouseup", copyEmail);
document.getElementById("clippy").addEventListener("mouseup", copyEmail);

function copyEmail() {
  let myEmail = document.getElementById("myEmail");
  myEmail.classList.remove("copy");
  myEmail.innerHTML = "Copied to clipboard!";
  let reset = setInterval(() => {
    if (myEmail.innerHTML != "Copied to clipboard!") {
      window.clearInterval(reset);
    }
    myEmail.innerHTML = "addisondrewmoore@gmail.com";
    myEmail.classList.add("copy");
  }, 1200);
}
