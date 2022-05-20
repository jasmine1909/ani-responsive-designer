const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

//scroll 

const sr = ScrollReveal({
	origin: "top",
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: true
})
// go down
sr.reveal('.home-text')
sr.reveal('.social', { delay: 500 })
sr.reveal('.top-btn', { delay: 700 })
sr.reveal('.sub-service', { delay: 800, origin: "bottom" })

sr.reveal('.sub-img', { interval: 100 })
sr.reveal('.about-img', { origin: "left" })
sr.reveal('.about-text', { origin: "right" })
sr.reveal('.top-btn', { delay: 700 })
sr.reveal('.top-btn', { delay: 700 })

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact', { delay: 1000, origin: 'bottom' })

