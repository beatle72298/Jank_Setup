$(document).ready(function(){
	// grab the initial top offset of the navigation 
        var stickyNavTop = $('.navbar').offset().top;
        var bgChangeTop = $('#Video').offset().top;
    
    // our function that decides weather the navigation bar should have 'fixed' css position or not.
        var stickyNav = function(){			    
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top
		         
            // if we've scrolled more than the navigation, change its position to fixed to stick to top,
            // otherwise change it back to relative
            if (scrollTop > stickyNavTop - 100){
                $('#header-bar').removeClass('exclusion');
                $('.navbar').addClass('sticky');
                $('#header-bar').css('padding', '0');
                $('#header-bar').addClass('header-shrink');
                $('#navbar').addClass('nav-shrink');
             } else {
                 $('#header-bar').addClass('exclusion');
                $('.navbar').removeClass('sticky');
                $('#header-bar').css('padding', '1.5rem 2rem');
                $('#header-bar').removeClass('header-shrink');
                $('#navbar').removeClass('nav-shrink');
        }
    };
    stickyNav();
    
//    var bgChange = function(){
//        var scrollTop = $(window).scrollTop();
//        
//        if (scrollTop > bgChangeTop){
//            $('.main-bg').addClass('bgChange');
//        } else {
//            $('.main-bg').removeClass('bgChange')
//        }
//    };
//    bgChange();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
//        bgChange();
});
    


    
    //Down arrow scroll animation
    var downArrowTop = $('.down-arrow').offset().top;
    
    var hideArrow = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= downArrowTop - 450){
            $('.down-arrow a').animate({
            opacity: 'hide'},400);
        } else{
            $('.down-arrow a').animate({
            opacity: 'show'},400);
        }
    };
    hideArrow();
    $(window).scroll(function(){
        hideArrow();
    })
})


$('nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 200;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})

$('.down-arrow a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 200) {
        $('.site-wrapper section').each(function(i) {
            if ($(this).position().top <= windscroll + 250){
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

            } else {
                $('nav a.active').removeClass('active');
                $('nav a:first').addClass('active');
    }

}).scroll();

/*-----------------------------------------
---------------LIGHTBOX--------------------
-------------------------------------------*/
$(document).ready(function() {
// Get the modal
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = 'block';
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = 'none';
    }
    }
});

/*--------LOADER SCREEN-------------*/

$(window).on('load', function() {
    $('.loader').fadeOut();
    $('.loader-caption').fadeOut();
    $('.loader-bg').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});

$('.slick').slick({
    autoplay: true,
    fade: true,
    infinite: true,
    dots: true,
    responsive: [
        {breakpoint: 500,
        settings: {
            arrows: false,
            }
        }
    ]
});

$('.slick-2').slick({
    autoplay: true,
    fade: true,
    infinite: true,
    dots: true,
    arrows: false,
});
