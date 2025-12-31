
// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// AOS INIT
AOS.init({
  duration: 1000,
  once: true
});

// CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let msg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.innerText = "Please fill all fields";
  } else {
    msg.style.color = "green";
    msg.innerText = "Message sent successfully!";
    this.reset();
  }
});



