// Smooth scrolling for navbar links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Close mobile menu after click
            if(window.innerWidth < 600) {
                document.getElementById('navbar').classList.remove('active');
            }
        }
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Highlight active navbar link on scroll
window.addEventListener('scroll', () => {
    const sections = ['menu', 'services', 'about'];
    const scrollPos = window.scrollY + 100; // offset for header height

    sections.forEach(id => {
        const section = document.getElementById(id);
        const navLink = document.querySelector(`#navbar a[href="#${id}"]`);

        if(section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
});
