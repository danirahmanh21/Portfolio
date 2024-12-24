/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

//download cv 
function downloadCV(){
    window.location.href='assets/docu/CV.pdf';
}

//send an e-mail
function sendToGmail(){
    const recipient = "danirahmanh21@gmail.com";
    const subject= encodeURIComponent("Lets Get in Touch!");
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}`);
}

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    // Animate the header
    gsap.from("#home .header-content", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#home",
            start: "top 100%", 
            toggleActions: "play none none reverse" ,
        },
    });

    // Animate About Section
    gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 120%",
            toggleActions: "play none none reverse", 
            scrub : true,
        },
    })
    .from("#about .about-img-holder", { x: -200, opacity: 0, duration: 1 })
    .from("#about .about-caption", { x: 200, opacity: 0, duration: 1 }, "<0.5");

    // Animate Portfolio Section
    gsap.from("#portfolio .portfolio-card", {
        scale: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#portfolio",
            start: "top 80%",
            end: "bottom 120%",
            toggleActions: "play none none reverse", 
            scrub: true,
        },
    });
});