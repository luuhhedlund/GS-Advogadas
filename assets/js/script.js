// WINDOW SCROLL
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2500,
    delay: 200
});

ScrollReveal().reveal('.home-content img', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'bottom' });
ScrollReveal().reveal('.escritorio-img', { origin: 'left' });
ScrollReveal().reveal('.escritorio-content p', { origin: 'right' });
ScrollReveal().reveal('.about', { origin: 'top' });

$.scrollIt({
    easing: 'linear',
    topOffset: -70
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('[name="name"]');
    const email = document.querySelector('[name="email"]');
    const message = document.querySelector('[name="message"]');
    if (!name.value || !email.value || !message.value) {
        alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
        alert("Mensagem enviada com sucesso!");
        this.reset();
    }
});



