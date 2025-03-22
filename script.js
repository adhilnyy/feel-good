document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('#faq button');
    const faqProductButtons = document.querySelectorAll('#faqProduct button');

    function faq(button) {
        button.addEventListener('click', function() {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);

            const faqContent = document.getElementById(button.getAttribute('aria-controls'));
            faqContent.classList.toggle('hidden');

            const icon = button.querySelector('span.float-right');
            icon.textContent = isExpanded ? '+' : '×';
        });
    }

    faqProductButtons.forEach(button => faq(button));
    faqButtons.forEach(button => faq(button));
});

// image animation
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".animated-image");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0", "translate-y-10");
                }
            });
        },
        { threshold: 0.3 }
    );

    images.forEach((img) => observer.observe(img));
});



// menu
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});


navMenu.addEventListener("click", (e) => {
  if (e.target === navMenu) {
    navMenu.classList.add("hidden");
  }
});