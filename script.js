// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjusted offset for better active state switching
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove active from all nav links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add active to the current section's nav link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ScrollReveal animation (NEW)
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-content p, .home-imgHover, .about-img', { origin: 'bottom' }); // Removed .home-sci here
ScrollReveal().reveal('.about-content h3, .about-content p, .btn-box.btns, .education-column, .skills-column, .contact form', { origin: 'left' });
ScrollReveal().reveal('.project-box', { origin: 'right', interval: 100 }); // Staggered reveal for projects
ScrollReveal().reveal('.contact-sci', { origin: 'bottom', delay: 400 }); // Added reveal for contact social icons


// Dynamic Text Animation for Job Titles (NEW)
const jobTitles = [
    "Cybersecurity Enthusiast",
    "Front-End Developer",
    "Web Developer",
    "Database Administrator",
    "Back-End Developer",
    "UX/UI Designer",
    "Active Directory",
    "Level 1 Network Support",
    "Software Quality Testing",
    "Information Security"
];

let currentTitleIndex = 0;
const textAnimateElement = document.querySelector('.home-content .text-animate h3');
const animationDuration = 500; // milliseconds for fade in/out
const displayDuration = 2500; // milliseconds each title is displayed

function updateJobTitle() {
    // Add fade-out class to start animation
    textAnimateElement.classList.add('fade-out');

    // After fade-out, change text and fade in
    setTimeout(() => {
        textAnimateElement.textContent = jobTitles[currentTitleIndex];
        textAnimateElement.classList.remove('fade-out');
        textAnimateElement.classList.add('fade-in'); // Add fade-in class

        // After fade-in, remove fade-in class to reset for next animation
        setTimeout(() => {
            textAnimateElement.classList.remove('fade-in');
        }, animationDuration);

        currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length; // Cycle through titles
    }, animationDuration); // Wait for fade-out to complete before changing text
}

// Initial call to display the first title
updateJobTitle();

// Set interval to change title periodically
setInterval(updateJobTitle, displayDuration + animationDuration); // Total time for each cycle