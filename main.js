var carousel = document.querySelector('.carousel');
var container = carousel.querySelector('.carousel-container');
var prevBtn = carousel.querySelector('.carousel-prev');
var nextBtn = carousel.querySelector('.carousel-next');
var pagination = carousel.querySelector('.carousel-pagination');
var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
var totalItems = container.querySelectorAll('.carousel-item').length;
var percent = (100 / totalItems);
var currentIndex = 0;

// carousel
function next() {
    slideTo(currentIndex + 1);
}

function prev() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}

bullets[currentIndex].classList.add('active-bullet');
prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);

pagination.addEventListener('click', function(e) {
    var index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
        slideTo(index);
    }
}, false);

// nav bar

function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-here').offset().top;
    if (window_top > top) {
        $('#navbar').addClass('stick');
        $('#stick-here').height($('#navbar').outerHeight());
    } else {
        $('#navbar').removeClass('stick');
        $('#stick-here').height(0);
    }
}
$(function() {
    $(window).scroll(sticktothetop);
    sticktothetop();
});

//scroll to Portfolio
// $('#slide-down').click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#slide-here").offset().top
//     }, 1000);
// });

function goToPortfolio() {
    let portfolio = document.getElementById("slide-here");

    portfolio.scrollIntoView({behavior: "smooth"})
}
