// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});


// ================= Animated Counters =================
const counters = document.querySelectorAll('.counter');
let countersStarted = false;

function animateCounters() {
  const section = document.querySelector('.about-section');
  const sectionPos = section.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (!countersStarted && sectionPos < screenPos) {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = 200; // smaller = faster

      const updateCount = () => {
        const increment = Math.ceil(target / speed);
        count += increment;
        if (count > target) count = target;
        counter.innerText = count;
        if (count < target) {
          requestAnimationFrame(updateCount);
        }
      };
      updateCount();
    });
    countersStarted = true;
  }
}

// Listen for scroll
window.addEventListener('scroll', animateCounters);


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



