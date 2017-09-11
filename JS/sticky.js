var num = 100;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav').addClass('fixed');
    } 
    else {
        $('.nav').removeClass('fixed');
    }
});