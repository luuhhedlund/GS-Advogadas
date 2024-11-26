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


ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.articles h2', { origin: 'top' });

$.scrollIt({
    easing: 'linear',
    topOffset: -70
});
