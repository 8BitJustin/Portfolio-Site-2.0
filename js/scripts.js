// About image and text slide in
const aboutSlideIn = ()=> {
    $('.about-image').removeClass('slideOutLeft');
    $('.about-text').removeClass('slideOutRight');
    setTimeout(function() {
        $('.about-image').css('display', 'block');
        $('.about-image').addClass('slideInLeft');
        $('.about-text').css('display', 'block');
        $('.about-text').addClass('slideInRight');
    }, 1000);
    setTimeout(function() {
        $('.about-image').removeClass('slideInLeft');
        $('.about-text').removeClass('slideInRight');
    }, 2200);
}

// About image and text slide out
const aboutSlideOut = ()=> {
    $('.about-image').addClass('slideOutLeft');
    $('.about-text').addClass('slideOutRight');
    setTimeout(function() {
        $('.about-image').css('display', 'none');
        $('.about-text').css('display', 'none');
    }, 1200);
}

// Push front page apart to present site
function pushed() {
    $('.topleft_div').delay(650).animate({left: '-50vw'}, 900);
    $('.topright_div').delay(650).animate({left: '100vw'}, 900);
    setTimeout(function() {
        $('#enter-image').addClass('animated fadeOut');
        $('#enter-text').addClass('animated fadeOut');
    }, 50);
    $('.nav-holder').delay(1200).animate({bottom: '2vh'}, 1000);
    $('.nav-holder').css('display', 'block');
    setTimeout(function() {
        $('.topright_div').css('display', 'none');
    }, 1600);
    aboutSlideIn();
}

// Pull front page together to close site
function pulled() {
    $('.topleft_div').delay(400).animate({left: '0vw'}, 900);
    $('.topright_div').delay(400).animate({left: '50vw'}, 900).css('display', 'block');
    setTimeout(function() {
        $('#enter-image').removeClass('fadeOut');
        $('#enter-text').removeClass('fadeOut');
        $('#enter-image').addClass('fadeIn');
        $('#enter-text').addClass('fadeIn');
    }, 1250);
    $('.nav-holder').animate({bottom: '-8vh'}, 400);
    setTimeout(function() {
        $('.nav-holder').css('display', 'none');
    }, 400);
    aboutSlideOut();
}

// Add active class to the current button (highlight it)
var header = document.getElementById("navigation");
var btns = header.getElementsByClassName("nav-icon");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-nav");
    current[0].className = current[0].className.replace(" active-nav", "");
    this.className += " active-nav";
  });
}