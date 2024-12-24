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