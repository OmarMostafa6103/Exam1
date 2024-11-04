var typed = new Typed('#typed-text', {
    strings: ["Developer", "Larry Danials", "Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


const counters = document.querySelectorAll('.value');
const time = 200;

const startCounting = (counter) => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const speed = value / time;
        if (data < value) {
            counter.innerText = Math.ceil(data + speed);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    };
    animate();
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            if (counter.innerText === '0') {
                startCounting(counter);
            }
        } else {
            entry.target.innerText = '0';
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counter.innerText = '0';
    observer.observe(counter);
});

const nav = document.getElementById('nav');
window.onscroll = function () {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
        nav.classList.add('scrolled-about');
    } else {
        nav.classList.remove('scrolled-about');
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("#nav .nav-link");

    function activateNavLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }
    activateNavLink();
    window.addEventListener("scroll", activateNavLink);
});
